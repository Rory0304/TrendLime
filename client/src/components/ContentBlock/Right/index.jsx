import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import { Styled } from '../styles';

const RightContentBlock = ({ title, content, button, src }) => {
    return (
        <Styled.ContentSection>
            <Styled.Row top={false}>
                <Fade direction="right">
                    <Styled.ContentWrapper>
                        <div>
                            <Styled.Title>{title}</Styled.Title>
                            <Styled.Content>{content}</Styled.Content>
                        </div>
                        <div>
                            {button && (
                                <Link to={button.link}>
                                    <Styled.Button>{button.text}</Styled.Button>
                                </Link>
                            )}
                        </div>
                    </Styled.ContentWrapper>

                    <div>
                        {src && (
                            <Styled.ContentWrapper>
                                <img src="#" alt="이미지 영역" />
                            </Styled.ContentWrapper>
                        )}
                    </div>
                </Fade>
            </Styled.Row>
        </Styled.ContentSection>
    );
};

RightContentBlock.prototype = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    button: PropTypes.object,
    src: PropTypes.string,
};

export default RightContentBlock;