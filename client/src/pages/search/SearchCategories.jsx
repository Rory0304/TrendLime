import React, { useEffect, useState, useRef } from 'react';
import { css, jsx } from '@emotion/react';
import { primaryColor } from '../../common/constants/Styles';

function SearchCategories({ searchOptions }) {
    const categories = Array.from(new Set(searchOptions.map((option) => option.category_name)));
    const [selectedCategoryIdx, selectCategoryIdx] = useState(0);

    const slideWrapperRef = useRef(null);
    const slideRef = useRef(null);

    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${
            slideWrapperRef.current.clientWidth * selectedCategoryIdx
        }px)`;
    }, [selectedCategoryIdx]);

    return (
        <div css={SearchCategiresStyle}>
            <ul css={TabListWrapper}>
                {categories.map((category, index) => (
                    <li
                        css={TabList({ active: index === selectedCategoryIdx })}
                        onClick={() => selectCategoryIdx(index)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
            <div css={OptionsWrapper}>
                <div css={OptionsSlider} ref={slideRef}>
                    {categories.map((category) => (
                        <ul css={OptionsList({ primaryColor: primaryColor })} ref={slideWrapperRef}>
                            {searchOptions.map(
                                (option, index) =>
                                    option.category_name === category && <li>{option.tag_name}</li>,
                            )}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}

const SearchCategiresStyle = css`
    padding-bottom: 2.3rem;
    border-bottom: 1px solid #0000001c;
`;

const TabListWrapper = css`
    width: 60%;
    display: flex;
    justify-content: space-around;
    margin: 30px auto;
`;

const TabList = ({ active }) => css`
    border-bottom: ${active ? '1px solid black' : 'none'};
    padding: 15px;
`;

const OptionsWrapper = css`
    width: 60%;
    display: flex;
    margin: 0 auto;
    overflow-x: hidden;
    align-items: baseline;
`;

const OptionsSlider = css`
    display: flex;
    flex-direction: row;
`;

const OptionsList = (props) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);

    li {
        width: 100px;
        text-align: center;
        padding: 10px;
        border: 1px solid #0000009c;
        box-shadow: 1px 1px 3px transparent;
        border-radius: 5px;
        margin: 10px;

        &:hover {
            border-color: ${props.primaryColor};
        }
    }
`;

export default SearchCategories;
