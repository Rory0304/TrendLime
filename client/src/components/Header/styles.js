import styled from '@emotion/styled';

export const Styled = {};

Styled.Header = styled.header`
    padding: 1.5rem 3rem 3rem 3rem;
    margin: 0 auto;
`;

Styled.HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;

    @media only screen and (max-width: 1024px) {
        max-width: calc(100% - 60px);
    }
`;

Styled.HeaderLogo = styled.div``;

Styled.HeaderMenu = styled.nav`
    width: 15%;
`;

Styled.HeaderMenuWrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

Styled.LoginBtn = styled.div`
    font-size: 1.2rem;
    margin: 0.5rem 2rem;
    width: 180px;

    button {
        background-color: rgb(46, 24, 106);
        color: rgb(255, 255, 255);
        font-size: 1rem;
        font-weight: 700;
        width: 100%;
        border: 1px solid rgb(237, 243, 245);
        border-radius: 4px;
        padding: 13px 0px;
        cursor: pointer;
        margin-top: 0.625rem;
        max-width: 180px;
        transition: all 0.3s ease-in-out;
        box-shadow: rgb(23 31 114 / 20%) 0px 16px 30px;
    }
`;
