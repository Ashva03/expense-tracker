'use client';
import React, { SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { Buttons, ButtonWrap } from './styles';
import { Style } from 'util';
import SVGIcon from '@/app/assets/SVGIcon';

interface Props {
  title?: string;
  onClick?: (e: SyntheticEvent) => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'reset' | 'submit' | 'button';
  secondary?: boolean;
  iconSize?: string;
  iconName?: string;
  iconColor?: string;
  style?: Style;
  iconViewBox?: string;
  iconStyle?: Style;
  id?: string;
  transparentbutton?: boolean;
  leftIcon?: boolean;
  rightIcon?: boolean;
  strokeColor?: string;
  className?: string;
  width?: boolean;
  secondaryButtonLoadingColor?: boolean;
  tertiary?: boolean;
  isDeletebutton?:boolean;
}

const Button: React.FC<Props> = (Props) => {
  const {
    title,
    disabled,
    type = 'button',
    onClick,
    secondary,
    iconSize,
    iconName,
    isLoading,
    iconColor,
    style,
    iconViewBox,
    iconStyle,
    transparentbutton,
    leftIcon,
    rightIcon,
    strokeColor,
    className,
    width,
    secondaryButtonLoadingColor,
    tertiary,
    isDeletebutton,
    ...props
  } = Props;
  return (
    <ButtonWrap isLoading={isLoading} secondaryButtonLoadingColor={secondaryButtonLoadingColor} width={width}>
      <Buttons
        onClick={(e) => {
          onClick && !isLoading && onClick(e);
        }}
        secondary={secondary}
        tertiary={tertiary}
        disabled={disabled}
        isLoading={isLoading}
        type={type}
        transparentbutton={transparentbutton}
        className={className}
        width={width}
        isDeletebutton={isDeletebutton}
        {...props}>
        {isLoading
          ? null
          : leftIcon &&
            iconName && (
              <SVGIcon
                name={iconName}
                height={iconSize}
                width={iconSize}
                fill={iconColor}
                viewBox={iconViewBox}
                style={iconStyle}
                stroke={strokeColor}
              />
            )}
        {title || ''}
        {isLoading
          ? null
          : rightIcon &&
            iconName && (
              <SVGIcon
                name={iconName}
                height={iconSize}
                width={iconSize}
                fill={iconColor}
                stroke={strokeColor}
                viewBox={iconViewBox}
                style={iconStyle}
              />
            )}
      </Buttons>
    </ButtonWrap>
  );
};

export default Button;
