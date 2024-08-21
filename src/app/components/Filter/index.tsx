import styles from './Filter.module.css';
import Button from '@/app/components/Button';

export default function Filter() {
  return (
    <div className={styles.filterContainer}>
      <select id="monthStart" className={styles.select} defaultValue="">
        <option value="" disabled>Mês inicial</option>
        <option value="01">Janeiro</option>
        <option value="02">Fevereiro</option>
        <option value="03">Março</option>
        <option value="04">Abril</option>
        <option value="05">Maio</option>
        <option value="06">Junho</option>
        <option value="07">Julho</option>
        <option value="08">Agosto</option>
        <option value="09">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
        <option value="12">Dezembro</option>
      </select>

      <select id="monthEnd" className={styles.select} defaultValue="">
        <option value="" disabled>Mês final</option>
        <option value="01">Janeiro</option>
        <option value="02">Fevereiro</option>
        <option value="03">Março</option>
        <option value="04">Abril</option>
        <option value="05">Maio</option>
        <option value="06">Junho</option>
        <option value="07">Julho</option>
        <option value="08">Agosto</option>
        <option value="09">Setembro</option>
        <option value="10">Outubro</option>
        <option value="11">Novembro</option>
        <option value="12">Dezembro</option>
      </select>

      <input 
        type="number" 
        id="year" 
        className={styles.input} 
        min="2019" 
        max="2024" 
        placeholder="Ano" 
      />
      
      <Button>Filtrar</Button>
    </div>
  );
}
