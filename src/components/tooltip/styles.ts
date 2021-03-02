import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: ${colors.primary};
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    color: ${colors.textDark};

    &::before {
      content: '';
      border-style: solid;
      border-color: ${colors.primary} transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
