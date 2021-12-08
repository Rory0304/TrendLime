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
        initialData: [],
        refetchOnWindowFocus: false,
    });

    const categories = [
        {
            category_id: '1',
            category_name: '뮤직 스타일',
            category_key: '뮤직 스타일',
        },
        {
            category_id: '2',
            category_name: '계절',
            category_key: '계절',
        },
        {
            category_id: '3',
            category_name: '시간',
            category_key: '시간',
        },
        {
            category_id: '4',
            category_name: '날씨',
            category_key: '날씨',
        },
        {
            category_id: '5',
            category_name: '상황/장소',
            category_key: '상황/장소',
        },
        {
            category_id: '6',
            category_name: '감정/기분',
            category_key: '감정/기분',
        },
        {
            category_id: '7',
            category_name: '트렌드/연도',
            category_key: 'trend',
        },
    ];

    /* TODO : 데이터 수정 필요 */
    // const categories = useMemo(() => (data.length === 0 ? [] : data.categories), [data]);

    const tags = useMemo(() => {
        if (data.length !== 0) {
            const filteredTags = data.tags.filter((tag) =>
                searchOption.category === 'trend'
                    ? tag.category_name === '트렌드/연도'
                    : tag.category_name === searchOption.category,
            );

            setSearchOption({
                ...searchOption,
                tag: searchOption.category === 'trend' ? 'trend' : filteredTags[0].tag_name,
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
                {isLoading ? (
                    <div>loading...</div>
                ) : (
                    categories.reverse().map((category) => (
                        <Styled.Category
                            active={category.category_name === searchOption.category}
                            onClick={() =>
                                setSearchOption({
                                    ...searchOption,
                                    category: category.category_key,
                                })
                            }
                        >
                            {category.category_name}
                        </Styled.Category>
                    ))
                )}
            </Styled.CategoryList>
            <Styled.OptionsWrapper>
                {
                    <Styled.OptionListWrapper ref={slideWrapperRef}>
                        {isLoading ? (
                            <div>Loading....</div>
                        ) : (
                            tags.map((tag) => (
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
                            ))
                        )}
                    </Styled.OptionListWrapper>
                }
            </Styled.OptionsWrapper>
        </Styled.CategoryWrapper>
    );
}

export default React.memo(SearchCategories);
