import React, { useMemo, useEffect, useState, useLayoutEffect, useCallback } from 'react';
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

function SearchTotalSection({ searchContents }) {
    /* searchContents props가 바뀌고 있는데 초기화가 안 된다!? */
    const UNIT_PAGE = 10;
    const [page, setPage] = useState({
        start: 0,
        end: UNIT_PAGE,
    });
    const [currentContents, setCurrentContents] = useState([]);

    useEffect(() => {
        if (searchContents.contents.length > 0) {
            const SlicedData = searchContents.contents.slice(0, UNIT_PAGE);
            setCurrentContents(SlicedData);
            setPage({
                start: 0 + UNIT_PAGE,
                end: UNIT_PAGE + UNIT_PAGE,
            });
        }
    }, [searchContents]);

    const loadData = () => {
        const SlicedData = searchContents.contents.slice(
            page.start + UNIT_PAGE,
            page.end + UNIT_PAGE,
        );
        setCurrentContents((current) => current.concat(SlicedData));
        setPage({
            start: page.start + UNIT_PAGE,
            end: page.end + UNIT_PAGE,
        });
    };

    return (
        <Styled.SearchTotalSection>
            <div>
                <ul>
                    {currentContents.map((song) => (
                        <Styled.AlbumList>
                            <div>
                                <img src={song.cover_url} alt={song.song_name} />
                            </div>
                            <div>
                                <p
                                    style={{
                                        color: searchContents.title === '제목' ? 'red' : 'black',
                                    }}
                                >
                                    {song.song_name}
                                </p>
                                <p
                                    style={{
                                        color: searchContents.title === '앨범' ? 'red' : 'black',
                                    }}
                                >
                                    {song.album}
                                </p>
                                <p
                                    style={{
                                        color: searchContents.title === '가수' ? 'red' : 'black',
                                    }}
                                >
                                    {song.artist}
                                </p>
                            </div>
                        </Styled.AlbumList>
                    ))}
                </ul>
                <button onClick={loadData}>더 보기</button>
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

    /* artist 정보가 []에서 바뀌게 되면, 보여줄 contents를 설정해줌 */
    useEffect(() => {
        setContents((current) => (current = { title: '가수', contents: artists }));
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
                                active={option === searchContents.title}
                            >
                                {option}
                            </Styled.SearchOption>
                        ))}
                    </ul>
                </Styled.SearchOptionsWrapper>
                {isLoading ? (
                    <div>loading...</div>
                ) : (
                    <SearchTotalSection searchContents={searchContents} />
                )}
            </Styled.SearchTotalContentsWrapper>
        </div>
    );
}

export default SearchTotalContents;
