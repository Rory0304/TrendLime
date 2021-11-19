import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1>
                <img src="#" alt="뮤직로그" />
            </h1>
            <nav>
                <ul>
                    <li>오늘의 추천</li>
                </ul>
            </nav>
            <div>
                <Link to="/">
                    <button type="button">로그인</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
