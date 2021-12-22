import React, { useContext, useState, useCallback } from 'react';
import { useQuery } from 'react-query';

import { fetchCategoryKey } from '../../../utils/api/queryKeys';
import queryFetch from '../../../utils/api/queryFetch';

import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { SearchOptionContext } from '../SearchPage';
import { Styled } from './styles';

import filterBackground from './filterBackground';

function FilterItems() {
    const { searchOption, setSearchOption } = useContext(SearchOptionContext);
    const { data } = useQuery([fetchCategoryKey], queryFetch, {
        refetchOnWindowFocus: false,
        suspense: true,
    });
    return (
        <>
            <CategoryContainer
                categories={data.categories}
                tags={data.tags}
                searchOption={searchOption}
                setSearchOption={setSearchOption}
            />
            <OptionsContainer
                filteredTags={data.tags.filter(
                    (tag) => tag.category_name === searchOption.category,
                )}
                searchOption={searchOption}
                setSearchOption={setSearchOption}
            />
        </>
    );
}

const CategoryContainer = React.memo(({ categories, tags, searchOption, setSearchOption }) => {
    const [openDropdown, setDropdown] = useState(false);

    const onClickCategory = useCallback((category) => {
        const filteredTags = tags.filter((tag) => tag.category_name === category.category_name);
        setSearchOption({
            category: category.category_name,
            tag: filteredTags[0].tag_name,
        });
        setDropdown(false);
    }, []);

    return (
        <Styled.CategoryContainer>
            <Styled.CategoryList>
                {categories.map((category) => (
                    <Styled.Category
                        active={category.category_name === searchOption.category}
                        openDropdown={openDropdown}
                        onClick={() => {
                            onClickCategory(category);
                        }}
                        key={category.category_id}
                    >
                        {category.category_name}
                    </Styled.Category>
                ))}
            </Styled.CategoryList>
            <Styled.DropdownIcon>
                {openDropdown ? (
                    <CaretUpOutlined onClick={() => setDropdown(false)} />
                ) : (
                    <CaretDownOutlined onClick={() => setDropdown(true)} />
                )}
            </Styled.DropdownIcon>
        </Styled.CategoryContainer>
    );
});

const OptionsContainer = React.memo(({ filteredTags, searchOption, setSearchOption }) => {
    return (
        <Styled.OptionsContainer>
            {
                <Styled.OptionListWrapper>
                    {filteredTags.map((tag) => (
                        <Styled.OptionList
                            active={tag.tag_name === searchOption.tag}
                            onClick={() =>
                                setSearchOption({
                                    ...searchOption,
                                    tag: tag.tag_name,
                                })
                            }
                            url={
                                filterBackground[tag.tag_name]
                                    ? filterBackground[tag.tag_name].url
                                    : ''
                            }
                        >
                            {tag.tag_name}
                        </Styled.OptionList>
                    ))}
                </Styled.OptionListWrapper>
            }
        </Styled.OptionsContainer>
    );
});

export default React.memo(FilterItems);
