import styled from '@emotion/styled';

export const Styled = {};

Styled.Button = styled.button`
    background-color: #fff;
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    border: 1px solid black;
    border-radius: 18px;
    padding: 13px 0;
    cursor: pointer;
    margin-top: 0.625rem;
    max-width: 180px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

    &:disabled {
        border-color: gray;
    }
`;
