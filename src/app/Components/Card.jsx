import React from 'react';

function Card(props){
    return <div>
        <h3>{props.nome}</h3>
        <p>{props.email}</p>
        <p>{props.fone}</p>
        <p>{props.id}</p>
      </div>
}

export default Card;