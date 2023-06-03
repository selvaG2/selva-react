import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';


function App() {
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

  const [newItem, setNewItem] = useState('');

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = [...items,addNewItem]
    setItem(listItems)
    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log("submitted");
    addItem(newItem)
    setNewItem('');
  }
  return (
    <div className="App">
      <Header title="Selva" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
