import React from 'react';
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/react';
import { useQuery } from 'react-query';

import { fetchSearchKey } from '../../utils/api/queryKeys';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';

import route from '../../routers/routeConstants';

import ContentBlock from '../../components/ContentBlock/index';
import Slider from '../../components/Slider/index';
import BarChart from '../../components/BarChart/index';

import { Styled } from '../../components/Slider/styles';

function Section3() {
    const { isLoading, data, isFetching, error } = useQuery(
        [fetchSearchKey, { category: '트렌드/연도', tag: '트렌드' }],
        useQueryFetch,
        {
            initialData: [],
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    );

    /* TODO : 공통 컴포넌트 생성 */
    const AlbumSlideItem = ({ songs }) => {
        const items = songs.slice(0, 10).map((item, index) => (
            <Link to={`${route.DETAIL}/${item ? item.song_id : ''}`}>
                <Styled.Rank>
                    <span>{index + 1}.</span>
                </Styled.Rank>
                <Styled.AlbumCover>
                    <img src={item.cover_url} alt={item.song_name} />
                </Styled.AlbumCover>
                <Styled.SongInfo>
                    <p>{item.song_name}</p>
                    <p>{item.artist}</p>
                </Styled.SongInfo>
            </Link>
        ));
        return items;
    };

    return (
        <div css={Section3Wrapper}>
            <ContentBlock
                type="top"
                contents={['최신 TOP10 가요에서 많이 사용하고 있는 표현을 살펴보세요!']}
            >
                {isFetching ? (
                    <div>loading...</div>
                ) : data?.songs.length === 0 ? (
                    <div>데이터가 없습니다. </div>
                ) : (
                    data?.songs && (
                        <>
                            <Slider slideList={AlbumSlideItem({ songs: data.songs })} />
                            <div css={BarChartSection}>
                                <BarChart
                                    data={data?.words_and_freq.slice(1)}
                                    width="70%"
                                    height="40%"
                                />
                            </div>
                        </>
                    )
                )}
            </ContentBlock>
        </div>
    );
}

const Section3Wrapper = css`
    padding: 8rem 2rem;
`;

const BarChartSection = css`
    margin-top: 3rem;
`;

export default Section3;
