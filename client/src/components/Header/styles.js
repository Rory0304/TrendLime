import styled from '@emotion/styled';

export const Styled = {};

Styled.HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5rem 3rem;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 1rem 2rem;
        flex-direction: column;
        align-items: flex-start;
    }
`;

Styled.HeaderLogo = styled.div``;

Styled.HeaderMenu = styled.nav`
    width: auto;
    margin-top: 0;
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin-top: 1rem;
    }
`;

Styled.HeaderMenuWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-content: flex-end;

    li {
        text-align: center;
        font-weight: bold;
        padding: 1rem;
    }

    li:hover a {
        color: #0e0;
    }

    @media only screen and (max-width: 768px) {
        display: ${(props) => (props.menuStatus ? 'flex' : 'none')};
        flex-direction: column;
        align-content: flex-start;
    }
`;

Styled.MenuIcon = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        position: absolute;
        display: block;
        top: 1rem;
        right: 2rem;
    }
`;
