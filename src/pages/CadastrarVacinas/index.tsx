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
                    <label>Nome</label>
                    <input 
                        type="text" 
                        placeholder="Nome"
                        required
                    />
                </div>
                <div>
                    <label>Fabricante</label>
                    <input 
                        type="text" 
                        placeholder="Fabricante"
                        required
                    />
                </div>
                <div className={styles.formRow}>
                    <div>
                        <label>Lote</label>
                        <input 
                            type="text" 
                            placeholder="12345678"
                            required
                            className={styles.inputLote}
                        />
                    </div>
                    <div>
                        <label>Quant.</label>
                        <input 
                            type="number" 
                            placeholder="Quantidade"
                            required
                            min="0"
                            className={styles.inputQuant}
                        />
                    </div>
                </div>
                <div>
                    <label>Data</label>
                    <input 
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
