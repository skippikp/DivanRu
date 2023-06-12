import React from 'react';

type Props = {
  color?: string;
}

const CloseIcon = ({color = "#404040"}: Props) => {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1.00025L14 14M1 13.9997L14 1"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default CloseIcon;
