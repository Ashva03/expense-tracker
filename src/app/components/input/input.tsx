'use client';
import SVGIcon from '@/app/assets/SVGIcon';
import { Errormessage, Input, InputDiv, InputSection, Label, Labels, Maindiv, SvgImage } from './styles';
import { useCallback, useState } from 'react';
interface Props {
  title?: string;
  placeholder: string;
  labelCta?: boolean;
  width?: any;
  hasError?: boolean;
  error?: string;
  className?: string;
  login?: boolean;
  newpassword?: boolean;
  value?: string;
  type?: 'email' | 'password' | 'text';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onForgotClick?: Function;
}
const InputComponent: React.FC<Props> = (Props) => {
  const {
    title,
    placeholder,
    labelCta,
    width,
    hasError,
    error,
    className,
    login,
    type,
    newpassword,
    onChange,
    disabled,
    onForgotClick,
    ...props
  } = Props;
  const [isShow, setIsShow] = useState(false);

  const handlePassword = useCallback((value: boolean) => {
    setIsShow(value);
  }, []);

  const onClickForgot = useCallback(() => {
    if (onForgotClick) onForgotClick();
  }, [onForgotClick]);

  return (
    <Maindiv>
      <InputDiv>
        <Labels labelCta={labelCta} login={login}>
          <Label login={login} disabled={disabled}>
            {title || 'Email'}
          </Label>
          {!newpassword && login && <a onClick={onClickForgot}>Forgot Password?</a>}
        </Labels>
        <InputSection>
          <Input
            placeholder={placeholder}
            width={width}
            hasError={hasError}
            className={className}
            onChange={onChange}
            type={isShow ? 'text' : type}
            disabled={disabled}
            {...props}
          />
          {(newpassword || login) && (
            <SvgImage onClick={() => handlePassword(!isShow)}>
              <SVGIcon name={isShow ? 'open-eye-icon' : 'close-eye-icon'} width='18' height='18' viewBox='0 0 18 18' />
            </SvgImage>
          )}
        </InputSection>
      </InputDiv>
      {hasError && (
        <Errormessage>
          <p>{error}</p>
        </Errormessage>
      )}
    </Maindiv>
  );
};
export default InputComponent;
