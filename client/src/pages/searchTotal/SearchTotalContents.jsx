import React, { useMemo, useEffect, useState, useLayoutEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { featchTotalSearchKey } from '../../utils/api/queryKeys';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';
import useInput from '../../utils/hooks/useInput';

import SearchBar from '../../common/SearchBar/index';

import { Styled } from './styles';

/**
 * TODO: 컴포넌트 분리 필요
 */
function SearchTotalSection({ title, contents }) {
    return (
        <Styled.SearchTotalSection>
            <div>
                <ul>
                    {contents.map((song) => (
                        <Styled.AlbumList>
                            <div>
                                <img src={song.cover_url} alt={song.song_name} />
                            </div>
                            <div>
                                <p style={{ color: title === '제목' ? 'red' : 'black' }}>
                                    {song.song_name}
                                </p>
                                <p style={{ color: title === '앨범' ? 'red' : 'black' }}>
                                    {song.album}
                                </p>
                                <p style={{ color: title === '가수' ? 'red' : 'black' }}>
                                    {song.artist}
                                </p>
                            </div>
                        </Styled.AlbumList>
                    ))}
                </ul>
            </div>
        </Styled.SearchTotalSection>
    );
}

function SearchTotalContents({ searchKeyword }) {
    /* 한 번만 fetch 해줘도 되기때문에 polling 관련 옵션은 false로 처리*/
    const { isLoading, data, error } = useQuery(
        [featchTotalSearchKey, { q: searchKeyword }],
        useQueryFetch,
        {
            initialData: [],
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    );

    const artists = useMemo(() => (data?.artist ? data.artist : []), [data]);
    const albums = useMemo(() => (data?.album ? data.album : []), [data]);
    const songNames = useMemo(() => (data?.song_name ? data.song_name : []), [data]);

    const [searchContents, setContents] = useState({
        title: '',
        contents: [],
    });

    const { title, contents } = searchContents;

    /* artist 정보가 []에서 바뀌게 되면, 보여줄 contents를 설정해줌 */
    useLayoutEffect(() => {
        setContents({ title: '가수', contents: artists });
    }, [artists]);

    const changeOption = (option) => {
        if (option === '가수') {
            setContents({
                title: option,
                contents: artists,
            });
        }
        if (option === '제목') {
            setContents({
                title: option,
                contents: songNames,
            });
        }
        if (option === '앨범') {
            setContents({
                title: option,
                contents: albums,
            });
        }
    };

    if (isLoading) {
        <div>loading...</div>;
    }
    return (
        <div>
            <SearchBar inputValue={searchKeyword} />
            <Styled.SearchTotalContentsWrapper>
                <h2>'{searchKeyword}' 검색 결과</h2>
                <Styled.SearchOptionsWrapper>
                    <ul>
                        {['가수', '제목', '앨범'].map((option) => (
                            <Styled.SearchOption
                                onClick={() => changeOption(option)}
                                active={option === title}
                            >
                                {option}
                            </Styled.SearchOption>
                        ))}
                    </ul>
                </Styled.SearchOptionsWrapper>
                <SearchTotalSection title={title} contents={contents} />
            </Styled.SearchTotalContentsWrapper>
        </div>
    );
}

export default SearchTotalContents;
