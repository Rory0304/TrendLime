import PropTypes from 'prop-types';

function Options({ options, onChooseOption }) {
    return (
        <>
            {options.map((contents) => (
                <li key={contents.key} onClick={() => onChooseOption(contents.key)}>
                    {contents.label}
                </li>
            ))}
        </>
    );
}

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChooseOption: PropTypes.func.isRequired,
};

export default Options;
