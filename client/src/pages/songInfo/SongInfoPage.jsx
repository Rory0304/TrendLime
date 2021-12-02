import React, { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { css, jsx } from '@emotion/react';
import { Styled } from './styles';

import tempData from './tempData';

const queryClient = new QueryClient();

function SongInfoPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <SongInfoContents />
        </QueryClientProvider>
    );
}

function SongInfoContents() {
    const [lyricsOpen, setLyricscOpen] = useState(false);

    const {
        isLoading,
        data: album,
        error,
    } = useQuery('categoryData', () => fetch('').then((res) => tempData));

    if (isLoading) return <div>'Loading...'</div>;

    if (error) return <div>'Error'</div>;

    const slitedLyrics = album.lyrics.split('  ');

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
                    </Styled.Topic>
                </Styled.UpperInfo>
                <Styled.BottomInfo>
                    <h3>가사의 표현과 유사한 곡</h3>
                    <div>
                        <ul>
                            <li>유사곡1</li>
                            <li>유사곡2</li>
                            <li>유사곡3</li>
                            <li>유사곡4</li>
                        </ul>
                    </div>
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
