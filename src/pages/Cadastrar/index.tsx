import styles from './Cadastrar.module.css';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const handleLoginRedirect = () => {
    router.push('/Login');
  };

  return (
    <div className={styles.cadastro}>
        <h1>Cadastrar</h1>
        <div className={styles.dados}>
            <h2>Dados pessoais</h2>
            <form>
                <div>
                  <label>Primeiro nome</label>
                  <input 
                  type="text" 
                  placeholder="Nome"
                  required
                  />
                </div>
                <div>
                  <label>Sobrenome</label>
                  <input 
                  type="text" 
                  placeholder="Sobrenome"
                  required
                  />
                </div>
                <div>
                  <label>CPF</label>
                  <input 
                  type="text" 
                  placeholder="000.000.000-00"
                  required
                  />
                </div>
                <div>
                  <label>Senha</label>
                  <input 
                  type="password" 
                  placeholder="********"
                  required
                  />
                </div>
            </form>
        </div>
        <div className={styles.end}>
            <h2>Endereço</h2>
            <form>
                <div>
                  <label>CEP</label>
                  <input 
                  type="text" 
                  placeholder="00000-000"
                  required
                  />
                </div>
                <div>
                  <label>Rua</label>
                  <input 
                  type="text" 
                  placeholder="Rua A"
                  required
                  />
                </div>
                <div>
                  <label>Nº</label>
                  <input 
                  type="text" 
                  placeholder="000"
                  required
                  />
                </div>
                <div>
                  <label>Bairro</label>
                  <input 
                  type="text" 
                  placeholder="Bairro"
                  required
                  />
                </div>
                <div>
                  <label>Cidade</label>
                  <input 
                  type="text" 
                  placeholder="Cidade"
                  required
                  />
                 </div>
            </form>
        </div>
        <div className={styles.buttons}>
          <Button onClick={handleLoginRedirect}>Voltar</Button>
          <Button>Salvar</Button>
        </div>
    </div>
  );
}
