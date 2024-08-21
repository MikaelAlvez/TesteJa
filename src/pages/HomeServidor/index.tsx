import LayoutServidores from '@/app/components/LayoutServidor';

export default function HomeServidor() {
  const nomeUsuario = "Fulano";
  
  return (
    <div>
        <LayoutServidores nomeUsuario={nomeUsuario}></LayoutServidores>
    </div>
  );
}
