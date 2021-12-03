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
    margin: 30px auto;
`;

Styled.Category = styled.li`
    border-bottom: ${(props) => (props.active ? '1px solid black' : 'none')};
`;

Styled.OptionsWrapper = styled.div`
    width: 70%;
    display: flex;
    margin: 0 auto;
    overflow: hidden;
    align-items: baseline;
`;

Styled.OptionsSlider = styled.div`
    display: inline-flex;
    flex-direction: row;
    transition: all 0.5s ease-in-out;
`;

Styled.OptionList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    flex-shrink: 0;

    li {
        width: 15%;
        height: 2.5rem;
        padding: 10px;
        border: 1px solid #0000009c;
        box-shadow: 1px 1px 3px transparent;
        border-radius: 5px;
        margin: 10px;

        &:hover {
            border-color: ${(props) => props.theme.primaryColor};
        }
    }
`;
