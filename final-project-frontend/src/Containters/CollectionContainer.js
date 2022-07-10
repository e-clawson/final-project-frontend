import { useState, useEffect } from "react"
// import PromptList from "../components/Prompts/PromptList.js"


const CollectionContainer = () => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        fetch("/api/v1/collections")
        .then(r => r.json())
        .then(data => setCollections(data.data.map(p => p.attributes)))
        .catch(err => alert(err))  
    }, []);

  return (
    <>
        <h2>Collections</h2>
        <CollectionList collections={collections} />
    </>

  )
}

export default CollectionContainer;