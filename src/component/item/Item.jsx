import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ text, isDone }) => {
    return (
        <div>
            <label>{text}</label>
        </div>
    );
};

Item.propTypes = {
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
};

export default Item;
