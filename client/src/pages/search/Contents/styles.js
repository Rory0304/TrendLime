import styled from '@emotion/styled';
export const Styled = {};

Styled.SubContentsWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 5rem;
`;

Styled.SubContentArea = styled.div`
    display: flex;
    margin-top: 5rem;

    div {
        width: 50%;
        height: 200px;
        border: 1px solid black;
    }
`;

Styled.AlbumListCarousel = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
`;

Styled.AblumList = styled.ul`
    display: flex;
    width: 100%;
    scroll-behavior: smooth;
    white-space: nowrap;
    transition: all 0.8s ease-in-out;

    li {
        /* display: inline-block; */
        width: 200px;
        height: 200px;
        border: 1px solid black;
        margin-left: 11px;
    }
`;

Styled.SubTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
`;
