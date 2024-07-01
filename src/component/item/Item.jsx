import PropTypes from 'prop-types';


const Item = (props) => {

    return(
    <div>
        <label>{props.text}</label>
    </div>
    )
}


Item.propTypes = {
    text: PropTypes.string,
    isDone: PropTypes.bool,
};
export default Item;