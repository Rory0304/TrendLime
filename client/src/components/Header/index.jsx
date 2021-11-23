import React from 'react';
import { Link } from 'react-router-dom';

import { Styled } from './styles';

function Header() {
    return (
        <Styled.Header>
            <Styled.HeaderWrapper>
                <Styled.HeaderLogo>
                    <Link to="/">
                        <h1>
                            <img src="#" alt="뮤직로그" />
                        </h1>
                    </Link>
                </Styled.HeaderLogo>
                <Styled.HeaderMenu>
                    <Styled.LoginBtn>
                        <Link to="/">
                            <button type="button">로그인</button>
                        </Link>
                    </Styled.LoginBtn>
                </Styled.HeaderMenu>
            </Styled.HeaderWrapper>
        </Styled.Header>
    );
}

export default Header;
