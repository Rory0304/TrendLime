import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import ScrollToTop from '../../common/ScrollToTop/index';
import SearchBar from '../../common/SearchBar/index';
import SearchCategories from './Category/SearchCategories';
import SearchContents from './Contents/SearchContents';

const queryClient = new QueryClient();

function SearchPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [searchOption, setSearchOption] = useState({
        q: '',
        category: '트렌드/연도',
        tag: '트렌드',
    });

    return (
        <QueryClientProvider client={queryClient}>
            <ScrollToTop />
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
