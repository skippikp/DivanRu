import React from 'react';
import illustration from '../assets/Illustration.png';
import { Button } from '../components';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.illustration} src={illustration} alt="img" height={275} />
        <div className={styles.mainContent}>
          <div className={styles.text}>
            <h1>Добро пожаловать в конструктор!</h1>
            <p>Выберите действие для продолжения</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button id="target1">Изменить конфигурацию</Button>
            <Button id="target2" color="black">
              Купить любой диван
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
