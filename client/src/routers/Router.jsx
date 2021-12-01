import { BrowserRouter, Routes, Route } from 'react-router-dom';
import route from './routeConstants';
import Header from '../components/Header/index';
import MainPage from '../pages/main/MainPage';
import LoginPage from '../pages/login/LoginPage';
import SignupPage from '../pages/login/SignupPage';
import Survey from '../pages/survey/Survey';
import SurveyResult from '../pages/surveyResult/SurveyResult';
import SearchPage from '../pages/search/SearchPage';
import SongInfoPage from '../pages/songInfo/SongInfoPage';
import AboutPage from '../pages/about/AboutPage';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={route.MAIN} element={<MainPage />} />
                <Route path={route.LOGIN} element={<LoginPage />} />
                <Route path={route.SIGNUP} element={<SignupPage />} />
                <Route exact path={route.SURVEY} element={<Survey />} />
                <Route exact path={route.SURVEYRESULT} element={<SurveyResult />} />
                <Route exact path={route.ABOUT} element={<AboutPage />} />
                <Route path={route.SEARCH} element={<SearchPage />} />
                <Route path={route.DETAIL} element={<SongInfoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
