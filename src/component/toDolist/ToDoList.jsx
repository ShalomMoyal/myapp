import React, { useState } from 'react';
import HeaderToDoList from '../headerToDo/HeaderToDo';
import Item from '../item/Item';

const ToDoList = () => {
    const [list, setList] = useState([]);

    const addItem = (text) => {
        const newItem = { text: text, isDone: false };
        setList([...list, newItem]);
    };

    return (
        <div>
            <HeaderToDoList addItem={addItem} />
            <ul className="list">
                {list.map((item, index) => (
                    <li key={index}>
                        <Item text={item.text} isDone={item.isDone} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
