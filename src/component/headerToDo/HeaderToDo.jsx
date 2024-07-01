import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HeaderToDoList = ({ addItem }) => {
    const [itemText, setItemText] = useState('');

    const handleInputChange = (event) => {
        setItemText(event.target.value);
    };

    const handleAddItem = () => {
        if (itemText.trim() !== '') {
            addItem(itemText);
            setItemText('');
        }
    };

    return (
        <div>
            <h3>To-Do List:</h3>
            <input type="text" value={itemText} onChange={handleInputChange} />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

HeaderToDoList.propTypes = {
    addItem: PropTypes.func.isRequired,
};

export default HeaderToDoList;
