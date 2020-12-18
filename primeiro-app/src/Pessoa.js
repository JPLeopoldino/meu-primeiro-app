import React from 'react';

const pessoa = (props) => {
    return (
        <div>
            <label>{props.nome + ': '}</label>
            <span>{props.nrsorte}</span>
        </div>
    );
}

export default pessoa;