import { useState } from 'react';
import { Styled } from './styles';

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(true);

    const scrollUp = () => {};

    return (
        <Styled.ScrollUpBox onClick={scrollUp} show={showScroll}>
            <div>top</div>
        </Styled.ScrollUpBox>
    );
};

export default ScrollToTop;
