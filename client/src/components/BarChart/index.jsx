import React from 'react';
import { css, jsx } from '@emotion/react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const BACKGROUNDCOLOR = Array(10).fill('#00DD00', 0, 3).fill('#979797', 3, 10);
const BORDERCOLOR = Array(10).fill('#00DD00', 0, 3).fill('#97979752', 3, 10);

function BarChart({ data, width = '100%', height = '100%' }) {
    const values = data[0] === null ? [] : data.map((d) => parseFloat(d.freq));
    const labels = data[0] === null ? [] : data.map((d) => d.word);

    const barData = {
        labels: labels,
        datasets: [
            {
                indexAxis: 'y',
                data: values,
                fill: false,
                backgroundColor: BACKGROUNDCOLOR,
                borderColor: BORDERCOLOR,
                borderWidth: 1,
                label: '단어 빈도수',
            },
        ],
    };

    const options = {
        responsive: true,
    };

    return (
        <div css={BarChartWrapper({ width: width, height: height })}>
            <Bar data={barData} options={options} />
        </div>
    );
}

const BarChartWrapper = ({ width, height }) => css`
    width: ${width};
    height: ${height};
    margin: 0 auto;
`;

export default BarChart;
