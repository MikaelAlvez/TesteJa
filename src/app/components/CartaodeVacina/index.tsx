import React from 'react';
import styles from './CartaodeVacina.module.css';

export default function CartaodeVacina({ imunologico, lote, unidade, vacinador }) {
  return (
    <div className={styles.cartao}>
      <div className={styles.info}>
        <div className={styles.item}><strong>Imunológico:</strong> {imunologico}</div>
        <div className={styles.item}><strong>Lote:</strong> {lote}</div>
        <div className={styles.item}><strong>Unidade:</strong> {unidade}</div>
        <div className={styles.item}><strong>Vacinador:</strong> {vacinador}</div>
      </div>
    </div>
  );
}
