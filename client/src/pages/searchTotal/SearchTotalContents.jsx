import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { featchTotalSearchKey } from '../../utils/api/queryKeys';
import queryFetch from '../../utils/api/queryFetch';
import highlightKeyword from '../../utils/highlightKeyword';
import route from '../../routers/routeConstants';

import SearchBar from '../../common/SearchBar/index';

import { Styled } from './styles';

/* 제목 / 앨범/ 가수 기준으로 필터링된 콘텐츠를 키워드 색상 하이라이트 표시함. */
function highlightedKeywordByCategory(title, contents, searchKeyword) {
    if (title === '제목') {
        return contents.map((song) => {
            let temp = Object.assign({}, song);
            temp.song_name = highlightKeyword(temp.song_name, searchKeyword);
            return temp;
        });
    } else if (title === '앨범') {
        return contents.map((song) => {
            let temp = Object.assign({}, song);
            temp.album = highlightKeyword(temp.album, searchKeyword);
            return temp;
        });
    } else if (title === '가수') {
        return contents.map((song) => {
            let temp = Object.assign({}, song);
            temp.artist = highlightKeyword(temp.artist, searchKeyword);
            return temp;
        });
    }
}

function SearchTotalContents({ searchKeyword }) {
    const [category, setCategory] = useState('가수');
    const [searchedContents, setSearchedContents] = useState({
        가수: {
            title: '가수',
            contents: [],
        },
        앨범: {
            title: '앨범',
            contents: [],
        },
        제목: {
            title: '제목',
            contents: [],
        },
    });

    /* 한 번만 fetch 해줘도 되기때문에 polling 관련 옵션은 false로 처리*/
    const { isFetching, isFetched, data, error } = useQuery(
        [featchTotalSearchKey, { q: searchKeyword }],
        queryFetch,
        {
            initialData: { artist: [], album: [], song_name: [] },
            refetchOnWindowFocus: false,
        },
    );
    const [currentContents, setCurrentContents] = useState([]);

    /*
     * 모든 DOM 변경 전에, 패칭된 데이터를 state에 업데이트 해줌.
     * isFetched가 false -> true로 바뀌었을 때 searchContents를 업데이트
     */
    useLayoutEffect(() => {
        if (isFetched) {
            const artists = highlightedKeywordByCategory('가수', data.artist, searchKeyword);
            const albums = highlightedKeywordByCategory('앨범', data.album, searchKeyword);
            const songNames = highlightedKeywordByCategory('제목', data.song_name, searchKeyword);

            setSearchedContents((current) => {
                current['가수'].contents = artists;
                current['앨범'].contents = albums;
                current['제목'].contents = songNames;
                return current;
            });

            /* 첫 화면에 표시될 콘텐츠를 artists로 초기화 */
            setCurrentContents(artists);
        }
    }, [isFetched]);

    /* 카테고리가 변경될 때마다 화면에 표시될 콘텐츠를 변경 */
    useEffect(() => {
        setCurrentContents(searchedContents[category].contents);
    }, [category]);

    return (
        <div>
            <SearchBar inputValue={searchKeyword} />
            <Styled.SearchTotalContentsWrapper>
                <h2>'{searchKeyword}' 검색 결과</h2>
                <Styled.SearchOptionsWrapper>
                    <ul>
                        {['가수', '제목', '앨범'].map((option) => (
                            <Styled.SearchOption
                                onClick={() => setCategory(option)}
                                active={option === category}
                            >
                                {option}
                            </Styled.SearchOption>
                        ))}
                    </ul>
                </Styled.SearchOptionsWrapper>
                {isFetching ? (
                    <div>검색 결과를 불러오고 있습니다. </div>
                ) : (
                    <SearchTotalSection isFetching={isFetching} init={currentContents} />
                )}
            </Styled.SearchTotalContentsWrapper>
        </div>
    );
}

function SearchTotalSection({ init }) {
    const UNIT_PAGE = 10;
    const END_PAGE = init.length;
    const [page, setPage] = useState({
        start: 0,
        end: UNIT_PAGE,
    });
    const [currentContents, setCurrentContents] = useState([]);

    /* init이 변경되었을 때 */
    useEffect(() => {
        const SlicedData = init.slice(0, UNIT_PAGE);
        setPage({
            start: UNIT_PAGE,
            end: UNIT_PAGE + UNIT_PAGE,
        });
        setCurrentContents(SlicedData);
    }, [init]);

    /* '더보기' 버튼 누르면 10개씩 데이터를 불러옴. */
    const loadData = () => {
        const SlicedData = init.slice(page.start, page.end);
        setCurrentContents((current) => current.concat(SlicedData));
        setPage({
            start: page.end,
            end: page.end + UNIT_PAGE,
        });
    };

    return (
        <Styled.SearchTotalSection>
            <div>
                {init.length !== 0 ? (
                    <>
                        <ul>
                            {currentContents.map((song) => (
                                <Link to={`${route.DETAIL}/${song ? song.song_id : ''}`}>
                                    <Styled.AlbumList>
                                        <div>
                                            <img src={song.cover_url} alt={song.song_name} />
                                        </div>
                                        <div>
                                            <p>{song.song_name}</p>
                                            <p>{song.album}</p>
                                            <p>{song.artist}</p>
                                        </div>
                                    </Styled.AlbumList>
                                </Link>
                            ))}
                        </ul>
                        {currentContents.length !== END_PAGE && (
                            <Styled.LoadButton onClick={loadData}>더 보기</Styled.LoadButton>
                        )}
                    </>
                ) : (
                    <div>
                        <p>검색 결과가 없습니다!</p>
                    </div>
                )}
            </div>
        </Styled.SearchTotalSection>
    );
}

export default SearchTotalContents;
