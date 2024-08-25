"use client";

import Button from './components/Button';
import '../app/globals.css';
import { useRouter } from 'next/navigation';
import Users from '@/app/components/Users';

export default function Home() {
  const router = useRouter();
  const handleLoginRedirect = () => {
    router.push('/Login');
  };

  const userCidadao = {
    name: 'Cidadão',
    imageUrl: '',
    info: 'Praticidade ao seu alcance: Facilita a vida dos cidadãos com detalhes sobre imunizantes e lembretes personalizados em um único local. Obtenha facilmente orientações cruciais para manter a saúde, garantindo eficiência na busca por informações, comparável ao processo de imunização.',
  };

  const userProfissional = {
    name: 'Profissional da saúde',
    imageUrl: '',
    info: 'Eficiência: Profissionais de saúde contam com a plataforma TESTEJA para uma administração eficaz de doses, integrando registros de pacientes, histórico vacinal e alertas automáticos. Obtenha facilmente orientações cruciais para manter a saúde, garantindo eficiência na busca por informações, comparável ao processo de imunização.',
  };

  const userGestor = {
    name: 'Gestores',
    imageUrl: '',
    info: 'Aos gestores, oferecemos uma ferramenta robusta para uma gestão inteligente e estratégica da imunização local. TESTEJA simplifica a administração de programas de imunização, fornecendo dados precisos para estratégias eficazes e tomadas de decisão embasadas.',
  };

  return (
    <div className="home-container">
      <div className="menu">
        <h1>Bem-vindo ao Portal de Informações sobre COVID-19</h1>
        <Button onClick={handleLoginRedirect}>Ir para o Gestão</Button>
        <Button onClick={handleLoginRedirect}>Entrar como cidadão</Button>
      </div>
      <div className="info-section">
        <h2>Vacinação contra a COVID-19</h2>
        <img src='../Images/Banner-Vacina-Covid19-01-1.png' alt="Banner sobre COVID-19" />
        <h2>
          Este portal fornece informações essenciais sobre o COVID-19, incluindo orientações sobre prevenção, sintomas e vacinas.
          <br />Além de ficar atualizado, você também pode realizar seus agendamentos, testes e consultas com poucos cliques.
          <br />Fique informado e cuide da sua saúde e da saúde de todos ao seu redor.
        </h2>
        <h2>Feito para todos!</h2>
        <p>Explore a plataforma como cidadão, profissional da saúde ou como gestor.</p>
        <div className="tiposUsuarios">
          <Users name={userCidadao.name} imageUrl={userCidadao.imageUrl} info={userCidadao.info} />
          <Users name={userProfissional.name} imageUrl={userProfissional.imageUrl} info={userProfissional.info} />
          <Users name={userGestor.name} imageUrl={userGestor.imageUrl} info={userGestor.info} />
        </div>
        <h2>Saiba quem pode receber a vacina contra a Covid-19 e quantas doses são necessárias para cada faixa etária.</h2>
        <h3>Faixas etárias para a vacinação:</h3>
        <p>12 a 39 anos – Três doses da vacina (dose 1, dose 2 e 1ª dose de reforço)</p>
        <p>40 anos ou mais – Quatro doses (dose 1, dose 2 e 1ª e 2ª doses de reforço)</p>
        <p>5 a 11 anos: Duas doses com intervalo de 28 dias</p>
      </div>
      <div className="contact-section">
        
      </div>
    </div>
  );
}
