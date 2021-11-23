import LeftContentBlock from './Left/index';
import RightContentBlock from './Right/index';

function ContentBlock(props) {
    if (props.type === 'left') return <LeftContentBlock {...props} />;
    if (props.type === 'right') return <RightContentBlock {...props} />;
}

export default ContentBlock;
