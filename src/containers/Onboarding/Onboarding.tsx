import React, { useState, useEffect } from 'react';
import { useResize } from '../../hooks/useResize';
import { Tooltip } from '../../components';

import styles from './Onboarding.module.scss';

export type Step = {
  target: string;
  tooltip: {
    title: string;
    content: string;
    actionText: string;
  };
  position: 'left' | 'right' | 'top' | 'bottom';
};

type Props = {
  steps: Array<Step>;
  start: boolean;
  id: string;
  onFinish?: () => void;
};

const generateStorageKey = (id: string) => {
  return `${id}-onboard`;
};

const Onboarding = ({ id, steps, start, onFinish }: Props) => {
  useResize();
  const storageKey = generateStorageKey(id);

  const [finished, setFinished] = useState<boolean>(() => !!localStorage.getItem(storageKey));
  const [elements, setElements] = useState<(Element | null)[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    const elems = steps.map((item) => document.querySelector(item.target));
    setElements(elems);
  }, [currentStep, steps]);

  const handleFinish = () => {
    if (onFinish) {
      onFinish();
    }
    setFinished(true);
    localStorage.setItem(storageKey, 'completed');
  };

  const handleNextStep = () => {
    if (currentStep === steps.length - 1) {
      handleFinish();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  if (!start || finished) {
    return null;
  }

  return (
    <div data-testid="overlay" className={styles.overlay} onClick={handleFinish}>
      {elements.map(
        (element, idx) =>
          idx === currentStep &&
          element && (
            <Tooltip
              key={idx}
              tooltip={steps[idx].tooltip}
              currentStep={idx + 1}
              totalSteps={steps.length}
              onClose={handleNextStep}
              position={steps[idx].position}
            >
              <div
                className={styles.highlitedArea}
                style={{
                  height: element.getBoundingClientRect().height,
                  width: element.getBoundingClientRect().width,
                  top: element.getBoundingClientRect().top + window.scrollY,
                  left: element.getBoundingClientRect().left + window.scrollX,
                }}
              ></div>
            </Tooltip>
          )
      )}
    </div>
  );
};

export default Onboarding;
