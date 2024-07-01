import PropTypes from 'prop-types';

const HeaderToDoList = (props) => {
    return (
        <div>
            <h3>To-Do List:</h3>
            <input type="text" value={props.itemText} onChange={props.handleInputChange} />
            <button onClick={props.addItem}>Add Item</button>
        </div>
    );
};

HeaderToDoList.propTypes = {
    itemText: PropTypes.string,
    handleInputChange: PropTypes.func,
    addItem: PropTypes.func,
};

export default HeaderToDoList;
