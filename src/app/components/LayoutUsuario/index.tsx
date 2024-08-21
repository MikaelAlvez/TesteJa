import Link from 'next/link';
import styles from './LayoutUsuario.module.css';
import { IoHomeSharp } from "react-icons/io5";
import { ImAddressBook } from "react-icons/im";
import { BiSolidInjection } from "react-icons/bi";
import { FaCalendarPlus } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { FaUser } from "react-icons/fa";

export default function LayoutUsuario({nomeUsuario}) {
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
            <Link href="/NovoAgendamento">
                <FaCalendarPlus />
                Novo agendamento
            </Link>
          </li>
          <li>
            <Link href="/Vacinas">
                <BiSolidInjection />
                Vacinas
            </Link>
          </li>
          <li>
            <Link href="/Consultas">
                <FaClipboardList />
                Consultas
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

