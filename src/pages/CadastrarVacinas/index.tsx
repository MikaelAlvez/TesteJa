import LayoutServidores from '@/app/components/LayoutServidor';
import styles from './CadastrarVacinas.module.css'
import Button from '@/app/components/Button';
import { IoIosSave } from "react-icons/io";

export default function CadastrarVacinas() {
  const nomeUsuario = "Fulano";
  
  return (
    <div className={styles.container}>
        <LayoutServidores nomeUsuario={nomeUsuario} />
        <div className={styles.formContainer}>
            <form>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        id="nome"
                        type="text" 
                        placeholder="Nome"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="fab">Fabricante</label>
                    <input 
                        id="fab"
                        type="text" 
                        placeholder="Fabricante"
                        required
                    />
                </div>
                <div className={styles.formRow}>
                    <div>
                        <label htmlFor="lote">Lote</label>
                        <input 
                            id="lote"
                            type="text" 
                            placeholder="12345678"
                            required
                            className={styles.inputLote}
                        />
                    </div>
                    <div>
                        <label htmlFor="quant">Quant.</label>
                        <input 
                            id="quant"
                            type="number" 
                            placeholder="Quantidade"
                            required
                            min="0"
                            className={styles.inputQuant}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="data">Data</label>
                    <input 
                        id="data"
                        type="date" 
                        required
                    />
                </div>
            </form>
            <Button>
                <IoIosSave />
                Salvar
            </Button>
        </div>
    </div>
  );
}
