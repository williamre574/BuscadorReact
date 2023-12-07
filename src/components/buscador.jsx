import React, {useState, useEffect} from "react"
//import 'bootstrap/dist/css/bootstrap.min.css'
//import Card from "./card";

const Buscador = () => {

    const [inputValue, setInputValue] = useState('');
   

    const handleSubmint = (even) => {
        setInputValue(even)
    }

    return (
        <>
        <div>Buscador</div>
        {/* <form onSubmit={handleSubmint}>
            <input type="text" value={inputValue} onChange={handleSubmint} placeholder="texto" />
            <button type="submit"> enviar </button>
        </form> */}
        
        </>
    )
}

export default Buscador