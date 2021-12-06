import React, { useCallback } from 'react';
import WordCloud from 'react-d3-cloud';
import { Styled } from './styles.js';

function Wordcloud() {
    const data = [
        { text: '안녕', value: 1000 },
        { text: '안녕', value: 200 },
        { text: '안녕', value: 800 },
        { text: '안녕', value: 1000000 },
        { text: '안녕', value: 10 },
    ];

    const sum = data.reduce((a, b) => a.value + b.value, 0);
    const avg = sum / data.length || 0;
    const fontSize = useCallback((word) => Math.log2(word.value) * 3, []);
    const fontWeight = useCallback((word) => (word.value > avg ? 'bold' : 'normal'), []);
    // const fill = useCallback((word) => (word.value > avg ? '#00cc66' : 'gray'), []);

    return (
        <Styled.WordCloudWrapper>
            <WordCloud
                height={200}
                data={data}
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
