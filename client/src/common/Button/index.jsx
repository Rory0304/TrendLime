import React from 'react';
import { Styled } from './styles';

function SurveyBtn({ onClick, children, disabled = false }) {
    return (
        <Styled.Button onClick={onClick} disabled={disabled}>
            {children}
        </Styled.Button>
    );
}

export default SurveyBtn;
