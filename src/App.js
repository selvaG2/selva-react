import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import SearchItem from './SearchItem';
import { useEffect } from 'react';
import apiRequest from './apiRequest';


function App() {
  const API_URl = 'http://localhost:3100/items';

  const [items, setItem] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setfetchError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URl);
        if (!response.ok) throw Error("Data not received")
        const listitems = await response.json();
        console.log(listitems);
        setItem(listitems);
        setfetchError(null)

      } catch (err) {

        setfetchError(err.message);

      } finally {
        setisLoading(false)
      }
    }
    setTimeout(() => {

      (async () => await fetchItems())()
    }, 2000)


  }, [])

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItem(listItems)
    const postOptions = {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URl, postOptions)
    if (result) setfetchError(result)
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItem(listItems)

    const myItem = listItems.filter(item => item.id === id)

    const updateOptions = {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
    body: JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl = `${API_URl}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setfetchError(result)

  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) =>
      item.id !== id)
    setItem(listItems)

    const deleteOptions = {
      method: "DELETE",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(listItems)
    }

    const reqUrl = `${API_URl}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setfetchError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
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
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p> {`Loading items..Stay calm.!`}</p>}
        {fetchError && <p> {`Error : ${fetchError}`}</p>}
        {!isLoading && !isLoading && <Content
          items={items.filter(item => ((item.item)
            .toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>

      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
