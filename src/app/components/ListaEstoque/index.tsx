import React from 'react';
import styles from './ListaEstoque.module.css';

function ListaEstoque({ nome, fabricante, lote, quantidade, local }) {
  return (
    <div className={styles.box}>
      <div className={styles.info}>
        <div className={styles.item}>
          <strong>Nome:</strong> {nome}
        </div>
        <div className={styles.item}>
          <strong>Fabricante:</strong> {fabricante}
        </div>
        <div className={styles.item}>
          <strong>Lote:</strong> {lote}
        </div>
        <div className={styles.item}>
          <strong>Quantidade:</strong> {quantidade}
        </div>
        <div className={styles.item}>
          <strong>Local:</strong> {local}
        </div>
      </div>
    </div>
  );
}

export default ListaEstoque;
