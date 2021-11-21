import React from 'react';

import { Styled } from './styles';

function Checkbox({ children }) {
    return (
        <Styled.Label>
            <input type="checkbox" />
            {children}
        </Styled.Label>
    );
}

export default Checkbox;
