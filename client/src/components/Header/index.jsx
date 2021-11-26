import React from 'react';
import { css, jsx } from '@emotion/react';
import { NavLink, Link } from 'react-router-dom';
import route from '../../routers/routeConstants';
import { Styled } from './styles';

function Header() {
    return (
        <Styled.Header>
            <Styled.HeaderWrapper>
                <Styled.HeaderLogo>
                    <Link to={route.MAIN}>
                        <h1>
                            <img src="#" alt="가사 트렌드" />
                        </h1>
                    </Link>
                </Styled.HeaderLogo>
                <Styled.HeaderMenu>
                    <Styled.HeaderMenuWrapper>
                        <li css={ListStyle}>
                            <NavLink to={route.SEARCH}>곡 검색</NavLink>
                        </li>
                        <li css={ListStyle}>
                            <NavLink to={route.ABOUT}>서비스 소개</NavLink>
                        </li>
                    </Styled.HeaderMenuWrapper>
                </Styled.HeaderMenu>
            </Styled.HeaderWrapper>
        </Styled.Header>
    );
}

const ListStyle = css`
    a {
        display: block;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
`;

export default Header;
