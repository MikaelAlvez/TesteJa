"use client";

import styles from './Users.module.css'; 

const User = ({ name, imageUrl, info }) => {
  return (
    <div className={styles.userContainer}>
      <img src={imageUrl} alt={`${name}'s photo`} className={styles.userImage} />
      <div className={styles.userInfo}>
        <h2 className={styles.userName}>{name}</h2>
        <p className={styles.userDetails}>{info}</p>
      </div>
    </div>
  );
};

export default User;
