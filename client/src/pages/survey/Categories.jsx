import React from 'react';
import { css, jsx } from '@emotion/react';
import { primaryColor } from '../../common/Styles';

function Categories({ category }) {
    return (
        <div css={CategoriesStyle}>
            <ol>
                {Object.keys(category).map((cKey) => (
                    <li
                        css={CategoryListStyle({
                            isVisited: category[cKey],
                        })}
                    >
                        {cKey}
                    </li>
                ))}
            </ol>
        </div>
    );
}

const CategoriesStyle = css`
    background-color: rgba(207, 207, 207, 0.13);
    padding: 1rem 0.5rem;

    ol {
        display: flex;
        justify-content: space-around;
    }
`;

const CategoryListStyle = ({ isVisited }) => css`
    color: ${isVisited ? primaryColor : 'black'};
`;

export default Categories;
