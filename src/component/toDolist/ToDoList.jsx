import Item from "../item/Item";
import HeaderToDoList from "../headerToDo/HeaderToDo";
import { useState } from "react";



function ToDoList() {

    const [list, setList] = useState([]);
    const [itemText, setItemText] = useState('');

    const addItem = () => {
        const newItem = <Item text={itemText} isDone={false} />;
        setList([...list, newItem]);
    };

    const handleInputChange = (event) => {
        setItemText(event.target.value);
    };

    return (
        <>
            <HeaderToDoList itemText={itemText} handleInputChange={handleInputChange} addItem={addItem} />
            <ul className="list">
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}



export default ToDoList;
