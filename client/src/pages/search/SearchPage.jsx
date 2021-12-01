import React from 'react';
import { css, jsx } from '@emotion/react';
import SearchBar from '../../common/SearchBar/index';
import SearchCategories from './SearchCategories';
import tempData from './tempData';

function SearchPage() {
    return (
        <div>
            <div>
                <SearchBar />
                <SearchCategories searchOptions={tempData} />
            </div>
            <div css={subContentsWrapper}>
                <h3 css={subTitle}>가사 속 표현 분석</h3>
                <div css={subContentArea}>
                    <div>워드 클라우드</div>
                    <div>주요 표현/단어</div>
                </div>
            </div>
            <div css={subContentsWrapper}>
                <h3 css={subTitle}>대표곡</h3>
                <ul css={ablumList}>
                    <li>대표곡1</li>
                    <li>대표곡2</li>
                    <li>대표곡3</li>
                    <li>대표곡4</li>
                    <li>대표곡5</li>
                </ul>
            </div>
        </div>
    );
}

const subContentsWrapper = css`
    width: 80%;
    margin: 0 auto;
    padding: 5rem;
`;

const subContentArea = css`
    display: flex;
    margin-top: 5rem;

    div {
        width: 50%;
        height: 200px;
        border: 1px solid black;
    }
`;

const ablumList = css`
    display: flex;
    margin-top: 5rem;

    li {
        width: 200px;
        height: 200px;
        border: 1px solid black;
    }
`;
const subTitle = css`
    font-size: 1.5rem;
    font-weight: bold;
`;
export default SearchPage;
