import styles from './HomeUsuario.module.css';
import LayoutUsuario from '@/app/components/LayoutUsuario';
import CartaodeVacina from '@/app/components/CartaodeVacina';
import Button from '@/app/components/Button';
import { FaFilePdf } from "react-icons/fa6";
import { FaCalendarPlus } from "react-icons/fa";

export default function HomeUsuario() {
    const nomeUsuario = "Fulano";

    const vacinas = [
        { imunologico: 'Pfizer', lote: '28230BD', unidade: 'UBS II - Liberdade', vacinador: 'Enf. João Silva' },
        { imunologico: 'Pfizer', lote: 'FM3802', unidade: 'Secretária de saúde', vacinador: 'Enf. Vitória' },
        { imunologico: 'Oxford-Astrazeneca', lote: '21OVCD33OZ', unidade: 'UBS II - Liberdade', vacinador: 'Enf. Cida' },
        { imunologico: 'Pfizer', lote: '28230BD', unidade: 'UBS II - Liberdade', vacinador: 'Enf. João Silva' },
        { imunologico: 'Pfizer', lote: 'FM3802', unidade: 'Secretária de saúde', vacinador: 'Enf. Vitória' },
        { imunologico: 'Oxford-Astrazeneca', lote: '21OVCD33OZ', unidade: 'UBS II - Liberdade', vacinador: 'Enf. Cida' },
        { imunologico: 'Pfizer', lote: '28230BD', unidade: 'UBS II - Liberdade', vacinador: 'Enf. João Silva' },
        { imunologico: 'Pfizer', lote: 'FM3802', unidade: 'Secretária de saúde', vacinador: 'Enf. Vitória' },
    ];

    return (
        <div className={styles.container}>
            <LayoutUsuario nomeUsuario={nomeUsuario} />
            <h1>Cartão de vacinação</h1>
            <div className={styles.cartoesContainer}>
                {vacinas.map((cartao, index) => (
                    <div className={styles.cartao}>
                        <CartaodeVacina
                            key={index}
                            imunologico={cartao.imunologico}
                            lote={cartao.lote}
                            unidade={cartao.unidade}
                            vacinador={cartao.vacinador}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.buttonsContainer}>
                <Button>
                    <FaCalendarPlus />
                    Novo agendamento
                </Button>
                <Button>
                    <FaFilePdf />
                    Cartão de vacina
                </Button>
            </div>
        </div>
    );
}
