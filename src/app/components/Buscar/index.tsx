import styles from './Buscar.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Buscar() {
  return (
    <div className={styles.buscarContainer}>
      <input 
        type="text" 
        className={styles.input} 
        placeholder="Pesquisar por nome, CPF ou tipo de vacina" 
      />
      <button className={styles.button}>
        <FaSearch className={styles.icon} />
      </button>
    </div>
  );
}
