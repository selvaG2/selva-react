import React from 'react';
import ItemsList from './ItemsList';


const Content = ({ items, handleDelete, handleCheck }) => {

    return (

        <main>
            {items.length ? (
                <ItemsList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p className='emptylist'>Your list is empty  </p>
            )}
        </main>
    )
}

export default Content