import React, { useRef, useState } from 'react';
import { Styled } from './styles';

import useIntersectionObserver from '../../utils/hooks/useIntersectionObserver';
import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';

function Slider({ lastIdx = -1, slideList, rankShown = false }) {
    const [slideIdx, setSlideIdx] = useState(0);
    const slideWrapperRef = useRef(null);
    const slideRef = useRef(null);

    const firstElemRef = useRef(null);
    const lastElemRef = useRef(null);

    /* 처음과 끝 인덱스의 앨범이 viewport에 위치해있는지 판단 */
    const firstElemIntersect = useIntersectionObserver(firstElemRef);
    const lastElemIntersect = useIntersectionObserver(lastElemRef);

    const nextSlide = () => {
        if (lastElemIntersect) {
            return;
        }
        setSlideIdx(slideIdx + 1);
        slideRef.current.scrollLeft += slideWrapperRef.current.clientWidth;
    };

    const prevSlide = () => {
        if (firstElemIntersect) {
            return;
        }

        setSlideIdx(slideIdx - 1);
        slideRef.current.scrollLeft -= slideWrapperRef.current.clientWidth;
    };

    return (
        <Styled.AlbumListCarousel>
            <Styled.SliderContainer ref={slideWrapperRef}>
                <Styled.SliderWrapper ref={slideRef}>
                    {slideList.map((item, index) => (
                        <Styled.Slide
                            ref={
                                index === 0
                                    ? firstElemRef
                                    : index === slideList.length - 1
                                    ? lastElemRef
                                    : null
                            }
                        >
                            {item}
                        </Styled.Slide>
                    ))}
                </Styled.SliderWrapper>
            </Styled.SliderContainer>
            <Styled.PrevBtn onClick={prevSlide} firstElemShown={firstElemIntersect}>
                <CaretLeftFilled />
                <span className="visually-hidden">이전</span>
            </Styled.PrevBtn>
            <Styled.NextBtn onClick={nextSlide} lastElemShown={lastElemIntersect}>
                <CaretRightFilled />
                <span className="visually-hidden">다음</span>
            </Styled.NextBtn>
        </Styled.AlbumListCarousel>
    );
}

export default Slider;
