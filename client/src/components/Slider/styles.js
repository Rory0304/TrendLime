import styled from '@emotion/styled';

export const Styled = {};

Styled.SliderContainer = styled.div`
    /* max-width: ${(props) => props.items * 190}px; */
    margin: 0 auto;
    overflow: hidden;
    padding: 0 2rem;

    /* @media only screen and (max-width: 768px) {
        max-width: ${(props) => props.items * 160}px;
    } */
`;

Styled.PaginationButtons = styled.div`
    text-align: right;
    margin-bottom: 30px;

    button {
        border: 1px solid gray;
        background-color: #fff;

        span {
            font-size: 1.2rem;
        }
    }
`;

Styled.SliderWrapper = styled.ul`
    width: 100%;
    display: flex;
    gap: 1.3rem;
    transition: all 0.5s ease-in-out;
    transform: ${(props) => `translateX(-${props.slideIdx}00%)`};
`;

Styled.Slide = styled.li`
    box-shadow: -1px 6px 9px 0px #00000036;
    padding: 10px;
    border-radius: 10px;
`;

Styled.Rank = styled.div`
    margin-bottom: 10px;
    color: #00dd00;
    border-radius: 50%;
    font-weight: bold;
    font-size: 1.6rem;
`;

Styled.AlbumCover = styled.div`
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

Styled.SongInfo = styled.div`
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
        font-size: 1.2rem;
        margin-bottom: 5px;
    }

    p:last-of-type {
        color: #0000009e;
    }
`;
