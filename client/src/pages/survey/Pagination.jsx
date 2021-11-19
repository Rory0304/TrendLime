import React from 'react';

function Pagination({ page, setPage, isChoosed }) {
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
