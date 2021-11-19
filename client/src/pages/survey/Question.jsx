import React from 'react';
import PropTypes from 'prop-types';

function Question({ question }) {
    return <h2>{question}</h2>;
}

Question.propTypes = {
    question: PropTypes.string.isRequired,
};

export default Question;
