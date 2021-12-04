import React, { useEffect, useRef, useMemo } from 'react';
import { useQuery } from 'react-query';

import { fetchCategoryKey } from '../../../utils/api/queryKeys';
import { useQueryFetch } from '../../../utils/hooks/useQueryFetch';
import { Styled } from './styles';

/*
  Arguments:
    - selectedOptions: 선택한 옵션 정보 (카테고리 인덱스, 태그 인덱스)
    - selectOptions: 선택한 옵션 정보를 업데이트하는 함수
*/

function SearchCategories({ searchOption, setSearchOption }) {
    const slideWrapperRef = useRef(null);
    const slideRef = useRef(null);
    const { isLoading, error, data } = useQuery([fetchCategoryKey], useQueryFetch, {
        refetchOnWindowFocus: false,
    });

    /* 캐러샐은 제거될 예정입니다.*/
    // useEffect(() => {
    // if (slideRef.current !== null && slideWrapperRef.current !== null) {
    //     slideRef.current.style.transform = `translateX(-${
    //         slideWrapperRef.current.clientWidth * selectedCategoryIdx
    //     }px)`;
    // }
    // }, [selectedCategoryIdx]);

    const categories = useMemo(() => (!data ? [] : data.categories), [data]);

    const tags = useMemo(() => {
        if (data) {
            const filteredTags = data.tags.filter(
                (tag) => tag.category_name === searchOption.category,
            );
            setSearchOption({
                ...searchOption,
                tag: filteredTags[0].tag_name,
            });

            return filteredTags;
        } else {
            return [];
        }
    }, [data, searchOption.category]);

    if (isLoading || data.length === 0)
        return <Styled.CategoryWrapper>'Loading...'</Styled.CategoryWrapper>;

    if (error) return <Styled.CategoryWrapper>'Error'</Styled.CategoryWrapper>;

    return (
        <Styled.CategoryWrapper>
            <Styled.CategoryList>
                {categories.map((category) => (
                    <Styled.Category
                        active={category.category_name === searchOption.category}
                        onClick={() =>
                            setSearchOption({
                                ...searchOption,
                                category: category.category_name,
                            })
                        }
                    >
                        {category.category_name}
                    </Styled.Category>
                ))}
            </Styled.CategoryList>
            <Styled.OptionsWrapper>
                <Styled.OptionsSlider ref={slideRef}>
                    {
                        <Styled.OptionListWrapper ref={slideWrapperRef}>
                            {tags.map((tag) => (
                                <Styled.OptionList
                                    active={tag.tag_name === searchOption.tag}
                                    onClick={() =>
                                        setSearchOption({
                                            ...searchOption,
                                            tag: tag.tag_name,
                                        })
                                    }
                                >
                                    {tag.tag_name}
                                </Styled.OptionList>
                            ))}
                        </Styled.OptionListWrapper>
                    }
                </Styled.OptionsSlider>
            </Styled.OptionsWrapper>
        </Styled.CategoryWrapper>
    );
}

export default SearchCategories;
