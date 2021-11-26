import { Fade } from 'react-awesome-reveal';
import { Styled } from '../styles';

const TopContentBlock = ({ content, children }) => {
    return (
        <Styled.ContentSection>
            <Styled.Row top={true}>
                <Fade direction="top">
                    <Styled.ContentWrapper>
                        <Styled.Content>{content}</Styled.Content>
                        {children}
                    </Styled.ContentWrapper>
                </Fade>
            </Styled.Row>
        </Styled.ContentSection>
    );
};

export default TopContentBlock;
