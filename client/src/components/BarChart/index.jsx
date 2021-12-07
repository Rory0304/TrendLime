import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

function BarChart({ data }) {
    console.log(data);

    const values = data.map((d) => parseInt(d.freq));
    const labels = data.map((d) => d.word);

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
                data: values,
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
