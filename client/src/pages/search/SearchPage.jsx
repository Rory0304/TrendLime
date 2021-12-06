import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import SearchBar from '../../common/SearchBar/index';
import SearchCategories from './Category/SearchCategories';
import SearchContents from './Contents/SearchContents';

const queryClient = new QueryClient();

function SearchPage() {
    const [searchOption, setSearchOption] = useState({
        q: '',
        category: 'trend',
        tag: 'trend',
    });

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <div>
                    <SearchBar inputValue="" />
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
