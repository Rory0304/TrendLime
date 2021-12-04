import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styles';
import { useQuery } from 'react-query';

import route from '../../../routers/routeConstants';
import { fetchSearchKey } from '../../../utils/api/queryKeys';
import { useQueryFetch } from '../../../utils/hooks/useQueryFetch';

// import Wordcloud from '../../../components/WordCloud/index';
import BarChart from '../../../components/BarChart/index';

function SearchContents({ searchOption }) {
    const TOTAL_SLIDES = 2; // 페이지네이션 수

    const [currentSlide, setCurrentSlide] = useState(0);
    const [contents, setContents] = useState([]);

    const albumListCarouselWrapperRef = useRef(null);
    const albumListCarouselRef = useRef(null);
    const { isLoading, error, data, refetch } = useQuery(
        [fetchSearchKey, searchOption],
        useQueryFetch,
        { refetchOnWindowFocus: false },
    );

    useEffect(() => {
        if (!isLoading && data) {
            setContents(data.result.splice(0, 10));
        }
    }, [data]);

    useEffect(() => {
        albumListCarouselRef.current.style.transform = `translateX(-${
            albumListCarouselRef.current.clientWidth * currentSlide
        }px)`;
    }, [currentSlide]);

    const onClickPrev = () => {
        if (currentSlide >= TOTAL_SLIDES - 1) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const onClickNext = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }

        albumListCarouselRef.current.style.transform = `translateX(-${
            albumListCarouselWrapperRef.current.clientWidth * currentSlide
        }px)`;
    };

    return (
        <div>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>가사 속 표현 분석</Styled.SubTitle>
                <Styled.SubContentArea>
                    <div>
                        {/* <Wordcloud /> */}
                    </div>
                    <div>
                        <BarChart />
                    </div>
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>대표곡</Styled.SubTitle>
                <Styled.AlbumListCarousel ref={albumListCarouselWrapperRef}>
                    <div ref={albumListCarouselRef}>
                        <Styled.AblumList>
                            {isLoading ? (
                                <div>loading...</div>
                            ) : data.result === null || data.result.length === 0 ? (
                                <div>데이터가 없습니다. </div>
                            ) : (
                                contents.map((song) => (
                                    <li>
                                        <Link to={`${route.DETAIL}/${song ? song.song_id : ''}`}>
                                            <div>
                                                {song && (
                                                    <img
                                                        src={song.cover_url}
                                                        alt={song.song_name}
                                                    />
                                                )}
                                                {song && <p>{song.song_name}</p>}
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            )}
                        </Styled.AblumList>
                    </div>
                </Styled.AlbumListCarousel>
                <div>
                    <button onClick={onClickPrev}>이전</button>
                    <button onClick={onClickNext}>다음</button>
                </div>
            </Styled.SubContentsWrapper>
        </div>
    );
}

export default SearchContents;
