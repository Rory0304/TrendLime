import styled from '@emotion/styled';

export const Styled = {};

Styled.ChartBoxWrapper = styled.div`
    width: 50%;

    table {
        margin: 0 auto;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

Styled.ChartBoxRow = styled.tr`
    box-shadow: rgb(23 31 114 / 20%) 0px 3px 8px;
    border-radius: 1.2rem;
    td {
        vertical-align: middle;
        font-size: 1rem;
        padding: 0.5rem;
    }
`;

Styled.AlbumImage = styled.div`
    margin-right: 1rem;
    img {
        width: 3rem;
        height: 3rem;
    }
`;

Styled.SongInfoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

Styled.SongInfo = styled.div`
    text-align: left;
    display: inline-block;
    padding-right: 1px;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
    overflow: hidden;
    max-width: 200px;

    p {
        vertical-align: middle;
    }

    span {
        color: #969696;
        font-size: 1rem;
    }
`;
