import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import LayoutUsuario from '@/app/components/LayoutUsuario';
import Buscar from '@/app/components/Buscar';
import styles from './AgendamentosUsuarios.module.css';
import ListaAgendamentoUsuario from '@/app/components/ListaAgendamentoUsuario';

export default function AgendamentoServidor() {
  const nomeUsuario = "Fulano";
  
  const agendamentos = [
    { local: 'UBS II - Liberdade', obs: '1ª dose - Vacina', status: 'Confirmado', data: '01 de Setembro, 2024' },
    { local: 'Secretária de saúde', obs: 'Teste de covid', status: 'Pendente', data: '02 de Setembro, 2024' },
    { local: 'UBS II - Liberdade', obs: '2ª dose - vacina', status: 'Atrasado', data: '03 de Setembro, 2024' },
    { local: 'Secretária de saúde', obs: 'Consulta', status: 'Confirmado', data: '01 de Setembro, 2024' },
    { local: 'Secretária de saúde', obs: 'Teste de covid', status: 'Cancelado', data: '03 de Setembro, 2024' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.layoutContainer}>
        <LayoutUsuario nomeUsuario={nomeUsuario} />
      </div>
      <div className={styles.buscarContainer}>
        <Buscar />
      </div>
      <div className={styles.list}>
        <div className={styles.spans}>
          <span>Local</span>
          <span>Observação</span>
          <span>Status</span>
          <span>Data agendada</span>
          <span>Alterar</span>
        </div>
        {agendamentos.map((agendamentos, index) => ( 
        <ListaAgendamentoUsuario
            key={index}
            local={agendamentos.local}
            obs={agendamentos.obs}
            status={agendamentos.status}
            data={agendamentos.data}
            ></ListaAgendamentoUsuario>
        ))}
      </div>
    </div>
  );
}
