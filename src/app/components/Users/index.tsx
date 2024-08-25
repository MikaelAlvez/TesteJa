"use client";

import styles from './Users.module.css'; 
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const User = ({ name, imageUrl, info }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/Login');
  };

  return (
    <div className={styles.userContainer} onClick={handleClick}>
      <Image src={imageUrl} alt={`${name}'s photo`} className={styles.userImage} />
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>{name}</h2>
        <p className={styles.userDetails}>{info}</p>
      </div>
    </div>
  );
};

export default User;
