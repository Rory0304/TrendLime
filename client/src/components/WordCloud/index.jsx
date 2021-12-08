import React, { useCallback } from 'react';
import WordCloud from 'react-d3-cloud';
import { Styled } from './styles.js';

function Wordcloud({ data }) {
    /* TODO : 데이터가 너무 많음!! 워드 클라우드에 표현해줄 데이터 length 지정하기! */
    const FilteredData = data.map((d) => ({ text: d.word, value: parseInt(d.freq) }));

    const sum = data.reduce((a, b) => a.value + b.value, 0);
    const avg = sum / data.length || 0;
    const fontSize = useCallback((word) => Math.log2(word.value) * 3, []);
    const fontWeight = useCallback((word) => (word.value > avg ? 'bold' : 'normal'), []);
    // const fill = useCallback((word) => (word.value > avg ? '#00cc66' : 'gray'), []);

    return (
        <Styled.WordCloudWrapper>
            <WordCloud
                height={200}
                data={FilteredData}
                fontSize={fontSize}
                fontWeight={fontWeight}
                // fill={fill}
                rotate={0}
                padding={10}
                font="Noto Sans KR"
            />
        </Styled.WordCloudWrapper>
    );
}

export default Wordcloud;
