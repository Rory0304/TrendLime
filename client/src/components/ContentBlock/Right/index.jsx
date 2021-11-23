import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Styled } from '../styles';

const RightContentBlock = ({ title, content, button }) => {
    return (
        <Styled.ContentSection>
            <Styled.Row>
                <Fade direction="right">
                    <Styled.ContentWrapper>
                        <h3>{title}</h3>
                        <Styled.Content>{content}</Styled.Content>
                        <div>
                            {button && (
                                <Link to={button.link}>
                                    <Styled.Button>{button.text}</Styled.Button>
                                </Link>
                            )}
                        </div>
                    </Styled.ContentWrapper>

                    <Styled.ContentWrapper>
                        <img src="#" alt="이미지 영역" />
                    </Styled.ContentWrapper>
                </Fade>
            </Styled.Row>
        </Styled.ContentSection>
    );
};

RightContentBlock.prototype = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    button: PropTypes.object,
};

export default RightContentBlock;
