import { colors } from '@/app/assets/style';
import Link from 'next/link';
import styled from 'styled-components';

const AppsAnimated = styled.div`
  display: none;
  @media (max-width: 768px) {
    margin-bottom: 16px;
    position: relative;
    display: block;
    .img {
      border: 1px solid ${colors.lightGray};
      border-radius: 8px;
    }
    .imgdiv {
      display: flex;
    }
    &:last-child {
      margin-bottom: 1px;
    }
  }

  .wrap {
    width: 100%;

    &--logobar {
      height: 180px;
      overflow: hidden;
      position: relative;
      @media only screen and (max-width: 449px) {
        height: 120px;
      }
    }
  }
  .list1 {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    margin-left: 0;
    margin-top: -1px;

    &__item1 {
      flex-grow: 0;
      flex-shrink: 0;
      padding: 1px 16px 0 0;
      width: auto;
    }
  }
  .card-gap {
    display: flex;
    gap: 16px;
    padding: 1px 16px 0 0;
  }
  @media (max-width: 449px) {
    .img {
      width: 120px;
      height: 120px;
    }
  }
`;

export { AppsAnimated };
