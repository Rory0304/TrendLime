import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import route from '../../routers/routeConstants';
import { Styled } from './styles';
import { MenuOutlined } from '@ant-design/icons';
import trendLimeLogo from '../../assets/images/trend_lime_logo.PNG';

function Header() {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <header>
            <Styled.HeaderWrapper>
                <Styled.HeaderLogo>
                    <Link to={route.MAIN}>
                        <h1>
                            <img src={trendLimeLogo} alt="트렌드 라임" />
                        </h1>
                    </Link>
                </Styled.HeaderLogo>
                <Styled.HeaderMenu>
                    <Styled.HeaderMenuWrapper menuStatus={menuStatus}>
                        <li>
                            <NavLink to={route.SEARCH} onClick={() => setMenuStatus(false)}>
                                곡 검색
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={route.ABOUT} onClick={() => setMenuStatus(false)}>
                                서비스 소개
                            </NavLink>
                        </li>
                    </Styled.HeaderMenuWrapper>
                    <Styled.MenuIcon>
                        <MenuOutlined onClick={() => setMenuStatus(!menuStatus)} />
                        <span className="visually-hidden">메뉴</span>
                    </Styled.MenuIcon>
                </Styled.HeaderMenu>
            </Styled.HeaderWrapper>
        </header>
    );
}

/* 페이지 이동할 때마다 헤더가 계속 렌더링되기 때문에 memo 사용 */
export default React.memo(Header);
