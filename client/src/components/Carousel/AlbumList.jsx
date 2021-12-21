import React, { memo, useEffect } from 'react';
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Styled } from './styles';

import route from '../../routers/routeConstants';

function AlbumSlideItem({ index, item, rankShown = false }) {
    return (
        <li css={Slide}>
            <Link to={`${route.DETAIL}/${item ? item.song_id : ''}`}>
                {rankShown && (
                    <div css={Rank}>
                        <span>{index + 1}.</span>
                    </div>
                )}
                <div>
                    <img src={item.cover_url} alt={item.song_name} loading="lazy" />
                </div>
                <div css={SongInfo}>
                    <p>{item.song_name}</p>
                    <p>{item.artist}</p>
                </div>
            </Link>
        </li>
    );
}

const Slide = css`
    padding: 10px;
`;

const Rank = css`
    margin-bottom: 10px;
    color: #00dd00;
    border-radius: 50%;
    font-weight: bold;
    font-size: 1.6rem;
`;

Styled.AlbumCover = css`
    width: 160px;
    height: 160px;

    img {
        height: 100%;
        width: 100%;
    }

    @media only screen and (max-width: 768px) {
        width: 135px;
        height: 135px;
    }
`;

const SongInfo = css`
    margin-top: 10px;
    p {
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-wrap: normal;
        overflow: hidden;
        max-width: 9rem;
    }

    p:first-of-type {
        font-size: 1rem;
        margin-bottom: 5px;
    }

    p:last-of-type {
        color: #0000009e;
        font-size: 0.8rem;
    }
`;

export default memo(AlbumSlideItem);
