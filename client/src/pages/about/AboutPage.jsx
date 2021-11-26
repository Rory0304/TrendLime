import React from 'react';
import route from '../../routers/routeConstants';

import ContentBlock from '../../components/ContentBlock/index';
import Container from '../../components/Container/index';
import ScrollToTop from '../../common/ScrollToTop/index';

function AboutPage() {
    return (
        <Container>
            <ScrollToTop />
            <ContentBlock
                type="right"
                title="인트로"
                content="인트로"
                button={{ text: '오늘의 곡 추천', link: route.SURVEY }}
            />
            <ContentBlock type="left" title="서비스1" content="서비스1" />
            <ContentBlock type="right" title="서비스2" content="서비스2" />
            <ContentBlock type="left" title="서비스3" content="서비스3" />
        </Container>
    );
}

export default AboutPage;
