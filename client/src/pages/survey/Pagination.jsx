import React, { useContext, useEffect } from 'react';

import SurveyBtn from '../../common/Button/SurveyBtn';
import { PaginationContext } from './Survey';

/*
 * Pagination 컴포넌트 관심사
 * 1_<이전/다음> 버튼 클릭 시, current Page를 변경
 * 2_<이전/다음> 버튼 활성화 여부를 표시
 * 3_<다음> 버튼 클릭 시, 해당 페이지 진행 중임을 나타내는 category의 활성화 여부 표시
 *
 * Props
 * isChoosed : 과거에 선택을 했었던 질문에 대해 페이지네이션 버튼의 활성화 여부를 설정함 (true: 과거에 선택했음, false: 아직 선택 안 함)
 */

function Pagination({ isChoosed }) {
    const [page, setPage, setCurrentPage, surveySheet, setCategory, category] =
        useContext(PaginationContext);

    /* 페이지네이션 클릭시,
     * 1) 질문과 선택지 구성을 업데이트
     * 2) 페이지 방문 여부 체크 후, 상단 카테고리 바 업데이트
     */
    useEffect(() => {
        setCurrentPage(surveySheet[page.current]);
        if (!category[surveySheet[page.current].category]) {
            setCategory({ ...category, [surveySheet[page.current].category]: true });
        }
    }, [page.current]);

    const onClickNext = () => {
        setPage({
            ...page,
            current: page.current + 1,
        });
    };

    const onClickPrev = () => {
        setPage({
            ...page,
            current: page.current - 1,
        });
    };

    if (page.current === 0) {
        return (
            <SurveyBtn onClick={onClickNext} disabled={isChoosed ? false : true}>
                다음
            </SurveyBtn>
        );
    } else {
        return (
            <>
                <SurveyBtn onClick={onClickPrev}>이전</SurveyBtn>
                <SurveyBtn onClick={onClickNext} disabled={isChoosed ? false : true}>
                    다음
                </SurveyBtn>
            </>
        );
    }
}

export default Pagination;
