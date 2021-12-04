import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Styled } from './styles';
import { SearchOutlined } from '@ant-design/icons';

import { featchTotalSearchKey } from '../../utils/api/queryKeys';
import useDebounce from '../../utils/hooks/useDebounce';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';
import route from '../../routers/routeConstants';

function AutoCompleteResultSection({ title, songs, isLoading }) {
    return (
        <Styled.AutoCompleteResult>
            <p>{title}</p>
            <div>
                {isLoading ? (
                    <p>검색어를 불러오고 있습니다. </p>
                ) : songs !== [] ? (
                    <ul>
                        {songs.map((song) => (
                            <Link to={`${route.DETAIL}/${song ? song.song_id : ''}`}>
                                <Styled.AutoCompleteItem>
                                    <div>
                                        <img src={song.cover_url} alt={song.song_name} />
                                    </div>
                                    <div>
                                        <p>
                                            {song.song_name}
                                            <span> - {song.artist}</span>
                                        </p>
                                    </div>
                                </Styled.AutoCompleteItem>
                            </Link>
                        ))}
                    </ul>
                ) : (
                    <p>검색 결과가 없습니다.</p>
                )}
            </div>
        </Styled.AutoCompleteResult>
    );
}

const SearchBar = ({ onChange, searchInput = '' }) => {
    const autoCompleteField = useRef(null);

    const debouncedSearchTerm = useDebounce(searchInput, 500);

    const { isLoading, error, data } = useQuery(
        [featchTotalSearchKey, { q: debouncedSearchTerm }],
        useQueryFetch,
        {
            refetchOnWindowFocus: false,
            enabled: searchInput === debouncedSearchTerm,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    );

    // const onFocus = () => {
    //     autoCompleteField.current.style.display = 'block';
    // };

    // const onBlur = () => {
    //     autoCompleteField.current.style.display = 'none';
    // };

    // onFocus = { onFocus } onBlur = { onBlur }

    /* todo : 이 부분 깔끔하게 작성하는 방법? */
    const artists = data?.artist ? data.artist.splice(0, 3) : [];
    const albums = data?.album ? data.album.splice(0, 3) : [];
    const songNames = data?.song_name ? data.song_name.splice(0, 3) : [];

    return (
        <Styled.SearchArea>
            <Styled.SearchBar>
                <Styled.Input>
                    {' '}
                    <input
                        placeholder={
                            searchInput !== '' ? searchInput : '제목, 앨범, 가수를 검색해보세요.'
                        }
                        onChange={onChange}
                        name="searchInput"
                        value={searchInput}
                        autocomplete="off"
                    />
                </Styled.Input>
                <Styled.SearchBtn>
                    <Link to={`${route.SEARCHTOTAL}/${debouncedSearchTerm}`}>
                        <SearchOutlined />
                    </Link>
                </Styled.SearchBtn>
            </Styled.SearchBar>

            <Styled.AutoCompleteArea
                ref={autoCompleteField}
                isEmpty={
                    searchInput === undefined ||
                    searchInput === '' ||
                    (artists.length === 0 && albums.legnth === 0 && songNames === 0)
                }
            >
                <AutoCompleteResultSection title="가수" songs={artists} isLoading={isLoading} />
                <AutoCompleteResultSection title="제목" songs={songNames} isLoading={isLoading} />
                <AutoCompleteResultSection title="앨범" songs={albums} isLoading={isLoading} />
            </Styled.AutoCompleteArea>
        </Styled.SearchArea>
    );
};

export default React.memo(SearchBar);
