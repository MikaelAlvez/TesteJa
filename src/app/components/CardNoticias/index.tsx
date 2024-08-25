import Image from 'next/image';

const CardNoticias = ({ imageUrl, titulo, text }) => {
  return (
    <div className="card">
      <Image src={imageUrl} alt={titulo} layout="responsive" width={300} height={200} />
      <div className="card-content">
        <h3 className="card-title">{titulo}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default CardNoticias;
