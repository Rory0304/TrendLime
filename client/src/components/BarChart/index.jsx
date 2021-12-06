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

    const sortbyDecrease = (arr) => {
        return arr.sort(function (a, b) {
            return b - a;
        });
    };

    const data = [65, 59, 80, 81, 56, 55, 40, 100, 120, 200];

    const backgroundColor = [];
    const borderColor = [];

    /* TODO: 한 줄로 바꾸기 */
    for (let i = 1; i <= 10; i++) {
        if (i <= 3) {
            backgroundColor.push('#00A700');
            borderColor.push('#00A700');
        } else {
            backgroundColor.push('#979797');
            borderColor.push('#97979752');
        }
    }

    const option = {
        scales: {
            y: {
                grid: {
                    drawBorder: false,
                    drawTicks: false,
                    display: false,
                },
            },
            x: {
                grid: {
                    drawBorder: false,
                    drawTicks: false,
                    display: false,
                },
            },
        },
    };

    const barData = {
        labels: labels,
        datasets: [
            {
                indexAxis: 'y',
                data: sortbyDecrease(data),
                fill: false,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
                borderRadius: 8,
            },
        ],
    };

    return <Bar data={barData} />;
}

export default BarChart;
