import React, { useState, useEffect } from "react";
import "./card.css";
const Card = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const buscador = () => {
    console.log(inputValue);
    useEffect(() => {
      fetch(
        "https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda={GD31}&NumeroPagina=1&Traduccion={}"
      )
        .then((response) => response.json())
        .then((responseData) => {
          setData(responseData.Response);
          console.log(responseData.Response);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }, []);

    console.log(data);
  };

  useEffect(() => {
    fetch(
      "https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda={Cadena%20o%20texto%20en%20espa%C3%B1o}&NumeroPagina=1&Traduccion={Cadena%20o%20texto%20en%20ingles}"
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.Response);
        console.log(responseData.Response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  console.log(data);

  const fetchData = () => {
    fetch(
      `https://guatemaladigital.com:85/api/Busqueda?CadenaBusqueda=${inputValue}&NumeroPagina=1&Traduccion={}`
    )
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.Response || []);
        console.log(responseData.Response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Ingrese el código del producto"
        />
        <button type="button" onClick={fetchData}>
          Buscar
        </button>
      </form>

      <div className="cards">
        {data[0]?.Articulos?.map((item) => (
          <div className="card" key={item.CodigoProducto}>
            <img src={item.Foto} className="card-img-top" alt="Product" />
            <h3 className="card-title">Precio: {item.Precio}</h3>
            <h3 className="card-title">Codigo: {item.CodigoAmazon}</h3>
            <p className="card-description">
              <span>Descripcion:</span> {item.Descripcion}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
