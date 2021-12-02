import React, { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import tempData from '../tempData';
import { Styled } from './styles';

function SearchCategories({ selectedCategoryIdx, selectCategoryIdx }) {
    const slideWrapperRef = useRef(null);
    const slideRef = useRef(null);

    const { isLoading, data, error } = useQuery('categoryData', () =>
        fetch('').then((res) => tempData),
    );

    useEffect(() => {
        if (slideRef.current !== null) {
            slideRef.current.style.transform = `translateX(-${
                slideWrapperRef.current.clientWidth * selectedCategoryIdx
            }px)`;
        }
    }, [selectedCategoryIdx]);

    if (isLoading) return <Styled.CategoryWrapper>'Loading...'</Styled.CategoryWrapper>;

    if (error) return <Styled.CategoryWrapper>'Error'</Styled.CategoryWrapper>;

    return (
        <Styled.CategoryWrapper>
            <Styled.CategoryList>
                {data.categories.map((category, index) => (
                    <Styled.Category
                        active={index === selectedCategoryIdx}
                        onClick={() => selectCategoryIdx(index)}
                    >
                        {category}
                    </Styled.Category>
                ))}
            </Styled.CategoryList>
            <Styled.OptionsWrapper>
                <Styled.OptionsSlider ref={slideRef}>
                    {data.categories.map((category) => (
                        <Styled.OptionList ref={slideWrapperRef}>
                            {data.data.map(
                                (option, index) =>
                                    option.category_name === category && <li>{option.tag_name}</li>,
                            )}
                        </Styled.OptionList>
                    ))}
                </Styled.OptionsSlider>
            </Styled.OptionsWrapper>
        </Styled.CategoryWrapper>
    );
}

export default SearchCategories;
