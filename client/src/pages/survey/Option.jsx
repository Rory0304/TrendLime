import PropTypes from 'prop-types';

function Option({ options }) {
    console.log(options);
    return (
        <>
            {options.map((contents) => (
                <li>{contents}</li>
            ))}
        </>
    );
}

Option.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Option;
