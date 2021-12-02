import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { css, jsx } from '@emotion/react';
import SearchBar from '../../common/SearchBar/index';
import SearchCategories from './Category/SearchCategories';
import SearchContents from './Contents/SearchContents';
const queryClient = new QueryClient();

function SearchPage() {
    const [selectedCategoryIdx, selectCategoryIdx] = useState(0);

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <div>
                    <SearchBar />
                    <SearchCategories
                        selectedCategoryIdx={selectedCategoryIdx}
                        selectCategoryIdx={selectCategoryIdx}
                    />
                </div>
                <SearchContents />
            </div>
        </QueryClientProvider>
    );
}

export default SearchPage;
