import LayoutServidores from '@/app/components/LayoutServidor';
import ListaEstoque from '@/app/components/ListaEstoque';
import styles from './Estoque.module.css';

export default function Estoque() {
  const nomeUsuario = "Fulano";

  const estoque = [
    {nome: 'Pfizer - Pfizer', fabricante:'PFIZER MANUFACTURING', lote:'28230BD', quantidade: '10.590', local: 'Secretária Municipal de Saúde'},
    {nome: 'Astrazeneca/Fiocruz - COVISHIELD - Oxford', fabricante:'FUNDACAO OSWALDO CRUZ', lote:'21OVCD330Z', quantidade: '5.201', local: 'Secretária Municipal de Saúde'},
    {nome: 'COVID-19 Pfizer', fabricante:'PFIZER MANUFACTURING BELGIUM NV - BELGIVA', lote:'FM3802', quantidade: '590', local: 'GINASIO MUNICIPAL PEDRO CIARLINI'},
    {nome: 'Pfizer - Pfizer', fabricante:'PFIZER MANUFACTURING', lote:'28230BD', quantidade: '10.590', local: 'Secretária Municipal de Saúde'},
    {nome: 'Astrazeneca/Fiocruz - COVISHIELD - Oxford', fabricante:'FUNDACAO OSWALDO CRUZ', lote:'21OVCD330Z', quantidade: '5.201', local: 'Secretária Municipal de Saúde'},
    {nome: 'COVID-19 Pfizer', fabricante:'PFIZER MANUFACTURING BELGIUM NV - BELGIVA', lote:'FM3802', quantidade: '590', local: 'GINASIO MUNICIPAL PEDRO CIARLINI'},
    {nome: 'Pfizer - Pfizer', fabricante:'PFIZER MANUFACTURING', lote:'28230BD', quantidade: '10.590', local: 'Secretária Municipal de Saúde'},
    {nome: 'Astrazeneca/Fiocruz - COVISHIELD - Oxford', fabricante:'FUNDACAO OSWALDO CRUZ', lote:'21OVCD330Z', quantidade: '5.201', local: 'Secretária Municipal de Saúde'},
    {nome: 'COVID-19 Pfizer', fabricante:'PFIZER MANUFACTURING BELGIUM NV - BELGIVA', lote:'FM3802', quantidade: '590', local: 'GINASIO MUNICIPAL PEDRO CIARLINI'},
    {nome: 'Pfizer - Pfizer', fabricante:'PFIZER MANUFACTURING', lote:'28230BD', quantidade: '10.590', local: 'Secretária Municipal de Saúde'},
    {nome: 'Astrazeneca/Fiocruz - COVISHIELD - Oxford', fabricante:'FUNDACAO OSWALDO CRUZ', lote:'21OVCD330Z', quantidade: '5.201', local: 'Secretária Municipal de Saúde'},
    {nome: 'COVID-19 Pfizer', fabricante:'PFIZER MANUFACTURING BELGIUM NV - BELGIVA', lote:'FM3802', quantidade: '590', local: 'GINASIO MUNICIPAL PEDRO CIARLINI'},
    {nome: 'Pfizer - Pfizer', fabricante:'PFIZER MANUFACTURING', lote:'28230BD', quantidade: '10.590', local: 'Secretária Municipal de Saúde'},
    {nome: 'Astrazeneca/Fiocruz - COVISHIELD - Oxford', fabricante:'FUNDACAO OSWALDO CRUZ', lote:'21OVCD330Z', quantidade: '5.201', local: 'Secretária Municipal de Saúde'},
    {nome: 'COVID-19 Pfizer', fabricante:'PFIZER MANUFACTURING BELGIUM NV - BELGIVA', lote:'FM3802', quantidade: '590', local: 'GINASIO MUNICIPAL PEDRO CIARLINI'},
    {nome: 'Pfizer - Pfizer', fabricante:'PFIZER MANUFACTURING', lote:'28230BD', quantidade: '10.590', local: 'Secretária Municipal de Saúde'},
    {nome: 'Astrazeneca/Fiocruz - COVISHIELD - Oxford', fabricante:'FUNDACAO OSWALDO CRUZ', lote:'21OVCD330Z', quantidade: '5.201', local: 'Secretária Municipal de Saúde'},
    {nome: 'COVID-19 Pfizer', fabricante:'PFIZER MANUFACTURING BELGIUM NV - BELGIVA', lote:'FM3802', quantidade: '590', local: 'GINASIO MUNICIPAL PEDRO CIARLINI'},
  ]
  
  return (
    <div className={styles.container}>
        <LayoutServidores nomeUsuario={nomeUsuario} />
        <div className={styles.listContainer}>
            {estoque.map((item, index) => (
                <ListaEstoque
                  key={index}
                  nome={item.nome}
                  fabricante={item.fabricante}
                  lote={item.lote}
                  quantidade={item.quantidade}
                  local={item.local}
                />
            ))}
        </div>
    </div>
  );
}
