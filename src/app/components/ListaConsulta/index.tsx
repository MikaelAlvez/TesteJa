import React from 'react';
import styles from './ListaConsulta.module.css';

function ListaConsulta({ profissional, data, local, descricao}) {
  return (
    <div className={styles.box}>
      <div className={styles.info}>
        <div className={styles.item}>
          <strong>Profissional:</strong> {profissional}
        </div>
        <div className={styles.item}>
          <strong>Atendido em:</strong> {data}
        </div>
        <div className={styles.item}>
          <strong>Local:</strong> {local}
        </div>
        <div className={styles.item}>
          <strong>Descrição médica:</strong> {descricao}
        </div>
      </div>
    </div>
  );
}

export default ListaConsulta;
