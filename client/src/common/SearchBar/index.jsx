import { useQuery } from 'react-query';
import { Styled } from './styles';
import { SearchOutlined } from '@ant-design/icons';
import useDebounce from '../../utils/hooks/useDebounce';

import { featchTotalSearchKey } from '../../utils/api/queryKeys';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';

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
                            <li>
                                {/* <div><img src={ } alt={song.song_name} /></div> */}
                                <div>
                                    <p>
                                        {song.song_name}
                                        <span>{song.artist}</span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>검색 결과가 없습니다.</p>
                )}
            </div>
        </Styled.AutoCompleteResult>
    );
}

const SearchBar = ({ onChange, searchInput }) => {
    const debouncedSearchTerm = useDebounce(searchInput, 500);

    const { isLoading, error, data } = useQuery(
        [featchTotalSearchKey, { q: debouncedSearchTerm }],
        useQueryFetch,
        {
            refetchOnWindowFocus: false,

            enabled: searchInput === debouncedSearchTerm,
        },
    );

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
                        placeholder="제목, 앨범, 가수를 검색해보세요."
                        onChange={onChange}
                        name="searchInput"
                        value={searchInput}
                        autocomplete="off"
                    />
                </Styled.Input>
                <Styled.SearchBtn>
                    <SearchOutlined />
                </Styled.SearchBtn>
            </Styled.SearchBar>

            <Styled.AutoCompleteArea
                isEmpty={
                    searchInput === undefined ||
                    searchInput === '' ||
                    (artists.length === 0 && albums.legnth === 0 && songNames === 0)
                }
            >
                <AutoCompleteResultSection title="가수" songs={artists} isLoading={isLoading} />
                <AutoCompleteResultSection
                    title="곡 제목"
                    songs={songNames}
                    isLoading={isLoading}
                />
                <AutoCompleteResultSection title="앨범" songs={albums} isLoading={isLoading} />
            </Styled.AutoCompleteArea>
        </Styled.SearchArea>
    );
};

export default SearchBar;
