import React from 'react';
import ReactWordcloud from 'react-wordcloud';

function Wordcloud() {
    const words = [
        {
            text: 'told',
            value: 64,
        },
        {
            text: 'mistake',
            value: 11,
        },
        {
            text: 'thought',
            value: 16,
        },
        {
            text: 'bad',
            value: 17,
        },
    ];

    return <ReactWordcloud words={words} />;
}

export default Wordcloud;
