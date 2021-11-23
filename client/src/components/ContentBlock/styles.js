import styled from '@emotion/styled';

export const Styled = {};

Styled.ContentSection = styled.section`
    position: relative;
    padding: 10rem 0 8rem;

    @media only screen and (max-width: 1024px) {
        padding: 4rem 0 4rem;
    }
`;

Styled.Row = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

Styled.ContentWrapper = styled.div`
    position: relative;
    width: 50%;

    @media only screen and (max-width: 575px) {
        padding-top: 4rem;
    }
`;

Styled.Content = styled.p`
    margin: 1.5rem 0 2rem 0;
`;

Styled.Button = styled.button`
    background: rgb(46, 24, 106);
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: 700;
    width: 300px;
    border: 1px solid rgb(237, 243, 245);
    border-radius: 4px;
    padding: 13px 0px;
    cursor: pointer;
    margin-top: 0.625rem;
    max-width: 180px;
    transition: all 0.3s ease-in-out 0s;
    box-shadow: rgb(23 31 114 / 20%) 0px 16px 30px;
`;
