import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

/* 임시로 사용할 react chart js 라이브러리 */
function BarChart() {
    const labels = [
        '단어1',
        '단어2',
        '단어3',
        '단어4',
        '단어5',
        '단어6',
        '단어7',
        '단어8',
        '단어9',
        '단어10',
    ];
    const data = {
        labels: labels,
        datasets: [
            {
                indexAxis: 'y',
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40, 100, 120, 200],
                fill: false,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return <Bar data={data} />;
}

export default BarChart;
