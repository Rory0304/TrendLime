import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';
import Options from './Options';
import Pagination from './Pagination';
import route from '../../routers/routeConstants';
import useAsync from '../../hooks/useAsync';

export const SurveyContext = React.createContext();
export const PaginationContext = React.createContext();

async function getSurveyData() {
    const res = await axios.get('/api/survey');
    return res.data;
}

function Survey() {
    const [currentPage, setCurrentPage] = useState({});
    const [answerSheet, setAnswerSheet] = useState([]);
    const [page, setPage] = useState({
        start: 0,
        current: 0,
        end: 0,
    });

    /* 백엔드에 설문지를 요청 */
    const [state, fetchData] = useAsync(getSurveyData);
    const { loading, data, error } = state;

    useEffect(() => {
        if (data !== null) {
            setCurrentPage(state.data.require[0]);
            setPage({ ...page, end: data.require.length });
        }
    }, [state]);

    /* currentPage가 이미 선택을 했던  페이지인지 확인하는 함수 */
    const isChoosed = () => {
        const isChoosed = answerSheet.filter(
            (answer) => answer.categoryKey === currentPage.category,
        );
        return isChoosed.length;
    };

    /* 최종 answerSheet를 백엔드로 보내는 함수*/
    const submitAnswers = async () => {
        try {
            const res = await axios.post('/api/survey/result/', answerSheet);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    if (loading || data === null) {
        return <div>Loading...</div>;
    } else if (error) {
        return <span>Error: {error.message}</span>;
    } else {
        return (
            <>
                {page.current < page.end && (
                    <>
                        <SurveyContext.Provider value={[answerSheet, currentPage, setAnswerSheet]}>
                            <Question question={currentPage.question} />
                            <Options options={currentPage.answers} />
                        </SurveyContext.Provider>
                        <PaginationContext.Provider value={[page, setPage, setCurrentPage, data]}>
                            <Pagination isChoosed={isChoosed() === 0 ? false : true} />
                        </PaginationContext.Provider>
                    </>
                )}
                {page.current === page.end && (
                    <Link to={route.SURVEYRESULT}>
                        <button onClick={submitAnswers}>추천 결과 보기</button>
                    </Link>
                )}
            </>
        );
    }
}

export default Survey;
