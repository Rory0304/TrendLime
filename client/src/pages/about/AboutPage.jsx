import React from 'react';

import route from '../../routers/routeConstants';
import Banner from '../../components/Banner/index';
import ContentBlock from '../../components/ContentBlock/index';
import Container from '../../components/Container/index';
import ScrollToTop from '../../common/ScrollToTop/index';

import Lime from '../../assets/images/lime.png';

function AboutPage() {
    return (
        <Container>
            <ScrollToTop />
            <Banner title="트렌드 라임," subtitle="가사 트렌드를 분석해드립니다." />
            <ContentBlock
                type="left"
                title="트렌드 라임은?"
                src={Lime}
                content="트렌드 (Trend)와 라임(Rhyme, Lime)을 합친 말로, 가사 데이터 분석 서비스를 제공해서 유저들에게 “라임”과 같은 역할을 하겠다는 목표를 가지고 있습니다."
            />

            <ContentBlock
                type="right"
                title=""
                content="트렌드 라임은, 국내 가요 데이터를 인공지능 기술로 분석하여, 인사이트를 제공합니다."
            />
            <ContentBlock type="right" title="서비스2" content="서비스2" />
            <ContentBlock type="left" title="서비스3" content="서비스3" />
        </Container>
    );
}

export default AboutPage;
