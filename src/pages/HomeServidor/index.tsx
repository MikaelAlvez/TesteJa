import LayoutServidores from '@/app/components/LayoutServidor';
import styles from './HomeServidor.module.css';
import Filter from '@/app/components/Filter';

export default function HomeServidor() {
  const nomeUsuario = "Fulano";
  
  return (
    <div className={styles.container}>
      <LayoutServidores nomeUsuario={nomeUsuario} />
      <Filter/>
    </div>
  );
}
