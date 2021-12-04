import { Styled } from './styles';

const SearchBar = ({ onChange, searchInput }) => {
    return (
        <Styled.SearchBar>
            <input
                placeholder="input search text"
                onChange={onChange}
                name="searchInput"
                value={searchInput}
            />
            {/* <button onClick={getSearchResult}>검색</button> */}
        </Styled.SearchBar>
    );
};

export default SearchBar;
