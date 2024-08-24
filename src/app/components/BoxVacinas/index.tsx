import styles from './BoxVacinas.module.css';

export default function BoxVacinas() {
  
  return (
        <div className={styles.formContainer}>
            <form>
                <div className={styles.formgrid}>
                    <div className={styles.formGrid1}>
                        <div className={styles.formItem}>
                            <label htmlFor="dose">Dose</label>
                            <select id='dose' className={styles.select} defaultValue="">
                              <option value="" disabled>Dose a ser tomada</option>
                              <option value="1">1ª dose</option>
                              <option value="2">2ª dose</option>
                              <option value="3">3ª dose</option>
                              <option value="4">1º Reforço</option>
                              <option value="5">2º Reforço</option>
                            </select> 
                        </div>
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
                    </div>
                    <div className={styles.formGrid2}>
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
