import React, { memo } from 'react';
import { css } from '@emotion/react';

import Wordcloud from '../WordCloud/index';

function WordCloudItem({ index, item }) {
    return (
        <li css={TopicList}>
            <h4>
                주제#{index + 1}
                <br />
                {item.label_name}
            </h4>
            <Wordcloud
                data={item.words_and_freq}
                height={200}
                width={600}
                fontsize={3}
                fontValue={2}
            />
        </li>
    );
}

const TopicList = css`
    border: 1px solid rgb(225 225 225);
    border-radius: 0.7rem;
    box-shadow: -2px 7px 4px 2px #0000001c;
    margin: 2rem 0;
    padding: 1.2rem;
    flex-basis: 600px;
    flex-grow: 0;
    flex-shrink: 0;

    h4 {
        text-decoration: underline;
        text-decoration-color: #00dd00;
        font-weight: bold;
        font-size: 1rem;
        line-height: 2rem;
        margin-bottom: 0.8rem;
    }
`;

export default memo(WordCloudItem);
