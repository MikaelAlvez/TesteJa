import React from 'react';
import { FaCheck, FaTimes, FaRedo } from 'react-icons/fa'; 
import styles from './ListaAgendamento.module.css';

export default function ListaAgendamento({ nome, cpf, status, data }) {
  return (
    <div className={styles.listaContainer}>
      <div className={styles.info}>
        <span className={styles.field}>{nome}</span>
        <span className={styles.field}>{cpf}</span>
        <span className={styles.field}>{status}</span>
        <span className={styles.field}>{data}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.actionButtonConfirmar}><FaCheck />Confirmar</button>
        <button className={styles.actionButtonCancelar}><FaTimes />Cancelar</button>
        <button className={styles.actionButtonReagendar}><FaRedo />Reagendar</button>
      </div>
    </div>
  );
}
