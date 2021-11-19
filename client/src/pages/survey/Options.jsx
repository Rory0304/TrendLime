import PropTypes from 'prop-types';

function Options({ options }) {
    return (
        <>
            {options.map((contents) => (
                <li>{contents.label}</li>
            ))}
        </>
    );
}

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Options;
