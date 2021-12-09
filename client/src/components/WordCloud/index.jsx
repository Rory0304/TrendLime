import React, { useCallback } from 'react';
import { css, jsx } from '@emotion/react';
import WordCloud from 'react-d3-cloud';
import { scaleLinear, scalePow } from 'd3-scale';

function Wordcloud({ data, height = 200, width = 600, fontsize = 15, fontValue = 8 }) {
    const FilteredData = data.map((d) => ({ text: d.word, value: parseInt(d.freq) }));
    console.log(FilteredData);
    const FilteredValue = FilteredData.map((fd) => fd.value);

    let sum = FilteredData.reduce((a, b) => a + b.value, 0);
    let avg = sum / FilteredData.length;
    let maxValue = Math.max(...FilteredValue);
    let minValue = Math.min(...FilteredValue);

    let color = scaleLinear().domain([minValue, maxValue]).range(['#ebe86a', '#4bc2c4', '#03793e']);

    const fontSize = useCallback((word) => {
        const size = Math.log(word.value * fontsize) * fontValue;
        return size;
    }, []);
    const fontWeight = useCallback((word) => (word.value > avg ? 'bold' : 'normal'), []);
    const fill = useCallback(function (word) {
        return color(word.value);
    }, []);

    return (
        <div css={WordCloudWrapper({ width: width, height: height })}>
            <WordCloud
                width={width}
                height={height}
                data={FilteredData}
                fontSize={fontSize}
                fontWeight={fontWeight}
                fill={fill}
                rotate={0}
                padding={10}
                font="Noto Sans KR"
            />
        </div>
    );
}

const WordCloudWrapper = ({ width, height }) => css`
    background-color: #f5f8fc;
    border: 1px solid #cecece;
    border-radius: 8px;
    width: ${width}px;
    height: ${height}px;
`;

export default Wordcloud;
