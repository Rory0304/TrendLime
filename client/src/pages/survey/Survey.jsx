import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import Option from './Option';
import Pagination from './Pagination';

function Survey() {
    const surveySheet = {
        category: ['뮤직 스타일', '장소/상황', '감정', '계절', '시간', '날씨'],
        require: [
            {
                category: '뮤직 스타일',
                question: '당신이 선호하는 음악 스타일은 무엇인가요?',
                answers: [{ 0: '신나는' }, { 1: '발라드한' }, { 2: '그루브한' }],
                require: true,
            },
            {
                category: '장소/상황',
                question: '당신은 지금 어느 상황/장소에 있나요?',
                answers: [{ 0: '' }, { 1: '' }, { 2: '' }],
                require: true,
            },
            {
                category: '감정',
                question: '당신은 지금 어떤 감정을 가지고 있나요?',
                answers: [{ 0: '' }, { 1: '' }, { 2: '' }],
                require: true,
            },
        ],
        optional: [
            {
                category: '계절',
                question: '선호하는/지금 계절은 무엇인가요?',
                answers: [{ 0: '' }, { 1: '' }, { 2: '' }],
                require: false,
            },
            {
                category: '시간',
                question: '선호하는/지금 시간은 언제인가요?',
                answers: [{ 0: '' }, { 1: '' }, { 2: '' }],
                require: false,
            },
            {
                category: '날씨',
                question: '선호하는/지금 날씨는 무엇인가요?',
                answers: [{ 0: '' }, { 1: '' }, { 2: '' }],
                require: false,
            },
        ],
    };

    const [page, setPage] = useState({
        current: 0,
        end: surveySheet.require.length + surveySheet.optional.length,
    });

    const [currentPage, setCurrent] = useState({});

    useEffect(() => {
        console.log('백엔드로부터 설문정보를 받아옴');
        setCurrent(surveySheet.require[0]);
    }, []);

    useEffect(() => {
        console.log(page.current);
    }, [page.current]);

    return (
        <div>
            {page.current < page.end && (
                <>
                    <Question question={currentPage.question} />
                    <Pagination page={page} setPage={setPage} />
                </>
            )}
        </div>
    );
}

export default Survey;
