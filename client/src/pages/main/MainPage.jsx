import React from 'react';
import { Link } from 'react-router-dom';
import route from '../../routers/routeConstants';

function MainPage() {
    return (
        <div>
            <Link to={route.SURVEY}>오늘의 곡 추천</Link>
        </div>
    );
}

export default MainPage;
