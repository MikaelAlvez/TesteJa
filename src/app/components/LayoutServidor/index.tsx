import Link from 'next/link';
import styles from './Layout.module.css';
import { IoHomeSharp } from "react-icons/io5";
import { ImAddressBook } from "react-icons/im";
import { BiSolidInjection } from "react-icons/bi";
import { FaBoxArchive } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { GiConfirmed } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

export default function Layout({nomeUsuario}) {
  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/HomeServidor">
              <IoHomeSharp />
              Home
            </Link>
          </li>
          <li>
            <Link href="/AgendamentoServidor">
              <ImAddressBook />
              Agendamentos
            </Link>
          </li>
          <li>
            <Link href="/CadastrarVacinas">
              <BiSolidInjection />
              Cadastrar Vacinas
            </Link>
          </li>
          <li>
            <Link href="/ConfirmarVacinacoes">
              <GiConfirmed />
              Confirmar Vacinações
            </Link>
          </li>
          <li>
            <Link href="/Estoque">
              <FaBoxArchive />
              Estoque
            </Link>
          </li>
          <li className={styles.welcome}>
            <Link href="">
              <FaUser />
              Seja bem-vindo, {nomeUsuario}
            </Link>
          </li>
          <li>
            <Link href="/">
              <ImExit />
              Deslogar
            </Link>
          </li>
        </ul>
      </nav>
      <main className={styles.content}>
      </main>
    </div>
  );
}

