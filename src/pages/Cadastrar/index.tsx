import styles from './Cadastrar.module.css';
import Button from '@/app/components/Button';
import { useRouter } from 'next/navigation';
import { IoIosSave } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function Login() {
  const router = useRouter();
  const handleLoginRedirect = () => {
    router.push('/Login');
  };

function handleCpfInput(event: React.FormEvent<HTMLInputElement>) {
  const input = event.currentTarget;
  let value = input.value.replace(/\D/g, '');
  if (value.length > 3) {
    value = value.replace(/^(\d{3})(\d)/, '$1.$2');
  }
  if (value.length > 6) {
    value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  }
  if (value.length > 9) {
    value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  }
  input.value = value;
}

  

  return (
    <div className={styles.cadastro}>
        <h1>Cadastrar</h1>
        <div className={styles.dados}>
            <h2>Dados pessoais</h2>
            <form>
                <div>
                  <label htmlFor="nome">Primeiro nome</label>
                  <input 
                  id="nome"
                  type="text" 
                  placeholder="Nome"
                  required
                  />
                </div>
                <div>
                  <label htmlFor="sobrenome">Sobrenome</label>
                  <input 
                  id="sobrenome"
                  type="text" 
                  placeholder="Sobrenome"
                  required
                  />
                </div>
                <div>
                  <label htmlFor="cpf">CPF</label>
                  <input 
                    id="cpf"
                    type="text" 
                    placeholder="000.000.000-00"
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    required
                    onInput={handleCpfInput}
                    maxLength={14}
                  />
                </div>
                <div>
                  <label htmlFor="senha">Senha</label>
                  <input 
                  id="senha"
                  type="password" 
                  placeholder="********"
                  required
                  />
                </div>
            </form>
        </div>
        <div className={styles.buttons}>
          <Button onClick={handleLoginRedirect}>
            <IoIosArrowBack />
            Voltar
          </Button>
          <Button>
            <IoIosSave />
            Salvar
          </Button>
        </div>
    </div>
  );
}
