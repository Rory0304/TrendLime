/* 버튼의 상태를 결정하는 훅 */

import { useState, useEffect, useCallback } from 'react';

export default function useScrollButtonController({ slideRef }) {
    const [prevButtonShown, setPrevButtonShown] = useState(true);
    const [nextButtonShown, setNextButtonShown] = useState(false);

    /* 버튼 상태를 변경 */
    const checkButtonState = (elementScrollWidth, elementOffsetWidth, elementScrollLeft) => {
        setPrevButtonShown(elementScrollLeft === 0);
        setNextButtonShown(elementScrollWidth <= elementScrollLeft + elementOffsetWidth);
    };

    /* 스크롤 이벤트 실행 시, 버튼 상태 변경 */
    const handleScroll = useCallback((e) => {
        checkButtonState(e.target.scrollWidth, e.target.offsetWidth, e.target.scrollLeft);
    }, []);

    return {
        prevButtonShown,
        nextButtonShown,
        onScroll: handleScroll,
    };
}
