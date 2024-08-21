"use client";

import Button from './components/Button';
import '../app/globals.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleLoginRedirect = () => {
    router.push('/Login');
  };

  return (
    <div className="home-background">
      <h1>
        "A vacinação é um compromisso com a vida.<br/>
        Proteja a si mesmo e aqueles que você ama,<br/>
        vacinando-se contra a COVID-19."
      </h1>
      <Button onClick={handleLoginRedirect}>Entrar</Button>
    </div>
  );
}
