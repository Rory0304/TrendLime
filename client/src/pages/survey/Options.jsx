import React, { useContext } from 'react';
import PropTypes from 'prop-types';

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
        <>
            {options.map((contents) => (
                <li key={contents.key} onClick={() => onChooseOption(contents.key)}>
                    <label>
                        <input type="checkbox" />
                        {contents.label}
                    </label>
                </li>
            ))}
        </>
    );
}

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Options;
