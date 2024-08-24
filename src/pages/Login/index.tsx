import React, { useState } from 'react';
import styles from './Login.module.css';
import Button from '@/app/components/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";

export default function Login() {
  const router = useRouter();
  
  const usuarios = [
    { cpf: '111.111.111-11', senha: 'senha123', tipo: 'servidor' },
    { cpf: '222.222.222-22', senha: 'senha321', tipo: 'comum' }
  ];

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginRedirect = () => {
    const usuarioEncontrado = usuarios.find(
      user => user.cpf === cpf && user.senha === senha
    );

    if (usuarioEncontrado) {
      if (usuarioEncontrado.tipo === 'servidor') {
        router.push('/HomeServidor');
      } else {
        router.push('/HomeUsuario');
      }
    } else {
      alert('CPF ou senha incorretos.');
    }
  };

  const handleHomeRedirect = () => {
    router.push('/');
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
    setCpf(value);
  }

  return (
    <div className={styles.background}>
      <div className={styles.loginContainer}>
        <TbXboxXFilled className={styles.closeIcon} onClick={handleHomeRedirect}/>
        <h2>Seja bem-vindo!</h2>
        <h5 className={styles.iniContainer}>Por favor, insira seus dados.</h5>

        <form>
          <input 
            type="text" 
            placeholder="CPF"
            pattern="\d{3}.\d{3}.\d{3}-\d{2}"
            required
            onInput={handleCpfInput}
            maxLength={14}
          />
          <input 
            type="password" 
            placeholder="Senha" 
            required
            onChange={(e) => setSenha(e.target.value)}
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

          <h4 className={styles.textConta}>Não tem uma conta? <Link className={styles.textBlue} href={'/Cadastrar'}>Inscreva-se</Link></h4>
          <h4 className={styles.textConta}>Logar com</h4>
          <div className={styles.redes}>
            <FcGoogle size={'3em'}/>
            <FaFacebook size={'3em'} style={{ color: '#3b5998' }}/>
          </div>
        </form>
      </div>
    </div>
  );
}
