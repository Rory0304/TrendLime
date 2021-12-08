import React from 'react';
import Wordcloud from '../../../components/WordCloud/index';
import BarChart from '../../../components/BarChart/index';
import { Styled } from './styles';

function TrendContents({ isFetching, data }) {
    const topics = data?.length === 0 ? [] : data.topics;
    const top10Data = data?.length === 0 ? [] : data.words_and_freq.slice(0, 10);
    return (
        <>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>2000년대 ‘좋아요’가 많았던 곡들의 토픽</Styled.SubTitle>
                <Styled.SubContentArea>
                    {isFetching ? (
                        <div>loading...</div>
                    ) : data?.length === 0 ? (
                        <div>데이터가 없습니다. </div>
                    ) : (
                        <Styled.TopicList>
                            {topics.map((topic) => (
                                <li key={topic.label_id}>
                                    <Wordcloud
                                        data={topic.words_and_freq}
                                        height={300}
                                        width={300}
                                    />
                                    <h4>{topic.label_name}</h4>
                                </li>
                            ))}
                        </Styled.TopicList>
                    )}
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>2000년대 좋아요가 많았던 노래 가사 TOP10</Styled.SubTitle>
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

export default TrendContents;
