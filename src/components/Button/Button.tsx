import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'white' | 'black';
};

export const Button: React.FC<PropsWithChildren<Props>> = ({ color = 'white', children, ...rest }) => {
  return (
    <button className={clsx(styles.button, color === "black" && styles.button_black)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
