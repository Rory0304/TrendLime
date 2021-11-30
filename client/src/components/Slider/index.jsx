import React, { useEffect, useRef, useState } from 'react';
import { Styled } from './styles';

import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';

/* TODO :
 * 1) 반응형 구현하기
 * 2) 페이지네이션 이동마다 영역이 잘리는 앨범 없이 row 구현하기
 */

function Slider({ settings, slideList }) {
    const TOTAL_SLIDES = settings.total_page; // 페이지네이션 수
    const UNIT_SLIDES = settings.unit_slides; // 한 줄에 위치하는 슬라이드 수

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideWrapperRef = useRef(null);

    const slideRef = useRef(null);

    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${
            slideWrapperRef.current.clientWidth * currentSlide
        }px)`;
    }, [currentSlide]);

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <>
            <Styled.PaginationButtons>
                <button onClick={prevSlide}>
                    <CaretLeftFilled />
                    <span className="visually-hidden">이전</span>
                </button>
                <button onClick={nextSlide}>
                    <CaretRightFilled />
                    <span className="visually-hidden">다음</span>
                </button>
            </Styled.PaginationButtons>
            <Styled.SliderContainer items={UNIT_SLIDES} ref={slideWrapperRef}>
                <Styled.SliderWrapper ref={slideRef}>
                    {slideList.map((item, index) => (
                        <Styled.Slide>
                            <Styled.Rank>
                                <span>{index + 1}.</span>
                            </Styled.Rank>
                            <Styled.AlbumCover>
                                <img src={item.cover_url} alt={item.song_name} />
                            </Styled.AlbumCover>
                            <Styled.SongInfo>
                                <p>{item.song_name}</p>
                                <p>{item.artist}</p>
                            </Styled.SongInfo>
                        </Styled.Slide>
                    ))}
                </Styled.SliderWrapper>
            </Styled.SliderContainer>
        </>
    );
}

export default Slider;
