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

    return (
        <div>
            {searchOption.tag === 'trend' ? (
                <TrendContents data={data} isFetching={isFetching} />
            ) : (
                <GeneralContents data={data} isFetching={isFetching} />
            )}
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>대표곡</Styled.SubTitle>
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
            </Styled.SubContentsWrapper>
        </div>
    );
}

export default SearchContents;
