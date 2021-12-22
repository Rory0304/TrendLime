import styled from '@emotion/styled';
export const Styled = {};

Styled.CategoryContainer = styled.div`
    position: relative;
`;

Styled.CategoryList = styled.ul`
    width: 70%;
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    margin: 30px auto;

    ${(props) => props.theme.mq.tablet} {
        flex-direction: column-reverse;
    }
`;

Styled.Category = styled.li`
    padding: 1rem 0;
    border-bottom: ${(props) => (props.active ? `2px solid ${props.theme.primaryColor}` : 'none')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

    cursor: pointer;

    ${(props) => props.theme.mq.tablet} {
        width: 100%;
        display: ${(props) => (props.openDropdown ? 'block' : props.active ? 'block' : 'none')};
    }
`;

Styled.DropdownIcon = styled.div`
    display: none;
    ${(props) => props.theme.mq.tablet} {
        position: absolute;
        top: 16px;
        right: 114px;
        display: inline-block;
    }
`;

Styled.OptionsContainer = styled.div`
    width: 70%;
    display: flex;
    margin: 0 auto;
    overflow: hidden;
    align-items: baseline;
`;

Styled.OptionListWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    flex-shrink: 0;
`;

Styled.OptionList = styled.li`
    width: 15%;
    height: 2.5rem;
    padding: 10px;
    border: 1px solid #0000009c;
    box-shadow: 1px 1px 3px transparent;
    border-radius: 5px;
    margin: 10px;

    color: ${(props) => (props.active ? props.theme.primaryColor : 'white')};
    border-color: ${(props) => (props.active ? props.theme.primaryColor : 'gray')};

    &:hover {
        border-color: ${(props) => props.theme.primaryColor};
    }

    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
`;
