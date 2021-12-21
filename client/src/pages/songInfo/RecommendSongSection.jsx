import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { featchRecommendSongKey } from '../../utils/api/queryKeys';
import queryFetch from '../../utils/api/queryFetch';

import { Styled } from './styles';
import Carousel from '../../components/Carousel/index';

function RecommendSongSection({ songId }) {
    const { isLoading, error, data } = useQuery(
        [featchRecommendSongKey, { song_id: songId }],
        queryFetch,
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

    return (
        <Styled.RecommendSong>
            <h3>가사의 표현과 유사한 곡</h3>
            {isLoading ? (
                <div>유사한 곡을 불러오는 중입니다. </div>
            ) : (
                <Carousel items={recommendSongs} />
            )}
        </Styled.RecommendSong>
    );
}

export default React.memo(RecommendSongSection);
