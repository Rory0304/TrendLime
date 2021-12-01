import React from 'react';
import { Styled } from './styles';

function ChartBox({ songs }) {
    const columns = [
        {
            title: 'No',
            dataIndex: 'index',
            key: 'no',
        },
        {
            title: '곡 정보',
            dataIndex: 'song_name',
            key: 'song_name',
        },
        {
            title: '앨범',
            dataIndex: 'song_name',
            key: 'album',
        },
    ];

    return (
        <Styled.ChartBoxWrapper>
            <table>
                <caption className="visually-hidden">
                    이 표는 TOP10 곡 리스트로 순위, 곡 정보, 앨범 내용을 포함하고 있습니다.
                </caption>
                <colgroup>
                    <col />
                    <col span={3} />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th scope="col">{col.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song) => (
                        <Styled.ChartBoxRow>
                            <td>{song.index}</td>
                            <td>
                                <Styled.AlbumImage>
                                    <img src={song.cover_url} alt={song.song_name} />
                                </Styled.AlbumImage>
                            </td>
                            <td>
                                <Styled.SongInfo>
                                    <p>{song.song_name}</p>
                                    <span>{song.artist}</span>
                                </Styled.SongInfo>
                            </td>
                            <td>
                                <Styled.SongInfo>
                                    <p>{song.song_name}</p>
                                </Styled.SongInfo>
                            </td>
                        </Styled.ChartBoxRow>
                    ))}
                </tbody>
            </table>
        </Styled.ChartBoxWrapper>
    );
}

export default ChartBox;
