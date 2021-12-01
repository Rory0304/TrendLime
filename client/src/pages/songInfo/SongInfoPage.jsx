import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { Styled } from './styles';

function SongInfoPage() {
    const [lyricsOpen, setLyricscOpen] = useState(false);

    const album = {
        song_id: 481199,
        artist: '아이유',
        song_name: '스트로베리문',
        cover_url:
            'https://image.bugsm.co.kr/album/images/original/40662/4066238.jpg?version=undefined',
        lyrics: "너와 난 Never Ending Story  부를게 이 Melody  이 노랠 들어줘 손 놓지 말아 줘  You and I Happy Ending  들려줘 네 멜로디  이 노랜 영원히  어젯밤 잠들기 전 따뜻한 온기와  너와 나눈 이야기들이 내 곁을 맴돌아  Like We're in Neverland  우리 노래가 영원히 끝나지 않았으면  어둠을 헤맬 때에도  이 세상이 너를 아프게 한다고 해도  내가 곁에 있을게 따스한 햇살처럼  우리 서로를 비춰줬으면 해  너와 난 Never Ending Story  부를게 이 Melody  이 노랠 들어줘 손 놓지 말아 줘  You and I Happy Ending  들려줘 네 Melody  이 노랜 영원히  어쩌면 당연할지도  모두들 새로운 사람을 만나고  헤어짐을 반복해 내가 이상한 걸까  우린 서로의 마지막 같은데  너와 난 Never Ending Story  부를게 이 Melody  이 노랠 들어줘 손 놓지 말아 줘  You and I Happy Ending  들려줘 네 Melody  이 노랜 영원히  너와 난 Never Ending Story  부를게 이 Melody  이 노랠 들어줘 손 놓지 말아 줘  You and I Happy Ending  들려줘 네 Melody  이 노랜 영원히",
    };

    const slitedLyrics = album.lyrics.split('  ');
    return (
        <div>
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
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    opacity: 0.3;
    transform: scale(1.1);
`;

export default SongInfoPage;
