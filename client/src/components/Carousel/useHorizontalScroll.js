/* 버튼 눌렀을 때 스크롤 제어 이벤트 */
import { useRef } from 'react';

export default function useHorizontalScroll() {
    const slideRef = useRef();
    const slideWrapperRef = useRef();

    const scroll = (direction) => {
        if (!slideRef.current || !slideWrapperRef.current) return;
        slideRef.current.scrollLeft += slideWrapperRef.current.clientWidth * direction;
    };

    return { scroll, slideRef: slideRef, slideWrapperRef: slideWrapperRef };
}
