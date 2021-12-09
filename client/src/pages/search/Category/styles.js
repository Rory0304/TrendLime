import styled from '@emotion/styled';
export const Styled = {};

Styled.CategoryWrapper = styled.div`
    padding-bottom: 2.3rem;
    border-bottom: 1px solid #0000001c;
`;

Styled.CategoryList = styled.ul`
    width: 70%;
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    margin: 30px auto;
`;

Styled.Category = styled.li`
    padding-bottom: 1rem;
    border-bottom: ${(props) => (props.active ? `2px solid ${props.theme.primaryColor}` : 'none')};
    font-weight: ${(props) => (props.active ? 'bold' : 'normal')};

    cursor: pointer;
`;

Styled.OptionsWrapper = styled.div`
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

    color: ${(props) => (props.active ? props.theme.primaryColor : 'black')};
    border-color: ${(props) => (props.active ? props.theme.primaryColor : 'black')};

    &:hover {
        border-color: ${(props) => props.theme.primaryColor};
    }
`;
