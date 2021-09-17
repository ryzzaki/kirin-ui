import React from 'react';
import cn from 'classnames';

import './Button.css';

type ButtonProps = {
  primary?: boolean;
  textSize?: number;
  hover?: boolean;
  transparent?: boolean;
  className?: string;
  onClick?: () => void;
};

const buttonClasses: (args: ButtonProps) => string = ({ primary, textSize, transparent, hover, className }) =>
  cn(
    `p-2 justify-center rounded-md border-2 ${textSize}`,
    className,
    {
      'bg-white': transparent,
      'bg-darkemerald': !transparent && primary,
      'bg-red': !primary,
    },
    { 'border-verydarkemerald': primary, 'border-red': !primary },
    {
      'text-verydarkemerald': transparent && primary,
      'text-red': transparent && !primary,
      'text-white': !transparent && primary,
      'text-black': !transparent && !primary,
    },
    {
      'transition duration-300 ease-in-out hover:text-white hover:bg-verydarkemerald': hover && transparent,
    }
  );

const Button: React.FC<ButtonProps> = ({
  primary = true,
  textSize = 16,
  hover = false,
  transparent = false,
  className,
  onClick,
  children,
}) => (
  <button className={buttonClasses({ primary, textSize, transparent, hover, className })} onClick={onClick}>
    {children}
  </button>
);

export default Button;
