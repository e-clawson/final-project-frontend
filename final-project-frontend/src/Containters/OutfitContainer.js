import { useState, useEffect } from "react"
// import OutfitList from "..js"


const OutfitContainer = () => {
    const [outfits, setOutfits] = useState([]);

    useEffect(() => {
        fetch("/api/v1/outfits")
        .then(r => r.json())
        .then(data => setOutfits(data.data.map(p => p.attributes)))
        .catch(err => alert(err))  
    }, []);

  return (
    <>
        <h2>Outfits</h2>
        <OutfitList outfits={outfits} />
    </>

  )
}

export default OutfitContainer;