import { Component } from 'react';
import { randomColorsArray } from '@/app/assets/style';
import { isEmpty } from '@/helper/common';
import { TextWrapper, UserLogoWrapper } from './style';
import { Image } from './style';

interface Props {
  imgSrc: string;
  name: string;
  size: number;
  className?: string;
  header?: boolean;
}

class Avatar extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  getAvtarName = (name: string) => {
    if (isEmpty(name)) {
      return '#';
    }
    let splitedName = name.trim().split(' ');
    if (splitedName.length === 1) {
      return this.getChar(name);
    } else {
      if (splitedName[1].trim() === '') {
        return this.getChar(name);
      } else {
        return this.getChar(splitedName[0]);
      }
    }
  };

  getChar = (value: string) => {
    return value.charAt(0).toUpperCase();
  };

  getAsciiChar = (name: string) => {
    return this.getChar(name).charCodeAt(0);
  };

  getColorIndex = (name: string) => {
    const asciiValue = this.getAsciiChar(name);
    const colorIndex = (asciiValue - 64) % (randomColorsArray.length - 1);
    return colorIndex;
  };

  render() {
    const propss: Props = this.props;
    const { imgSrc, name, size, className, header } = propss;

    const avtarName = this.getAvtarName(name);
    return (
      <UserLogoWrapper style={{ position: 'relative' }} header={header}>
        {!isEmpty(imgSrc) ? (
          <>
            <Image src={imgSrc} height={size} width={size} alt='' className='img' />
          </>
        ) : (
          <TextWrapper size={size} className={className} header={header}>
            <span>{avtarName}</span>
          </TextWrapper>
        )}
      </UserLogoWrapper>
    );
  }
}

export default Avatar;
