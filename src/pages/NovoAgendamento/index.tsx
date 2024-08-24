import { useState } from 'react';
import LayoutUsuario from '@/app/components/LayoutUsuario';
import styles from './NovoAgendamento.module.css';
import Button from '@/app/components/Button';
import { FaCalendarAlt } from "react-icons/fa";
import BoxVacinas from '@/app/components/BoxVacinas';
import BoxTeste from '@/app/components/BoxTeste';
import BoxConsulta from '@/app/components/BoxConsulta';

export default function NovoAgendamento() {
  const nomeUsuario = "Fulano";
  
  const [agendar, setAgendar] = useState('');

  const handleAgendarChange = (e) => {
    setAgendar(e.target.value);
  };

  return (
    <div className={styles.container}>
        <LayoutUsuario nomeUsuario={nomeUsuario}></LayoutUsuario>
        <h1>Agendar</h1>
        <div className={styles.formContainer}>
            <form>
                <div className={styles.formItem}>
                    <select 
                      id='agendar' 
                      className={styles.select} 
                      value={agendar} 
                      onChange={handleAgendarChange}
                    >
                        <option value="" disabled>Selecione uma opção</option>
                        <option value="vacina">Vacinação</option>
                        <option value="teste">Teste de COVID</option>
                        <option value="consulta">Consulta médica</option>
                    </select> 
                </div>

                <div className={styles.Box}>
                  {agendar === 'vacina' && <BoxVacinas />}
                  {agendar === 'teste' && <BoxTeste />}
                  {agendar === 'consulta' && <BoxConsulta />}
                </div>
            </form>
            <Button>
              <FaCalendarAlt />
              Agendar
            </Button>
        </div>
    </div>
  );
}
