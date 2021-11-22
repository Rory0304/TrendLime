import React from 'react';
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';

function Question({ question }) {
    return (
        <div css={QuestionStyle}>
            <h2>{question}</h2>
        </div>
    );
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
};

const QuestionStyle = css`
    margin: 2rem 0;

    h2 {
        font-size: 1.7rem;
        font-weight: bold;
        text-align: center;
    }
`;
export default Question;
