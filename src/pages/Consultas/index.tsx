import styles from './Consultas.module.css'
import LayoutUsuario from '@/app/components/LayoutUsuario';
import ListaConsulta from '@/app/components/ListaConsulta';

export default function Consultas() {
  const nomeUsuario = "Fulano";

  const Consultas = [
    {profissional: 'Dr. Carlos', data:'01 de Setembro, 2024', local:'Hospital regional', descricao: 'Sintomas de gripe, mas sem diagnostico de COVID'},
    {profissional: 'Dr. Carlos', data:'01 de Setembro, 2024', local:'Hospital regional', descricao: 'Sintomas de gripe, mas sem diagnostico de COVID'},
    {profissional: 'Dr. Carlos', data:'01 de Setembro, 2024', local:'Hospital regional', descricao: 'Sintomas de gripe, mas sem diagnostico de COVID'},
    {profissional: 'Dr. Carlos', data:'01 de Setembro, 2024', local:'Hospital regional', descricao: 'Sintomas de gripe, mas sem diagnostico de COVID'},
    {profissional: 'Dr. Carlos', data:'01 de Setembro, 2024', local:'Hospital regional', descricao: 'Sintomas de gripe, mas sem diagnostico de COVID'},
    {profissional: 'Dr. Carlos', data:'01 de Setembro, 2024', local:'Hospital regional', descricao: 'Sintomas de gripe, mas sem diagnostico de COVID'},
    {profissional: 'Dr. Carlos', data:'01 de Setembro, 2024', local:'Hospital regional', descricao: 'Sintomas de gripe, mas sem diagnostico de COVID'},
    
  ]
  return (
    <div className={styles.container}>
        <LayoutUsuario nomeUsuario={nomeUsuario} ></LayoutUsuario>
        <h1>Consultas</h1>
        <div className={styles.listContainer}>
            {Consultas.map((consultas, index) => (
            <ListaConsulta
                key={index}
                profissional={consultas.profissional}
                data={consultas.data}
                local={consultas.local}
                descricao={consultas.descricao}
            />
            ))}
        </div>
    </div>
  );
}