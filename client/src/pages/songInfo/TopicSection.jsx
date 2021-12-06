import React from 'react';
import { Styled } from './styles';

function TopicSection({ songId }) {
    return (
        <Styled.Topic>
            <Styled.TopicWrodCloud>
                <h3>가사의 주요 토픽</h3>
                <div></div>
            </Styled.TopicWrodCloud>
            <Styled.TopicSongs>
                <h3>‘핵심 단어’에 대한 유사한 곡</h3>
                <div>
                    <ul>
                        <li>유사곡1</li>
                        <li>유사곡2</li>
                        <li>유사곡3</li>
                        <li>유사곡4</li>
                    </ul>
                </div>
            </Styled.TopicSongs>
        </Styled.Topic>
    );
}

export default TopicSection;
