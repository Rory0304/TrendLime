import React, { useMemo } from 'react';

import BarChart from '../../../components/BarChart/index';
import Carousel from '../../../components/Carousel/index';
import { Styled } from './styles';

function TrendContents({ data }) {
    const topics = useMemo(() => data.topics, [data]);
    const top10Data = useMemo(() => data.words_and_freq.slice(0, 10), [data]);
    const carouselOption = { rankShown: false, type: 'wordcloud' };

    return (
        <>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>2000년대 ‘좋아요👍’가 많았던 곡들의 주제</Styled.SubTitle>
                <Styled.SubContentArea>
                    {topics === undefined || topics.length === 0 ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <Carousel items={topics} option={carouselOption} />
                    )}
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>2000년대 '좋아요👍'가 많았던 곡들의 가사 TOP10</Styled.SubTitle>
                <Styled.SubContentArea>
                    {top10Data === undefined || top10Data.length === 0 ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <BarChart data={top10Data} />
                    )}
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
        </>
    );
}

export default TrendContents;
