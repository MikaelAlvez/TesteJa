import styles from './BoxTeste.module.css';

export default function BoxTeste() {
  
  return (
    <div className={styles.formContainer}>
      <form>
        <div className={styles.formgrid}>
          <div className={styles.formGridRow}>
            <div className={styles.formItem}>
              <label htmlFor="cidade">Município</label>
              <select name="cidade" id="cidade" defaultValue="">
                <option value="" disabled>Selecione a cidade</option>
                <option value="angicos">Angicos</option>
                <option value="apodi">Apodi</option>
                <option value="areia_branca">Areia Branca</option>
                <option value="assu">Assú</option>
                <option value="canguaretama">Canguaretama</option>
                <option value="caico">Caicó</option>
                <option value="currais_novos">Currais Novos</option>
                <option value="mossoro">Mossoró</option>
                <option value="natal">Natal</option>
                <option value="parnamirim">Parnamirim</option>
                <option value="santa_cruz">Santa Cruz</option>
              </select>
            </div>
            <div className={styles.formItem}>
              <label htmlFor="lote">Local</label>
              <input 
                id="lote"
                type="text" 
                placeholder="Selecione o local"
                required
                className={styles.inputLote}
              />
            </div>
          </div>
          <div className={styles.formGridRow}>
            <div className={styles.formItem}>
              <label htmlFor="data">Data</label>
              <input 
                id="data"
                type="date" 
                required
                className={styles.inputData}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
