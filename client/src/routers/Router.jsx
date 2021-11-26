import { BrowserRouter, Routes, Route } from 'react-router-dom';
import route from './routeConstants';
import Header from '../components/Header/index';
import MainPage from '../pages/main/MainPage';
import Survey from '../pages/survey/Survey';
import SurveyResult from '../pages/surveyResult/SurveyResult';

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={route.MAIN} element={<MainPage />} />
                <Route exact path={route.SURVEY} element={<Survey />} />
                <Route exact path={route.SURVEYRESULT} element={<SurveyResult />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
