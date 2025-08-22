import React, { useState } from 'react';

function Contador() {
  const [conteo, setConteo] = useState(0);
  const incrementar = () => {
    setConteo(conteo + 1);
  };
  const decrementar = () => {
    setConteo(conteo - 1);
  };
  const reiniciar = () => {
    setConteo(0);
  };
  return (
    <div >
      <h2>Contador Interactivo</h2>
      <p style={{ fontSize: "24px" }}>{conteo}</p>
      
      <div className="botones" >
        <button onClick={incrementar}>Incrementar (+)</button>
        <button onClick={decrementar}>Decrementar (-)</button>
        <button onClick={reiniciar}>Reiniciar (0)</button>
      </div>
    </div>
  );
}

export default Contador;