import React from 'react';
import { css, jsx } from '@emotion/react';

import ContentBlock from '../../components/ContentBlock/index';
import ChartBox from '../../components/ChartBox/index';
import ChartGraph from '../../components/ChartGraph/index';

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

    return (
        <div css={Section3Wrapper}>
            <ContentBlock type="top" contents={['최신 가요 TOP10 주요 가사']}>
                <div css={Top10DataWrapper}>
                    {data && <ChartBox songs={data} />}
                    {data && <ChartGraph songs={'최신 가요 표현 분석'} />}
                </div>
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
