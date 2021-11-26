import React from 'react';
import { Styled } from './styles';

function ChartGraph({ songs }) {
    return <Styled.ChartGraphWrapper>{songs}</Styled.ChartGraphWrapper>;
}

export default ChartGraph;
