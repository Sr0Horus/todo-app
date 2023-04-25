import React from "react";
import "../style/TodoList.css"

function TodoList(props) {

    return(
        <section>
            <div>
                {props.loading && <p>Cargando Todos, por favor espere.</p>}
                {props.error &&  <p>Error al Cargar, por favor verifique</p>}
                {(!props.loading && !props.children.length) && <p>No hay Todos para mostrar</p>}
                {console.log(props.loading )}
            </div>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList }