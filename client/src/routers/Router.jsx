import { BrowserRouter, Routes, Route } from 'react-router-dom';
import route from './routeConstants';
import Header from '../components/Header/index';
import MainPage from '../pages/main/MainPage';
import SearchPage from '../pages/search/SearchPage';
import SongInfoPage from '../pages/songInfo/SongInfoPage';
import AboutPage from '../pages/about/AboutPage';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path={route.MAIN} element={<MainPage />} />
                <Route exact path={route.SEARCH} element={<SearchPage />} />
                <Route exact path={route.DETAIL} element={<SongInfoPage />} />
                <Route exact path={route.ABOUT} element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
