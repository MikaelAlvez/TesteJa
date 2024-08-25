"use client";

import Button from './components/Button';
import '../app/globals.css';
import { useRouter } from 'next/navigation';
import Users from '@/app/components/Users';
import cidadoesImage from '@/Images/cidadoes.jpeg';
import profissionalImage from '@/Images/profissionaisdasaude.jpeg';
import gestoresImage from '@/Images/gestores.jpeg';
import Image from 'next/image';
import banner from '@/Images/Banner-Vacina-Covid19-01-1.png';
import CardNoticias from '@/app/components/CardNoticias';
import news1Image from '@/Images/slide2.jpg';
import news2Image from '@/Images/slide4.png';
import news3Image from '@/Images/news3.jpg';

export default function Home() {
  const router = useRouter();
  const handleLoginRedirect = () => {
    router.push('/Login');
  };
  
  const userCidadao = {
    name: 'Cidadão',
    imageUrl: cidadoesImage,
    info: 'Praticidade ao seu alcance: Facilita a vida dos cidadãos com detalhes sobre imunizantes e lembretes personalizados em um único local. Obtenha facilmente orientações cruciais para manter a saúde, garantindo eficiência na busca por informações, comparável ao processo de imunização.',
  };

  const userProfissional = {
    name: 'Profissional da saúde',
    imageUrl: profissionalImage,
    info: 'Eficiência: Profissionais de saúde contam com a plataforma TESTEJA para uma administração eficaz de doses, integrando registros de pacientes, histórico vacinal e alertas automáticos. Obtenha facilmente orientações cruciais para manter a saúde, garantindo eficiência na busca por informações, comparável ao processo de imunização.',
  };

  const userGestor = {
    name: 'Gestores',
    imageUrl: gestoresImage,
    info: 'Aos gestores, oferecemos uma ferramenta robusta para uma gestão inteligente e estratégica da imunização local. TESTEJA simplifica a administração de programas de imunização, fornecendo dados precisos para estratégias eficazes e tomadas de decisão embasadas.',
  };

  const news = [
    {imageUrl: news1Image, titulo: 'Cobertura da vacinaçào contra COVID-19 nas Américas', text:'Painel sobre a vacinação COVID-19 nas Américas com dados regionais, sub-regionais, nacionais, semanais e de status sócio-econômico do país.'},
    {imageUrl: news2Image, titulo: 'Farmacovigilância para vacinas COVID-19', text:'O objetivo deste painel é apoiar os processos regulamentares para a introdução e o monitoramento da segurança das vacinas COVID-19.'},
    {imageUrl: news3Image, titulo: 'REVELAC-I para vacinas COVID-19', text:'O objetivo da rede é estimar a eficácia das vacinas COVID-19 na prevenção de hospitalizações relacionadas ao IRAG.'},
    {imageUrl: news1Image, titulo: 'Cobertura da vacinaçào contra COVID-19 nas Américas', text:'Painel sobre a vacinação COVID-19 nas Américas com dados regionais, sub-regionais, nacionais, semanais e de status sócio-econômico do país.'},
    {imageUrl: news3Image, titulo: 'REVELAC-I para vacinas COVID-19', text:'O objetivo da rede é estimar a eficácia das vacinas COVID-19 na prevenção de hospitalizações relacionadas ao IRAG.'},
    {imageUrl: news2Image, titulo: 'Farmacovigilância para vacinas COVID-19', text:'O objetivo deste painel é apoiar os processos regulamentares para a introdução e o monitoramento da segurança das vacinas COVID-19.'},
    {imageUrl: news1Image, titulo: 'Cobertura da vacinaçào contra COVID-19 nas Américas', text:'Painel sobre a vacinação COVID-19 nas Américas com dados regionais, sub-regionais, nacionais, semanais e de status sócio-econômico do país.'},

  ];

  return (
    <div className="home-container">
      <div className="menu">
        <h1>Bem-vindo ao TESTEJA, seu Portal de Informações sobre COVID-19</h1>
        <Button onClick={handleLoginRedirect}>Ir para o Gestão</Button>
        <Button onClick={handleLoginRedirect}>Entrar como cidadão</Button>
      </div>
      <div className="info-section">
        <h2>Vacinação contra a COVID-19</h2>
        <div className="image-container">
          <Image src={banner} alt="Cidadãos" />
        </div>
        <p>Este portal fornece informações essenciais sobre o COVID-19, incluindo orientações sobre prevenção, sintomas e vacinas.<br/>
        Além de ficar atualizado, você também pode realizar seus agendamentos, testes e consultas com poucos cliques.<br/>
        Fique informado e cuide da sua saúde e da saúde de todos ao seu redor.</p>
        
        <h2>Agendar:</h2>
        <div className="buttons">
          <Button onClick={handleLoginRedirect}>Vacinação</Button>
          <Button onClick={handleLoginRedirect}>Testagem</Button>
          <Button onClick={handleLoginRedirect}>Consulta médica</Button>
        </div>

        <h2>Feito para todos!</h2>
        <p>Explore a plataforma como cidadão, profissional da saúde ou como gestor.</p>
        <div className="tiposUsuarios">
          <Users 
            imageUrl={userCidadao.imageUrl}
            name={userCidadao.name}
            info={userCidadao.info}
          />
          <Users 
            imageUrl={userProfissional.imageUrl}
            name={userProfissional.name} 
            info={userProfissional.info} 
          />
          <Users 
            imageUrl={userGestor.imageUrl}
            name={userGestor.name} 
            info={userGestor.info} 
          />
        </div>
        <h2>Saiba quem pode receber a vacina contra a Covid-19 e quantas doses são necessárias para cada faixa etária.</h2>
        <h3>Faixas etárias para a vacinação:</h3>
        <div className="doses-table">
          <table>
            <thead>
              <tr>
                <th>Faixa Etária</th>
                <th>Recomendações de Doses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2 a 39 anos</td>
                <td>Três doses da vacina (dose 1, dose 2 e 1ª dose de reforço)</td>
              </tr>
              <tr>
                <td>40 anos ou mais</td>
                <td>Quatro doses (dose 1, dose 2 e 1ª e 2ª doses de reforço)</td>
              </tr>
              <tr>
                <td>5 a 11 anos</td>
                <td>Duas doses com intervalo de 28 dias</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2>Sobre as vacinas:</h2>
          <div className="vacinas-info">
          <p>Vacinar-se é um ato necessário para a proteção individual e coletiva. Por meio dele, algumas doenças já foram erradicadas, como a varíola e a poliomielite. E, apesar de nenhuma vacina ser 100% eficaz, hoje a imunização é essencial para prevenir óbitos, casos graves da Covid-19 e para conter a pandemia.</p>
          <p>Quatro vacinas contra a doença já receberam autorização da Agência Nacional de Vigilância Sanitária (Anvisa) para uso no Brasil: CoronaVac, vacina do Butantan produzida em parceria com a biofarmacêutica chinesa Sinovac, e os imunizantes das empresas AstraZeneca, Pfizer e Janssen; mas somente as três primeiras estão sendo utilizadas no Programa Nacional de Imunizações (PNI), do Ministério da Saúde, até o momento. Um levantamento de um consórcio de veículos de imprensa junto às secretarias da saúde mostra que até o dia 23/5 haviam sido aplicadas 62,6 milhões de doses nos brasileiros, sendo que a CoronaVac responde por 47,2 milhões delas.</p>
          <p>Vale ressaltar que comparar a eficácia das vacinas e tentar eleger a melhor entre elas pode levar a conclusões enganosas. Isso porque os imunizantes foram desenvolvidos a partir de técnicas diferentes e testados em momentos, locais e em populações com nível de exposição ao vírus diferentes. Houve rigor científico em todos os testes e dados que comprovaram segurança e eficácia.</p>
          <p>Ainda assim, a variedade de imunizantes disponíveis costuma causar dúvidas sobre aplicação, armazenamento, tecnologia empregada e intervalo entre as doses. Veja abaixo as diferenças entre as vacinas já aprovadas no país e confira a tabela com os principais dados.</p>

          <h3>CoronaVac</h3>
          <p>A vacina do Butantan utiliza a tecnologia de vírus inativado (morto), uma técnica consolidada há anos e amplamente estudada. Ao ser injetado no organismo, esse vírus não é capaz de causar doença, mas induz uma resposta imunológica. Os ensaios clínicos da CoronaVac no Brasil foram realizados exclusivamente com profissionais da saúde, ou seja, pessoas com alta exposição ao vírus.</p>

          <h3>AstraZeneca</h3>
          <p>Foi desenvolvida pela farmacêutica AstraZeneca em parceria com a universidade de Oxford. No Brasil, é produzida pela Fundação Oswaldo Cruz (Fiocruz). A tecnologia empregada é o uso do chamado vetor viral. O adenovírus, que infecta chimpanzés, é manipulado geneticamente para que seja inserido o gene da proteína “Spike” (proteína “S”) do Sars-CoV-2.</p>

          <h3>Pfizer</h3>
          <p>O imunizante da farmacêutica Pfizer em parceria com o laboratório BioNTech se baseia na tecnologia de RNA mensageiro, ou mRNA. O RNA mensageiro sintético dá as instruções ao organismo para a produção de proteínas encontradas na superfície do novo coronavírus, que estimulam a resposta do sistema imune.</p>

          <h3>Janssen</h3>
          <p>Do grupo Johnson & Johnson, a vacina do laboratório Janssen é aplicada em apenas uma dose, mas ainda não está disponível no Brasil. Assim como o imunizante da Astrazeneca, também se utiliza da tecnologia de vetor viral, baseado em um tipo específico de adenovírus que foi geneticamente modificado para não se replicar em humanos.</p>

          <table>
            <thead>
              <tr>
                <th>Vacina</th>
                <th>Tecnologia</th>
                <th>Eficácia</th>
                <th>Intervalo entre Doses</th>
                <th>Armazenamento</th>
                <th>Voluntários em Ensaios Clínicos no Brasil</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CoronaVac</td>
                <td>Vírus inativado</td>
                <td>A eficácia global pode chegar a 62,3% se o intervalo entre as duas doses for igual ou superior a 21 dias. Nos casos que requerem assistência médica a eficácia pode variar entre 83,7% e 100%</td>
                <td>14 a 28 dias</td>
                <td>De 2 a 8ºC</td>
                <td>12,5 mil pessoas</td>
              </tr>
              <tr>
                <td>AstraZeneca</td>
                <td>Vetor viral</td>
                <td>76% após a primeira dose e 81% após a segunda</td>
                <td>12 semanas</td>
                <td>De 2 a 8ºC</td>
                <td>10 mil pessoas</td>
              </tr>
              <tr>
                <td>Pfizer</td>
                <td>RNA mensageiro</td>
                <td>95% após a segunda dose</td>
                <td>Até 12 semanas após a primeira dose</td>
                <td>Pode ser armazenada por até cinco dias em temperaturas de 2 a 8°C; entre -25 e -15ºC por até duas semanas e entre -90 e -60ºC após este período</td>
                <td>2 mil pessoas</td>
              </tr>
              <tr>
                <td>Janssen</td>
                <td>Vetor viral</td>
                <td>66,9% de eficácia para casos leves e moderados, e 76,7% contra casos graves 14 dias após a aplicação</td>
                <td> Dose única</td>
                <td>De 2 a 8ºC</td>
                <td>7,5 mil pessoas</td>
              </tr>
            </tbody>
          </table>
          <p>Para mais informações, visite a página oficial: <a href="https://butantan.gov.br/covid/butantan-tira-duvida/tira-duvida-noticias/quais-sao-as-diferencas-entre-as-vacinas-contra-covid-19-que-estao-sendo-aplicadas-no-brasil" target="_blank" rel="noopener noreferrer">Diferenças entre as vacinas contra Covid-19</a></p>
        </div>
        </div>
        <div>
          <h2>Notícias</h2>
          <div className="news-container">
            {news.map((newsItem, index) => (
              <CardNoticias 
                key={index}
                imageUrl={newsItem.imageUrl}
                titulo={newsItem.titulo}
                text={newsItem.text}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="contact-section">
        
      </div>
    </div>
  );
}
