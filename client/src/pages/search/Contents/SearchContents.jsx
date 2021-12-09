import React from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styles';
import { useQuery } from 'react-query';

import { fetchSearchKey } from '../../../utils/api/queryKeys';
import { useQueryFetch } from '../../../utils/hooks/useQueryFetch';

import Wordcloud from '../../../components/WordCloud/index';
import BarChart from '../../../components/BarChart/index';
import Slider from '../../../components/Slider';
import TrendContents from './TrendContents';
import GeneralContents from './GeneralContents';

import route from '../../../routers/routeConstants';

function SearchContents({ searchOption }) {
    const { isLoading, data, isFetching, error } = useQuery(
        [fetchSearchKey, searchOption],
        useQueryFetch,
        {
            initialData: [],
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    );
    //     {/* {rankShown && (
    //     <Styled.Rank>
    //         <span>{index + 1}.</span>
    //     </Styled.Rank>
    // )} */}

    const AlbumSlideItem = ({ songs }) => {
        const items = songs.slice(0, 40).map((item, index) => (
            <Link to={`${route.DETAIL}/${item ? item.song_id : ''}`}>
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
        <div>
            {searchOption.tag === '트렌드' ? (
                <TrendContents data={data} isFetching={isFetching} />
            ) : (
                <GeneralContents
                    data={data}
                    isFetching={isFetching}
                    year={searchOption.category === '트렌드/연도'}
                />
            )}
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>대표곡</Styled.SubTitle>
                {isFetching ? (
                    <div>loading...</div>
                ) : !!data === false ? (
                    <div>데이터가 없습니다. </div>
                ) : (
                    data?.songs[0] && <Slider slideList={AlbumSlideItem({ songs: data.songs })} />
                )}
            </Styled.SubContentsWrapper>
        </div>
    );
}

export default SearchContents;
