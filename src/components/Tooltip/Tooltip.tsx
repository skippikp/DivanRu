import React, { PropsWithChildren, FC } from 'react';
import Floater from 'react-floater';
import clsx from 'clsx';
import CloseIcon from '../../icons/CloseIcon';
import styles from './Tooltip.module.scss';

type Props = {
  tooltip: {
    title: string;
    content: string;
    actionText: string;
  };
  currentStep: number;
  totalSteps: number;
  onClose: () => void;
  position: 'left' | 'top' | 'right' | 'bottom';
};

const TooltipCard = (props: Omit<Props, 'position'>) => {
  const { tooltip, currentStep, totalSteps, onClose } = props;
  return (
    <div className={clsx(styles.container)} onClick={(e) => e.stopPropagation()}>
      <div className={styles.tooltipContent}>
        <div className={styles.contentContainer}>
          <div>
            <div className={styles.title}>{tooltip.title}</div>
            <div className={styles.content}>{tooltip.content}</div>
          </div>
          <div className={styles.closeButton} onClick={onClose}>
            <CloseIcon />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.actionButton} onClick={onClose}>
            {tooltip.actionText}
          </div>
          <div className={styles.stepsIndicator}>{`${currentStep}/${totalSteps}`}</div>
        </div>
      </div>
    </div>
  );
};

export const Tooltip: FC<PropsWithChildren<Props>> = (props) => {
  const { position, children, ...rest } = props;

  return (
    <Floater
      open={true}
      offset={20}
      component={<TooltipCard {...rest} />}
      placement={position}
      styles={{
        wrapper: { cursor: 'auto' },
        floater: { transition: 'none' },
        arrow: { boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.2)', width: '25px', height: '25px' },
      }}
    >
      {children}
    </Floater>
  );
};

export default Tooltip;
