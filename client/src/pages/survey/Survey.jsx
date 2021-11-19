import { useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';

import Question from './Question';
import Options from './Options';
import Pagination from './Pagination';

function Survey() {
    const [surveySheet, setSurveySheet] = useState({});
    const [currentPage, setCurrent] = useState({});
    const [page, setPage] = useState({
        start: 0,
        current: 0,
        end: 0,
    });

    useLayoutEffect(() => {
        const getSurveySheet = async () => {
            try {
                const res = await axios.get('/api/survey/');
                setSurveySheet(res.data);
                setCurrent(res.data.require[0]);
                setPage({ ...page, end: res.data.require.length });
            } catch (e) {
                console.log(e);
            }
        };
        getSurveySheet();
    }, []);

    useEffect(() => {
        if (page.current !== page.start) {
            setCurrent(surveySheet.require[page.current]);
        }
    }, [page.current]);

    return (
        <div>
            {page.current < page.end && (
                <>
                    <Question question={currentPage.question} />
                    <Options options={currentPage.answers} />
                </>
            )}
            <Pagination page={page} setPage={setPage} />
        </div>
    );
}

export default Survey;
