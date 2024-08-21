import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
