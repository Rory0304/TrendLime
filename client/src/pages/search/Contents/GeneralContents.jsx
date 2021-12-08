import React from 'react';

import Wordcloud from '../../../components/WordCloud/index';
import BarChart from '../../../components/BarChart/index';
import { Styled } from './styles';

function GeneralContents({ isFetching, data }) {
    const top30Data = data?.length === 0 ? [] : data.words_and_freq.slice(0, 30);
    const top10Data = data?.length === 0 ? [] : data.words_and_freq.slice(0, 10);

    return (
        <>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>가사 속 표현 분석</Styled.SubTitle>
                <Styled.SubContentArea>
                    {isFetching ? (
                        <div>loading...</div>
                    ) : data?.length === 0 ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <Wordcloud data={top30Data} fontsize={8} />
                    )}
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>노래 가사 TOP10</Styled.SubTitle>
                <Styled.SubContentArea>
                    {isFetching ? (
                        <div>loading...</div>
                    ) : data?.length === 0 ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <BarChart data={top10Data} />
                    )}
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
        </>
    );
}

export default GeneralContents;
