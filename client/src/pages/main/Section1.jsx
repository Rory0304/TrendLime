import React from 'react';
import { css, jsx } from '@emotion/react';

import route from '../../routers/routeConstants';
import Banner from '../../components/Banner/index';
import WaveBackground from '../../assets/layered-waves-haikei.svg';

function Section1() {
    return (
        <div css={BannerWrrapper({ WaveBackground })}>
            <Banner
                title="트렌드 라임,"
                subtitle="가사 트렌드를 분석해드립니다."
                button={{ text: '서비스 소개', link: route.SEARCH }}
            />
        </div>
    );
}

const BannerWrrapper = (props) => css`
    background-image: url(${props.WaveBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-size: cover;
    background-position-y: bottom;
    height: 540px;
`;

export default Section1;
