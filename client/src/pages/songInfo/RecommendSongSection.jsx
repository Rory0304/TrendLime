import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { featchRecommendSongKey } from '../../utils/api/queryKeys';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';

import { Styled } from './styles';
import Slider from '../../components/Slider/index';

import route from '../../routers/routeConstants';

function RecommendSongSection({ songId }) {
    const { isLoading, error, data } = useQuery(
        [featchRecommendSongKey, { song_id: songId }],
        useQueryFetch,
        {
            initialData: [],
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    );

    const recommendSongs = useMemo(
        () => (data.recommend_songs ? data.recommend_songs : []),
        [data],
    );

    const AlbumSlideItem = ({ songs }) => {
        const items = songs.slice(0, 40).map((item, index) => (
            <Link to={`${route.DETAIL}/${item ? item.song_id : ''}`}>
                <Styled.AlbumCover>
                    <img src={item.cover_url} alt={item.song_name} />
                </Styled.AlbumCover>
                <Styled.SongInfo>
                    <p>{item.song_name}</p>
                    <p>{item.artist}</p>
                </Styled.SongInfo>
            </Link>
        ));
        return items;
    };

    return (
        <Styled.RecommendSong>
            <h3>가사의 표현과 유사한 곡</h3>
            {isLoading ? (
                <div>유사한 곡을 불러오는 중입니다. </div>
            ) : (
                <Slider
                    lastIdx={data.recommendSongs}
                    slideList={AlbumSlideItem({ songs: recommendSongs })}
                />
            )}
        </Styled.RecommendSong>
    );
}

export default React.memo(RecommendSongSection);
