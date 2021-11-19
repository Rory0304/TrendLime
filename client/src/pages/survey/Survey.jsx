import { useEffect, useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Question from './Question';
import Options from './Options';
import Pagination from './Pagination';
import route from '../../routers/routeConstants';

function Survey() {
    const [surveySheet, setSurveySheet] = useState({});
    const [currentPage, setCurrent] = useState({});
    const [page, setPage] = useState({
        start: 0,
        current: 0,
        end: 0,
    });
    const [answerSheet, setAnswerSheet] = useState([]);

    /* 이미 선택한 질문인지 확인하는 함수 */
    const isChoosed = () => {
        const isChoosed = answerSheet.filter(
            (answer) => answer.categoryKey === currentPage.category,
        );
        return isChoosed.length;
    };

    /* 선택지를 클릭할 때 이벤트 */
    const onChooseOption = (optionKey) => {
        const newChoice = {
            categoryKey: currentPage.category,
            answer: optionKey,
        };

        if (isChoosed() !== 0) {
            const newAnswerSheet = answerSheet.map((answer) =>
                answer.categoryKey === currentPage.category ? newChoice : answer,
            );

            setAnswerSheet(newAnswerSheet);
        } else {
            setAnswerSheet([...answerSheet, newChoice]);
        }
    };

    const submitAnswers = async () => {
        try {
            const res = await axios.post('/api/survey/result/', answerSheet);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    /* 백엔드에 질문지 요청 */
    useLayoutEffect(() => {
        const getSurveySheet = async () => {
            try {
                const res = await axios.get('/api/survey');
                setSurveySheet(res.data);
                setCurrent(res.data.require[0]);
                setPage({ ...page, end: res.data.require.length });
            } catch (e) {
                console.log(e);
            }
        };
        getSurveySheet();
    }, []);

    /* 페이지네이션 클릭시, 질문과 선택지 구성을 업데이트 */
    useEffect(() => {
        if (surveySheet.require) {
            setCurrent(surveySheet.require[page.current]);
        }
    }, [page.current]);

    return (
        <div>
            {page.current < page.end && (
                <>
                    <Question question={currentPage.question} />
                    <Options options={currentPage.answers} onChooseOption={onChooseOption} />
                    <Pagination
                        page={page}
                        setPage={setPage}
                        isChoosed={isChoosed() === 0 ? false : true}
                    />
                </>
            )}
            {page.current === page.end && (
                <Link to={route.SURVEYRESULT}>
                    <button onClick={submitAnswers}>추천 결과 보기</button>
                </Link>
            )}
        </div>
    );
}

export default Survey;
