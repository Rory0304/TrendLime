import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import route from '../../routers/routeConstants';

import { Styled } from './styles';

import { CaretLeftFilled, CaretRightFilled } from '@ant-design/icons';

/* TODO :
 * 1) 반응형 구현하기
 * 2) 페이지네이션 이동마다 영역이 잘리는 앨범 없이 row 구현하기
 */

function Slider({ lastIdx = -1, slideList }) {
    const [slideIdx, setSlideIdx] = useState(0);

    const nextSlide = () => {
        setSlideIdx(slideIdx === lastIdx ? slideIdx : slideIdx + 1);
    };

    const prevSlide = () => {
        setSlideIdx(slideIdx === 0 ? slideIdx : slideIdx - 1);
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
            <Styled.SliderContainer>
                <Styled.SliderWrapper slideIdx={slideIdx}>
                    {slideList.map((item, index) => (
                        <Styled.Slide>
                            <Link to={`${route.DETAIL}/${item ? item.song_id : ''}`}>
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
                            </Link>
                        </Styled.Slide>
                    ))}
                </Styled.SliderWrapper>
            </Styled.SliderContainer>
        </>
    );
}

export default Slider;
