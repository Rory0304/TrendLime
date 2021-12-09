import React, { useMemo } from 'react';
import { Styled } from './styles';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { featchSongTopicKey } from '../../utils/api/queryKeys';
import { useQueryFetch } from '../../utils/hooks/useQueryFetch';

import Wordcloud from '../../components/WordCloud/index';
import route from '../../routers/routeConstants';

function TopicSection({ songId }) {
    const { isFetching, error, data } = useQuery(
        [featchSongTopicKey, { song_id: songId }],
        useQueryFetch,
        {
            initialData: { topic: { label_id: '', label: '', wrods_freq: [], song: [] } },
            refetchOnWindowFocus: false,
            refetchOnmount: false,
            refetchOnReconnect: false,
            retry: false,
        },
    );

    const topicSongs = useMemo(() => data.topic.song, [data.topic.song]);

    return (
        <Styled.Topic>
            <Styled.TopicWordCloud>
                {isFetching ? (
                    <h3>데이터를 불러오고 있습니다.</h3>
                ) : data.topic.label !== null ? (
                    <>
                        <h3>
                            해당 곡은,
                            <br />
                            <span>"{data.topic.label}"</span>
                            <br />과 관련이 있어요!
                        </h3>
                        <Wordcloud data={data.topic.words_freq} fontsize={3} fontValue={2} />
                    </>
                ) : (
                    <>
                        <h3>해당 곡의 토픽 데이터가 존재하지 않습니다.</h3>
                        <Wordcloud data={[{ word: '', freq: '' }]} />
                    </>
                )}
            </Styled.TopicWordCloud>
            <div>
                {isFetching ? (
                    <h3>데이터를 불러오고 있습니다.</h3>
                ) : (
                    <>
                        <h3>관련 플레이리스트</h3>
                        <div>
                            <Styled.TopicSongs>
                                {topicSongs.map((song) => (
                                    <Styled.TopicSongList>
                                        <Link to={`${route.DETAIL}/${song ? song.song_id : ''}`}>
                                            <div>
                                                <img src={song.cover_url} alt={song.song_name} />
                                            </div>
                                            <div>
                                                <p>
                                                    {song.song_name} <span>{song.artist}</span>
                                                </p>
                                            </div>
                                        </Link>
                                    </Styled.TopicSongList>
                                ))}
                            </Styled.TopicSongs>
                        </div>
                    </>
                )}
            </div>
        </Styled.Topic>
    );
}

export default React.memo(TopicSection);
