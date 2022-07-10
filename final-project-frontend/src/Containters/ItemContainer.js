import { useState, useEffect } from "react"
// import PromptList from "../components/Prompts/PromptList.js"


const ItemContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/v1/items")
        .then(r => r.json())
        .then(data => setItems(data.data.map(p => p.attributes)))
        .catch(err => alert(err))  
    }, []);

  return (
    <>
        <h2>Prompt List</h2>
        <ItemList items={items} />
    </>

  )
}

export default ItemContainer;