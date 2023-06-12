import React from 'react';
import MainPage from './pages/MainPage';
import Onboarding, { Step } from './containers/Onboarding/Onboarding';

import styles from './styles/App.module.scss';

const tooltip = {
  title: 'Создай свой дизайн',
  content: 'Для этой модели доступно еще 62 варианта обивки и 5 опций',
  actionText: 'Понял принял',
};

const tooltip2 = {
  title: 'Все и сразу!',
  content: 'Купи уже готовый диван и не парься ни с какими конструкторами',
  actionText: 'Спасибо пожалуйста',
};

const steps: Step[] = [
  { tooltip, position: 'left', target: '#target1' },
  { tooltip: tooltip2, position: 'right', target: '#target2' },
];

function App() {
  return (
    <div className={styles.app}>
      <Onboarding id="main" start={true} steps={steps} />
      <MainPage />
    </div>
  );
}

export default App;
