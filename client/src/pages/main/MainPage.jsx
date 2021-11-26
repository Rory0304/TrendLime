import React from 'react';
import { css, jsx } from '@emotion/react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

import route from '../../routers/routeConstants';
import WaveBackground from '../../assets/layered-waves-haikei.svg';
import ContentBlock from '../../components/ContentBlock/index';
import Container from '../../components/Container/index';
import ChartBox from '../../components/ChartBox/index';
import ChartGraph from '../../components/ChartGraph/index';
import ScrollToTop from '../../common/ScrollToTop/index';

const queryClient = new QueryClient();

function MainContents() {
    // const { isLoading, error, data } = useQuery('top10Data', async () => {
    //     const { data } = await axios.get('/api/songs/');
    //     return data.slice(0, 10);
    // });
    const data = [
        {
            song_id: 481199,
            artist: '이효리',
            song_name: '10 Minutes',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            song_id: 481199,
            artist: '미나',
            song_name: "Look (feat. Ak'sent) (Radio Edit)",
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80284/8028436.jpg?version=20170926013258.0,',
        },
        {
            song_id: 481199,
            artist: '유니',
            song_name: 'Call Call Call',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            song_id: 80045409,
            artist: '아이비(IVY)',
            song_name: '유혹의 소나타 (Sampling Fur Elise, L.van Beethoven)',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80035/8003506.jpg?version=20190223184047.0',
        },
        {
            song_id: 481199,
            artist: '이효리',
            song_name: '10 Minutes',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            song_id: 481199,
            artist: '미나',
            song_name: "Look (feat. Ak'sent) (Radio Edit)",
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80284/8028436.jpg?version=20170926013258.0,',
        },
        {
            song_id: 481199,
            artist: '유니',
            song_name: 'Call Call Call',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            song_id: 80045409,
            artist: '아이비(IVY)',
            song_name: '유혹의 소나타 (Sampling Fur Elise, L.van Beethoven)',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80035/8003506.jpg?version=20190223184047.0',
        },
        {
            song_id: 481199,
            artist: '이효리',
            song_name: '10 Minutes',
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/324/32463.jpg?version=20210421040232.0',
        },
        {
            song_id: 481199,
            artist: '미나',
            song_name: "Look (feat. Ak'sent) (Radio Edit)",
            cover_url:
                'https://image.bugsm.co.kr/album/images/200/80284/8028436.jpg?version=20170926013258.0,',
        },
    ];

    return (
        <Container>
            <ScrollToTop />
            <div css={BannerWrrapper({ WaveBackground })}>
                <ContentBlock
                    type="right"
                    title="가사 트렌드,"
                    content="가사 트렌드를 분석해드립니다."
                    button={{ text: '서비스 소개', link: route.SEARCH }}
                />
            </div>
            <div css={IntroWrrapper}>
                <ContentBlock
                    type="top"
                    content="최신 국내 가요부터 테마별, 년도별 가요까지, 
모든 가사의 트렌드를 분석해드려요."
                />
            </div>
            <div css={IntroWrrapper}>
                <ContentBlock type="top" content="최신 가요 TOP10 주요 가사">
                    {/* {isLoading ? (
                        <div>loading...</div>
                    ) : (
                        <div>
                            {data && <ChartBox songs={data} />}
                            {data && <div>최신 가요 데이터 분석</div>}
                        </div>
                    )} */}

                    <div css={Top10DataWrapper}>
                        {data && <ChartBox songs={data} />}
                        {data && <ChartGraph songs={'최신 가요 데이터 분석'} />}
                    </div>
                </ContentBlock>
            </div>
        </Container>
    );
}

function MainPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <MainContents />
        </QueryClientProvider>
    );
}

const BannerWrrapper = (props) => css`
    background-image: url(${props.WaveBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-size: cover;
    background-position-y: bottom;
    padding: 3rem 5rem 3rem 3rem;
`;

const IntroWrrapper = css`
    padding: 8rem 3rem 2rem 3rem;
    margin: 0 auto;
    font-size: 1.3rem;
    text-align: center;
`;

const Top10DataWrapper = css`
    display: flex;
    justify-content: space-between;
`;
export default MainPage;
