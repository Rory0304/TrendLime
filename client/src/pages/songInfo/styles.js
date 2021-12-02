import styled from '@emotion/styled';
export const Styled = {};

Styled.SummaryInfo = styled.section`
    background-color: #00000036;
    height: 330px;
    overflow: hidden;
`;

Styled.SummaryInfoWrapper = styled.div`
    height: 330px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    margin-left: 2.5rem;
    padding: 0;
    z-index: 1;
    text-align: center;
    gap: 3rem;

    ${(props) => props.theme.mq.tablet} {
        flex-direction: column;
        width: 100%;
        padding: 2rem 0;
        margin: 0;
        gap: 0;
    }
`;

Styled.AlbumCover = styled.div`
    width: 100%;

    img {
        width: 200px;
        height: 200px;
    }
`;

Styled.SongInfo = styled.div`
    width: 100%;

    h2 {
        font-size: 1.7rem;
        font-weight: bold;
        margin: 1rem 0;
    }

    p {
        font-size: 1.2rem;
        text-align: left;
        ${(props) => props.theme.mq.tablet} {
            text-align: center;
        }
    }
`;

Styled.MainInfo = styled.section`
    background-color: #f9f9f9;
    padding: 3rem 2.5rem;
    box-sizing: border-box;

    h3 {
        font-size: 1.6rem;
        font-weight: bold;
        color: ${(props) => props.theme.primaryColor};
        padding-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
    }

    ${(props) => props.theme.mq.tablet} {
        padding: 2rem 1.2rem;
    }
`;

Styled.UpperInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: flex-start;

    ${(props) => props.theme.mq.tablet} {
        flex-direction: column;
    }
`;

Styled.Lyrics = styled.div`
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
    width: 30%;

    button {
        width: 100%;
        text-align: center;
        border: none;
        background-color: #fff;
        padding-top: 1rem;
        font-size: 1rem;
    }

    ${(props) => props.theme.mq.tablet} {
        width: 100%;
    }
`;

Styled.LyricsWrapper = styled.div`
    p {
        max-height: ${(props) => (props.open ? 'none' : '32rem')};
        -webkit-line-clamp: ${(props) => (props.open ? 'unset' : '21')};
        line-height: 2rem;
        overflow: hidden;
        text-align: center;

        ${(props) => props.theme.mq.tablet} {
            max-height: ${(props) => (props.open ? 'none' : '20rem')};
        }
    }
`;

Styled.Topic = styled.div`
    background-color: #fff;
    width: 62%;
    padding: 1rem;

    div {
        width: 100%;
        height: 300px;
    }

    ${(props) => props.theme.mq.tablet} {
        width: 100%;
    }
`;

Styled.TopicWrodCloud = styled.div``;

Styled.TopicSongs = styled.div``;

Styled.BottomInfo = styled.div``;
