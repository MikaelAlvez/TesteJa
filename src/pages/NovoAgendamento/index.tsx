import LayoutUsuario from '@/app/components/LayoutUsuario';

export default function NovoAgendamento() {
  const nomeUsuario = "Fulano";
  
  return (
    <div>
        <LayoutUsuario nomeUsuario={nomeUsuario}></LayoutUsuario>
    </div>
  );
}
