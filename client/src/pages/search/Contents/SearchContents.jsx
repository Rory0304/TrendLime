import React from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styles';
import { useQuery } from 'react-query';

import { fetchSearchKey } from '../../../utils/api/queryKeys';
import { useQueryFetch } from '../../../utils/hooks/useQueryFetch';

import Wordcloud from '../../../components/WordCloud/index';
import BarChart from '../../../components/BarChart/index';
import Slider from '../../../components/Slider';

function SearchContents({ searchOption }) {
    const { isLoading, data, isFetching } = useQuery(
        [fetchSearchKey, searchOption],
        useQueryFetch,
        {
            initialData: [],
            enabled: !!searchOption,
            refetchOnWindowFocus: false,
        },
    );

    console.log(searchOption);
    console.log(data, isFetching);

    return (
        <div>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>가사 속 표현 분석</Styled.SubTitle>
                <Styled.SubContentArea>
                    <Wordcloud />
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>노래 가사 TOP10</Styled.SubTitle>
                <Styled.SubContentArea>
                    <BarChart />
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>대표곡</Styled.SubTitle>
                <Styled.AlbumListCarousel>
                    {isFetching ? (
                        <div>loading...</div>
                    ) : data?.length === 0 ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <Slider
                            slideList={
                                searchOption.tag === 'trend'
                                    ? data.songs.splice(0, 10)
                                    : data.result
                                    ? data.result.splice(0, 10)
                                    : data.represent_songs.splice(0, 10)
                            }
                        />
                    )}
                </Styled.AlbumListCarousel>
            </Styled.SubContentsWrapper>
        </div>
    );
}

export default SearchContents;
