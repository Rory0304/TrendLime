import React, { useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './styles';

import route from '../../routers/routeConstants';

function AlbumSlideItem({ index, item, rankShown = false }) {
    useEffect(() => {
        console.log('Item rendering...');
    });

    return (
        <Styled.Slide>
            <Link to={`${route.DETAIL}/${item ? item.song_id : ''}`}>
                {rankShown && (
                    <Styled.Rank>
                        <span>{index + 1}.</span>
                    </Styled.Rank>
                )}
                <Styled.AlbumCover>
                    <img src={item.cover_url} alt={item.song_name} loading="lazy" />
                </Styled.AlbumCover>
                <Styled.SongInfo>
                    <p>{item.song_name}</p>
                    <p>{item.artist}</p>
                </Styled.SongInfo>
            </Link>
        </Styled.Slide>
    );
}

export default memo(AlbumSlideItem);
