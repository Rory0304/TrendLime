import { useRef, useState, useCallback, useEffect } from 'react';

/**
 * Arguments:
 * - onIntersect : 요소가 viewport에 intersect 되었을 때 값 반환
 * - option : threshold 같은 Intersection Observer 옵션 반환
 */

const useIntersectionObserver = (ref, option = { threshold: 0 }) => {
    const [isIntersecting, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        option,
    );

    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current);
            return () => {
                observer.disconnect();
            };
        }
    }, []);

    return isIntersecting;
};

export default useIntersectionObserver;
