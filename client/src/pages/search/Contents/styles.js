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

Styled.AblumList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin-top: 5rem;

    li {
        width: 200px;
        height: 200px;
        border: 1px solid black;
    }
`;

Styled.SubTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
`;
