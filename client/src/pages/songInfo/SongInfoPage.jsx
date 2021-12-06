import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { css, jsx } from '@emotion/react';
import { Styled } from './styles';

import { featchSongInfoKey, featchSongEmotionKey } from '../../utils/api/queryKeys';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';
import tempData from './tempData';

import EmotionSection from './EmotionSection';
import RecommendSongSection from './RecommendSongSection';

const queryClient = new QueryClient();

function SongInfoPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <SongInfoContents />
        </QueryClientProvider>
    );
}

/* TODO: 컴포넌트 분리 필요 */
function SongInfoContents() {
    const { songId } = useParams();

    const [lyricsOpen, setLyricscOpen] = useState(false);

    // const {
    //     isLoading,
    //     error,
    //     data: album,
    // } = useQuery([featchSongInfoKey, { song_id: songId }], useQueryFetch, {
    //     initialData: [],
    //     refetchOnWindowFocus: false,
    //     refetchOnmount: false,
    //     refetchOnReconnect: false,
    //     retry: false,
    // });

    const {
        isLoading,
        data: album,
        error,
    } = useQuery('categoryData', () => fetch('').then((res) => tempData));

    const slitedLyrics = useMemo(() => (album?.lyrics ? album.lyrics.split('  ') : []), [album]);

    if (isLoading) return <div>'Loading...'</div>;

    if (error) return <div>'Error'</div>;

    return (
        <div>
            {isLoading}
            <Styled.SummaryInfo>
                <Styled.SummaryInfoWrapper>
                    <Styled.AlbumCover>
                        <img src={album.cover_url} alt={album.song_name} />
                    </Styled.AlbumCover>
                    <Styled.SongInfo>
                        <h2>{album.song_name}</h2>
                        <p>{album.artist}</p>
                    </Styled.SongInfo>
                </Styled.SummaryInfoWrapper>
                <div css={BackgroundWrapper({ cover_url: album.cover_url })}></div>
            </Styled.SummaryInfo>
            <Styled.MainInfo>
                <Styled.UpperInfo>
                    <Styled.Lyrics>
                        <h3>가사정보</h3>
                        <Styled.LyricsWrapper open={lyricsOpen}>
                            <p>
                                {slitedLyrics.map((sentence) => (
                                    <>
                                        {sentence}
                                        <br />
                                    </>
                                ))}
                            </p>
                        </Styled.LyricsWrapper>
                        <button onClick={() => setLyricscOpen(!lyricsOpen)}>
                            {lyricsOpen ? '접기' : '펼치기'}
                        </button>
                    </Styled.Lyrics>
                    <Styled.Topic>
                        <Styled.TopicWrodCloud>
                            <h3>가사의 주요 토픽</h3>
                            <div></div>
                        </Styled.TopicWrodCloud>
                        <Styled.TopicSongs>
                            <h3>‘핵심 단어’에 대한 유사한 곡</h3>
                            <div>
                                <ul>
                                    <li>유사곡1</li>
                                    <li>유사곡2</li>
                                    <li>유사곡3</li>
                                    <li>유사곡4</li>
                                </ul>
                            </div>
                        </Styled.TopicSongs>
                        <EmotionSection songId={songId} />
                    </Styled.Topic>
                </Styled.UpperInfo>
                <Styled.BottomInfo>
                    <RecommendSongSection songId={songId} />
                </Styled.BottomInfo>
            </Styled.MainInfo>
        </div>
    );
}

const BackgroundWrapper = (props) => css`
    background: url(${props.cover_url});
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(5px);
    opacity: 0.3;
    transform: scale(1.1);
`;

export default SongInfoPage;
