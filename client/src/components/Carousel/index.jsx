import React, { useMemo } from 'react';
import { Styled } from './styles';

import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';
import AlbumSlideItem from './AlbumList';

import useHorizontalScroll from './useHorizontalScroll';
import useScrollButtonController from './useScrollButtonContainer';

function Carousel({ songs, rankShown }) {
    const { scroll, slideRef, slideWrapperRef } = useHorizontalScroll();

    const { onScroll, prevButtonShown, nextButtonShown } = useScrollButtonController({ slideRef });

    /*
     * Arguments : cb (스크롤 시, 발생할 이벤트)
     * requestAnimationFrame : 브라우저가 렌더링 할 수 있는 ‘능력’에 맞춰 이벤트를 트리거함
     * tick : 브라우저가 렌더링 할 수 있는 능력 이상의 cb 함수 호출을 막음
     */
    const onScrollActiveBtn = (cb) => {
        let tick = false;
        return function trigger() {
            if (tick) {
                return;
            }

            tick = true;

            return requestAnimationFrame(function task() {
                tick = false;
                return cb();
            });
        };
    };

    return (
        <Styled.AlbumListCarousel>
            <Styled.SliderContainer ref={slideWrapperRef}>
                <Styled.SliderWrapper
                    ref={slideRef}
                    onScroll={(e) => onScrollActiveBtn(onScroll(e))}
                >
                    {songs.map((item, index) => (
                        <AlbumSlideItem item={item} index={index} rankShown={rankShown} />
                    ))}
                </Styled.SliderWrapper>
            </Styled.SliderContainer>
            <Styled.PrevBtn onClick={() => scroll(-1)} firstElemIntersect={prevButtonShown}>
                <CaretLeftFilled />
                <span className="visually-hidden">이전</span>
            </Styled.PrevBtn>
            <Styled.NextBtn onClick={() => scroll(1)} lastElemIntersect={nextButtonShown}>
                <CaretRightFilled />
                <span className="visually-hidden">다음</span>
            </Styled.NextBtn>
        </Styled.AlbumListCarousel>
    );
}

export default React.memo(Carousel);
