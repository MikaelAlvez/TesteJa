import React from 'react';
import { FaCheck, FaTimes, FaRedo } from 'react-icons/fa'; 
import styles from './ListaAgendamentoUsuario.module.css';

export default function ListaAgendamentoUsuario({ local, obs, status, data }) {

  const getStatusClass = (status) => {
    switch (status) {
      case 'Confirmado':
        return styles.statusConfirmado;
      case 'Cancelado':
      case 'Atraso':
        return styles.statusCancelado;
      case 'Pendente':
        return styles.statusPendente;
      default:
        return '';
    }
  };

  return (
    <div className={styles.listaContainer}>
      <div className={styles.info}>
        <span className={styles.field}>{local}</span>
        <span className={styles.field}>{obs}</span>
        <span className={`${styles.field} ${getStatusClass(status)}`}>{status}</span>
        <span className={styles.field}>{data}</span>
      </div>
      {status !== 'Confirmado' && (
        <div className={styles.actions}>
          <button className={styles.actionButtonCancelar}><FaTimes />Cancelar</button>
          <button className={styles.actionButtonReagendar}><FaRedo />Reagendar</button>
        </div>
      )}
    </div>
  );
}
