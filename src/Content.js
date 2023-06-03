import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './Content.css'

const Content = () => {
    const [items, setItem] = useState(
        [
            {
                id: 1,
                checked: true,
                item: "Practice React coding"
            },
            {
                id: 2,
                checked: false,
                item: "Workout"
            },
            {
                id: 3,
                checked: true,
                item: "Play table tennis"
            }

        ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item)
        setItem(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) =>
            item.id !== id)
        setItem(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))


    }
    return (

        <main>
            {items.length ? (
            <ul>
                {items.map(item => (
                    <li className='item' key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleCheck(item.id)}
                        />
                        <label 
                            style={(item.checked) ? {textDecoration: 'line-through'} : null}
                            onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                        <FaTrashAlt
                            role='button'
                            tabIndex="0"
                            onClick={() => handleDelete(item.id)}
                        />
                    </li>
                ))}
            </ul>
            ) : (
                <p className='emptylist'>Your list is empty  </p>
            )}
        </main>
    )
}

export default Content