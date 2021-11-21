import React from 'react';

function SurveyBtn({ onClick, children, disabled = false }) {
    return (
        <button onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

export default SurveyBtn;
