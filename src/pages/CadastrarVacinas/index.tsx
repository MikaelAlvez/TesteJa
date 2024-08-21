import LayoutServidores from '@/app/components/LayoutServidor';

export default function CadastrarVacinas() {
  const nomeUsuario = "Fulano";
  
  return (
    <div>
        <LayoutServidores nomeUsuario={nomeUsuario}></LayoutServidores>
    </div>
  );
}
