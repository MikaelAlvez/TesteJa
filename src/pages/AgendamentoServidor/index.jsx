import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ptBR } from 'date-fns/locale';
import LayoutServidores from '@/app/components/LayoutServidor';
import Buscar from '@/app/components/Buscar';
import ListaAgendamento from '@/app/components/ListaAgendamento';
import styles from './AgendamentoServidor.module.css';

export default function AgendamentoServidor() {
  const [date, setDate] = useState(new Date());
  const nomeUsuario = "Fulano";
  
  const agendamentos = [
    { nome: 'João Silva', cpf: '123.456.789-00', status: 'Confirmado', data: '01 de Setembro, 2024' },
    { nome: 'Maria Oliveira', cpf: '987.654.321-00', status: 'Pendente', data: '02 de Setembro, 2024' },
    { nome: 'Carlos Pereira', cpf: '456.789.123-00', status: 'Cancelado', data: '03 de Setembro, 2024' },
    { nome: 'João Silva', cpf: '123.456.789-00', status: 'Confirmado', data: '01 de Setembro, 2024' },
    { nome: 'Maria Oliveira', cpf: '987.654.321-00', status: 'Pendente', data: '02 de Setembro, 2024' },
    { nome: 'Carlos Pereira', cpf: '456.789.123-00', status: 'Cancelado', data: '03 de Setembro, 2024' },
    { nome: 'João Silva', cpf: '123.456.789-00', status: 'Confirmado', data: '01 de Setembro, 2024' },
    { nome: 'Maria Oliveira', cpf: '987.654.321-00', status: 'Pendente', data: '02 de Setembro, 2024' },
    { nome: 'Carlos Pereira', cpf: '456.789.123-00', status: 'Cancelado', data: '03 de Setembro, 2024' },
    { nome: 'João Silva', cpf: '123.456.789-00', status: 'Confirmado', data: '01 de Setembro, 2024' },
    { nome: 'Maria Oliveira', cpf: '987.654.321-00', status: 'Pendente', data: '02 de Setembro, 2024' },
    { nome: 'Carlos Pereira', cpf: '456.789.123-00', status: 'Cancelado', data: '03 de Setembro, 2024' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.layoutContainer}>
        <LayoutServidores nomeUsuario={nomeUsuario} />
      </div>
      <div className={styles.buscarContainer}>
        <Buscar />
      </div>
      <div className={styles.calendarContainer}>
        <Calendar
          onChange={setDate}
          value={date}
          locale={ptBR}
          className={styles.calendar}
        />
      </div>
      <div className={styles.list}>
        <div className={styles.spans}>
          <span>Nome</span>
          <span>CPF</span>
          <span>Status</span>
          <span>Data agendada</span>
          <span>Alterar</span>
        </div>
        {agendamentos.map((agendamento, index) => (
          <ListaAgendamento
            key={index}
            nome={agendamento.nome}
            cpf={agendamento.cpf}
            status={agendamento.status}
            data={agendamento.data}
          />
        ))}
      </div>
    </div>
  );
}
