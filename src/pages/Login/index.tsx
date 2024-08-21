import React from 'react';
import styles from './Login.module.css';
import Button from '@/app/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const router = useRouter();
  const handleLoginRedirect = () => {
    router.push('/HomeServidor');
  };
  
  return (
    <div className={styles.background}>
      <div className={styles.loginContainer}>
        <h2>Seja bem-vindo!</h2>
        <h5 className={styles.iniContainer}>Por favor, insira seus dados.</h5>

        <form>
          <input 
            type="text" 
            placeholder="CPF"
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            required
          />

          <div className={styles.check}>
            <div className={styles.checkbox}>
              <input
              type="checkbox"
              placeholder='Lembre-se de mim'
              ></input>
              <label className={styles.textBlue}>Lembre-se de mim</label>
            </div>
            <label className={styles.textBlue}>Esqueceu a senha?</label>
          </div>

            <Button onClick={handleLoginRedirect}>Log in</Button>

          <h4 className={styles.textConta}>Não tem uma conta? <Link className={styles.textBlue} href={'/Cadastrar'}>Inscreva-se</Link> </h4>
          <h4 className={styles.textConta}>Logar com</h4>
          <FcGoogle size={'3em'} style={{ display: 'block', margin: '10px auto' }}/>
        </form>
      </div>
    </div>
  );
}
