import React, { useContext, useEffect } from 'react';
import { PaginationContext } from './Survey';

/*
 * Pagination 컴포넌트 관심사
 * 1_<이전/다음> 버튼 활성화 여부를 표시
 * 2_<이전/다음> 버튼 클릭 시, current Page를 변경
 *
 * Props
 * isChoosed : 과거에 선택을 했었던 질문에 대해 페이지네이션 버튼의 활성화 여부를 설정함 (true: 과거에 선택했음, false: 아직 선택 안 함)
 */

function Pagination({ isChoosed }) {
    const [page, setPage, setCurrentPage, data] = useContext(PaginationContext);

    /* 페이지네이션 클릭시, 질문과 선택지 구성을 업데이트 */
    useEffect(() => {
        if (data) {
            setCurrentPage(data.require[page.current]);
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
            <button onClick={onClickNext} disabled={isChoosed ? false : true}>
                다음
            </button>
        );
    } else {
        return (
            <>
                <button onClick={onClickPrev}>이전</button>
                <button onClick={onClickNext} disabled={isChoosed ? false : true}>
                    다음
                </button>
            </>
        );
    }
}

export default Pagination;
