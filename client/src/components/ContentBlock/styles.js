import styled from '@emotion/styled';

export const Styled = {};

Styled.ContentSection = styled.section`
    position: relative;
    @media only screen and (max-width: 1024px) {
        padding: 4rem 0 4rem;
    }
`;

Styled.Row = styled.div`
    ${(props) =>
        !props.top &&
        `align-items: center;
        display: flex;
        justify-content: space-between;`}
`;

Styled.ContentWrapper = styled.div`
    position: relative;
    /* width: 50%; */

    @media only screen and (max-width: 575px) {
        padding-top: 4rem;
    }
`;

Styled.Title = styled.h3`
    margin: 1rem 0;
    font-size: 3rem;
    font-weight: bold;
`;

Styled.Content = styled.p`
    margin: 1rem 0 3rem 0;
    font-weight: 600;
`;

Styled.Button = styled.button`
    background-color: #fff;
    color: #5738ff;
    font-size: 1rem;
    font-weight: 700;
    width: 300px;
    border: 1px solid rgb(237, 243, 245);
    border-radius: 4px;
    padding: 13px 0px;
    cursor: pointer;
    margin: 3rem 0;
    max-width: 180px;
    transition: background-color 0.3s ease-in-out 0s;
    box-shadow: rgb(23 31 114 / 20%) 0px 16px 30px;
`;
