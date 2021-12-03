import React from 'react';
import { Styled } from './styles';
function SearchContents() {
    return (
        <div>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>가사 속 표현 분석</Styled.SubTitle>
                <Styled.SubContentArea>
                    <div>워드 클라우드</div>
                    <div>주요 표현/단어</div>
                </Styled.SubContentArea>
            </Styled.SubContentsWrapper>
            <Styled.SubContentsWrapper>
                <Styled.SubTitle>대표곡</Styled.SubTitle>
                <Styled.AblumList>
                    <li>대표곡1</li>
                    <li>대표곡2</li>
                    <li>대표곡3</li>
                    <li>대표곡4</li>
                    <li>대표곡5</li>
                </Styled.AblumList>
            </Styled.SubContentsWrapper>
        </div>
    );
}

export default SearchContents;
