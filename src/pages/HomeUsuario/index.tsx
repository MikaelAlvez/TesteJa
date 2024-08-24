import styles from './HomeUsuario.module.css';
import LayoutUsuario from '@/app/components/LayoutUsuario';
import CartaodeVacina from '@/app/components/CartaodeVacina';
import Button from '@/app/components/Button';
import { FaFilePdf } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { jsPDF } from 'jspdf';

export default function HomeUsuario() {
    const nomeUsuario = "José";
    const cpfUsuario = "123.456.789-00";

    const vacinas = [
        { imunologico: 'Pfizer', lote: '28230BD', unidade: 'UBS II - Liberdade', vacinador: 'Enf. João Silva' },
        { imunologico: 'Pfizer', lote: 'FM3802', unidade: 'Secretária de saúde', vacinador: 'Enf. Vitória' },
        { imunologico: 'Oxford-Astrazeneca', lote: '21OVCD33OZ', unidade: 'UBS II - Liberdade', vacinador: 'Enf. Cida' },
        { imunologico: 'Pfizer', lote: '28230BD', unidade: 'UBS II - Liberdade', vacinador: 'Enf. João Silva' },
        { imunologico: 'Pfizer', lote: 'FM3802', unidade: 'Secretária de saúde', vacinador: 'Enf. Vitória' },
        { imunologico: 'Oxford-Astrazeneca', lote: '21OVCD33OZ', unidade: 'UBS II - Liberdade', vacinador: 'Enf. Cida' },
        { imunologico: 'Pfizer', lote: '28230BD', unidade: 'UBS II - Liberdade', vacinador: 'Enf. João Silva' },
        { imunologico: 'Pfizer', lote: 'FM3802', unidade: 'Secretária de saúde', vacinador: 'Enf. Vitória' },
        { imunologico: 'Oxford-Astrazeneca', lote: '21OVCD33OZ', unidade: 'UBS II - Liberdade', vacinador: 'Enf. Cida' },
        { imunologico: 'Pfizer', lote: '28230BD', unidade: 'UBS II - Liberdade', vacinador: 'Enf. João Silva' },
        { imunologico: 'Pfizer', lote: 'FM3802', unidade: 'Secretária de saúde', vacinador: 'Enf. Vitória' },
    ];

    const gerarPDF = () => {
        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const title = 'Cartão de Vacinação';
        const titleFontSize = 16;
        const textWidth = doc.getTextWidth(title);

        const x = (pageWidth - textWidth) / 2;
        doc.setFontSize(titleFontSize);
        doc.text(title, x, 10);

        const nameText = `Nome: ${nomeUsuario}`;
        const cpfText = `CPF: ${cpfUsuario}`;
        const infoFontSize = 12;
        doc.setFontSize(infoFontSize);
        doc.text(nameText, 10, 20);
        doc.text(cpfText, 10, 30);

        let y = 40;
        doc.setFontSize(12);
        vacinas.forEach((vacina) => {
            if (y > 270) {
                doc.addPage();
                y = 10;
            }

            doc.text(`------------------------------------------------------------------------------------------------------------------------------------`, 10, y);
            doc.text(`Imunológico: ${vacina.imunologico}`, 10, y + 10);
            doc.text(`Lote: ${vacina.lote}`, 10, y + 20);
            doc.text(`Unidade: ${vacina.unidade}`, 10, y + 30);
            doc.text(`Vacinador: ${vacina.vacinador}`, 10, y + 40);
            y += 50;
        });

        doc.save('cartao_de_vacinacao.pdf');
    };

    return (
        <div className={styles.container}>
            <LayoutUsuario nomeUsuario={nomeUsuario} />
            <h1>Cartão de vacinação</h1>
            <div className={styles.cartoesContainer}>
                {vacinas.map((cartao, index) => (
                    <CartaodeVacina
                        key={index}
                        imunologico={cartao.imunologico}
                        lote={cartao.lote}
                        unidade={cartao.unidade}
                        vacinador={cartao.vacinador}
                    />
                ))}
            </div>
            <div className={styles.buttonsContainer}>
                <Button>
                    <FaCalendarPlus />
                    Novo agendamento
                </Button>
                <Button onClick={gerarPDF}>
                    <FaFilePdf />
                    Cartão de vacina
                </Button>
            </div>   
        </div>
    );
}
