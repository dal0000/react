import PropTypes from 'prop-types';

function Button({text="제출"}){
    return <button>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button;