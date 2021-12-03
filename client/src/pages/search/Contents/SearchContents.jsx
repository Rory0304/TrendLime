import React from 'react';
import { Styled } from './styles';
import { useQuery } from 'react-query';

import { fetchSearchKey } from '../../../utils/api/queryKeys';
import { useQueryFetch } from '../../../utils/hooks/useQueryFetch';

function SearchContents({ searchOption }) {
    const { isLoading, error, data, refetch } = useQuery(
        [fetchSearchKey, searchOption],
        useQueryFetch,
        { refetchOnWindowFocus: false },
    );

    return (
        <div>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>가사 속 표현 분석</Styled.SubTitle>
                <Styled.SubContentArea>
                    <div>워드 클라우드</div>
                    <div>주요 표현/단어</div>
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>대표곡</Styled.SubTitle>
                <Styled.AblumList>
                    {isLoading ? (
                        <div>loading...</div>
                    ) : data.result === null || data.result.length === 0 ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        data.result.splice(0, 5).map((song) => (
                            <li>
                                <div>
                                    {song && <img src={song.cover_url} alt={song.song_name} />}
                                    {song && <p>{song.song_name}</p>}
                                </div>
                            </li>
                        ))
                    )}
                </Styled.AblumList>
            </Styled.SubContentsWrapper>
        </div>
    );
}

export default SearchContents;
