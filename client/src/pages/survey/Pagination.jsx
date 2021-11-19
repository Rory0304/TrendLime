import React from 'react';

function Pagination({ page, setPage }) {
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
        return <button onClick={onClickNext}>다음</button>;
    } else if (page.current === page.end) {
        return <button>완료</button>;
    } else {
        return (
            <>
                <button onClick={onClickPrev}>이전</button>
                <button onClick={onClickNext}>다음</button>
            </>
        );
    }
}

export default Pagination;
