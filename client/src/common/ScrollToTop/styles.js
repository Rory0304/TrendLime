import styled from '@emotion/styled';

export const Styled = {};

Styled.ScrollUpBox = styled.div`
    padding: 10px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 10;
    cursor: pointer;
    background: rgb(241, 242, 243);
    text-align: center;
    align-items: center;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    &:hover,
    &:active,
    &:focus {
        background: rgb(224, 224, 224);
    }
`;
