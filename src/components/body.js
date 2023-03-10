import React from "react";
function Body({ subtitulo, arreglo }) {

    return (
        <div className="componenteBo">
            <h3>{subtitulo}</h3>
            <ol>{arreglo.map((e, index) => <li>{e.nombre}</li>)}</ol>
            <button className="boton" onClick={alerta}>Mensaje sorpresa</button>
        </div>
    )
}
function alerta() {
    alert("Odiame mas!");
}
export default Body;
Body.defaultProps = {
    subtitulo: "Los Top 5 Mejores Jugadores del Club",
    arreglo: [{ id: 1, nombre: "Cuauhtémoc Blanco" },
    { id: 2, nombre: "Carlos Reinoso" },
    { id: 3, nombre: "Héctor Zelada" },
    { id: 4, nombre: "Alfredo Tena" },
    { id: 5, nombre: "Luis Roberto Alves" }]
}

