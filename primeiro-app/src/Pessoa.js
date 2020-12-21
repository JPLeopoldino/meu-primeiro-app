import React from 'react';
import styles from './Pessoas.module.css';

const pessoa = (props) => {
    return (
        <div className={styles.Pessoa}>
            <label>{props.dados.nome + ': '}</label>
            <span>{props.dados.idade + ' anos'}</span>
            <span>{' (' + props.dados.email + ') '}</span>
        </div>
    );
}

export default pessoa;