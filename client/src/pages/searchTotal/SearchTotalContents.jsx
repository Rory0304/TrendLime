import React, { useMemo, useEffect, useState } from 'react';
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
    const [selectedOption, setOption] = useState('');

    const { isLoading, error, data } = useQuery(
        ['fetchTotalSearch'],

        () =>
            axios
                .get(featchTotalSearchKey, { params: { q: searchKeyword } })
                .then((response) => response.data),
        {
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    );

    /* 자동완성을 위한 데이터 패칭과 분리 필요 */
    // const { isLoading, error, data } = useQuery(
    //     [featchTotalSearchKey, { q: searchKeyword }],
    //     useQueryFetch,
    //     {
    //         refetchOnWindowFocus: false,
    //         refetchOnmount: false,
    //         refetchOnReconnect: false,
    //         retry: false,
    //     },
    // );

    const [{ searchInput }, onChange, reset] = useInput({
        q: searchKeyword,
    });

    const artists = useMemo(() => (data?.artist ? data.artist : []), [data]);
    const albums = useMemo(() => (data?.album ? data.album : []), [data]);
    const songNames = useMemo(() => (data?.song_name ? data.song_name : []), [data]);

    const [searchContents, setContents] = useState({
        title: '가수',
        contents: artists,
    });

    const { title, contents } = searchContents;

    useEffect(() => {
        if (selectedOption === '가수') {
            setContents({
                title: selectedOption,
                contents: artists,
            });
        }
        if (selectedOption === '제목') {
            setContents({
                title: selectedOption,
                contents: songNames,
            });
        }
        if (selectedOption === '앨범') {
            setContents({
                title: selectedOption,
                contents: albums,
            });
        }
    }, [selectedOption]);

    if (isLoading) {
        <div>loading...</div>;
    }
    return (
        <div>
            <SearchBar onChange={onChange} searchInput={searchInput} />
            <Styled.SearchTotalContentsWrapper>
                <h2>'{searchKeyword}' 검색 결과</h2>
                <Styled.SearchOptionsWrapper>
                    <ul>
                        {['가수', '제목', '앨범'].map((option) => (
                            <Styled.SearchOption
                                onClick={() => setOption(option)}
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
