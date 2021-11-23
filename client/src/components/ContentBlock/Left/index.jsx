import { Fade } from 'react-awesome-reveal';
import { Styled } from '../styles';

const LeftContentBlock = ({ title, content }) => {
    return (
        <Styled.ContentSection>
            <Styled.Row>
                <Fade direction="left">
                    <Styled.ContentWrapper>
                        <img src="#" alt="이미지 영역" />
                    </Styled.ContentWrapper>

                    <Styled.ContentWrapper>
                        <h3>{title}</h3>
                        <Styled.Content>{content}</Styled.Content>
                    </Styled.ContentWrapper>
                </Fade>
            </Styled.Row>
        </Styled.ContentSection>
    );
};

export default LeftContentBlock;
