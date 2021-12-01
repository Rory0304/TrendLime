import React from 'react';
import { css, jsx } from '@emotion/react';

import ContentBlock from '../../components/ContentBlock/index';
import ChartBox from '../../components/ChartBox/index';
import ChartGraph from '../../components/ChartGraph/index';
import Slider from '../../components/Slider/index';
import TFChart from '../../components/TFChart/index';

function Section3() {
    const data = [
        {
            index: 1,
            song_id: 481199,
            artist: '이효리',
            song_name: '10 Minutes',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            index: 2,
            song_id: 481199,
            artist: '미나',
            song_name: "Look (feat. Ak'sent) (Radio Edit)",
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80284/8028436.jpg?version=20170926013258.0,',
        },
        {
            index: 3,
            song_id: 481199,
            artist: '유니',
            song_name: 'Call Call Call',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            index: 4,
            song_id: 80045409,
            artist: '아이비(IVY)',
            song_name: '유혹의 소나타 (Sampling Fur Elise, L.van Beethoven)',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80035/8003506.jpg?version=20190223184047.0',
        },
        {
            index: 5,
            song_id: 481199,
            artist: '이효리',
            song_name: '10 Minutes',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            index: 6,
            song_id: 481199,
            artist: '미나',
            song_name: "Look (feat. Ak'sent) (Radio Edit)",
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80284/8028436.jpg?version=20170926013258.0,',
        },
        {
            index: 7,
            song_id: 481199,
            artist: '유니',
            song_name: 'Call Call Call',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            index: 8,
            song_id: 80045409,
            artist: '아이비(IVY)',
            song_name: '유혹의 소나타 (Sampling Fur Elise, L.van Beethoven)',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80035/8003506.jpg?version=20190223184047.0',
        },
        {
            index: 9,
            song_id: 481199,
            artist: '이효리',
            song_name: '10 Minutes',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            index: 10,
            song_id: 481199,
            artist: '미나',
            song_name: "Look (feat. Ak'sent) (Radio Edit)",
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80284/8028436.jpg?version=20170926013258.0,',
        },
    ];

    const settings = {
        total_page: 2,
        unit_slides: 5,
    };

    const tfResult = [
        {
            word: '사랑',
            count: 1000,
        },
        {
            word: '사랑',
            count: 900,
        },
        {
            word: '사랑',
            count: 800,
        },
        {
            word: '사랑',
            count: 700,
        },
        {
            word: '사랑',
            count: 600,
        },
        {
            word: '사랑',
            count: 500,
        },
        {
            word: '사랑',
            count: 400,
        },
        {
            word: '사랑',
            count: 300,
        },
        {
            word: '사랑',
            count: 200,
        },
        {
            word: '사랑',
            count: 100,
        },
    ];

    return (
        <div css={Section3Wrapper}>
            <ContentBlock
                type="top"
                contents={['TOP 10 최신 가요에서 많이 사용하고 있는 표현을 살펴보세요!']}
            >
                <Slider settings={settings} slideList={data} />
                <TFChart tfResult={tfResult} />
            </ContentBlock>
        </div>
    );
}

const Section3Wrapper = css`
    padding: 8rem 2rem;
`;

const Top10DataWrapper = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export default Section3;
