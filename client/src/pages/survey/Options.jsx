import React, { useContext } from 'react';
import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import Checkbox from '../../common/Checkbox/index';
import { SurveyContext } from './Survey';

/*
 * Options 컴포넌트 관심사
 * 1_선택지를 클릭하여 answerSheet를 구성
 */

function Options({ options }) {
    const [answerSheet, currentPage, setAnswerSheet] = useContext(SurveyContext);

    const isChoosed = () => {
        const isChoosed = answerSheet.filter(
            (answer) => answer.categoryKey === currentPage.category,
        );
        return isChoosed.length;
    };

    /* 선택지를 클릭할 때 이벤트 */
    const onChooseOption = (optionKey) => {
        const newChoice = {
            categoryKey: currentPage.category,
            answer: optionKey,
        };

        if (isChoosed() !== 0) {
            const newAnswerSheet = answerSheet.map((answer) =>
                answer.categoryKey === currentPage.category ? newChoice : answer,
            );
            setAnswerSheet(newAnswerSheet);
        } else {
            setAnswerSheet([...answerSheet, newChoice]);
        }
    };

    return (
        <div css={OptionsWrapperStyle}>
            <ul>
                {options.map((contents) => (
                    <li
                        key={`${contents.label}-${contents.key}`}
                        onClick={() => onChooseOption(contents.key)}
                    >
                        <Checkbox>{contents.label}</Checkbox>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const OptionsWrapperStyle = css`
    ul {
        display: flex;
        justify-content: center;
        width: 70%;
        margin: 0 auto;
    }
`;
export default Options;
