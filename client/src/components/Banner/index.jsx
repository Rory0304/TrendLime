import Button from '../../common/Button/index';
import { Styled } from './styles';
// import lime from '../../assets/lime.png';

const Banner = ({ title, subtitle, button }) => {
    return (
        <Styled.BannerWrapper>
            <Styled.BannerTitle>
                {title} <br /> {subtitle}
            </Styled.BannerTitle>
            <Button link={button.link} text={button.text} />
        </Styled.BannerWrapper>
    );
};

export default Banner;
