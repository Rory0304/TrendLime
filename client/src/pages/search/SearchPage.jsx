import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import useInput from '../../utils/hooks/useInput';

import SearchBar from '../../common/SearchBar/index';
import SearchCategories from './Category/SearchCategories';
import SearchContents from './Contents/SearchContents';

const queryClient = new QueryClient();

function SearchPage() {
    /* default로 설정하는 category와 tag명 */
    const [searchOption, setSearchOption] = useState({
        q: '',
        category: '트렌드/연도',
        tag: '트렌드',
    });

    /* 추후 추가될 string으로 음악 검색하는 기능 */
    const [{ searchInput }, onChange, reset] = useInput({
        q: '',
    });

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <div>
                    <SearchBar onChange={onChange} searchInput={searchInput} />
                    <SearchCategories
                        searchOption={searchOption}
                        setSearchOption={setSearchOption}
                    />
                </div>
                <SearchContents searchOption={searchOption} />
            </div>
        </QueryClientProvider>
    );
}

export default SearchPage;
