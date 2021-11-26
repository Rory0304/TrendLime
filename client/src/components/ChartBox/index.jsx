import React from 'react';
import { Styled } from './styles';

function ChartBox({ songs }) {
    return (
        <Styled.ChartBoxWrapper>
            <ul>
                {songs.map((song) => (
                    <Styled.ChartBoxRow>
                        <Styled.AlbumImage>
                            <img src={song.cover_url} alt={song.song_name} />
                        </Styled.AlbumImage>
                        <div>
                            <p>{song.song_name}</p>
                            <p>{song.artist}</p>
                        </div>
                    </Styled.ChartBoxRow>
                ))}
            </ul>
        </Styled.ChartBoxWrapper>
    );
}

export default ChartBox;
