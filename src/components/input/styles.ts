import styled, { css } from 'styled-components';
import { colors } from '../../styles/colors';
import Tooltip from '../tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${colors.backgroundSecondary};
  border-radius: 10px;
  padding: 0 12px;
  width: 100%;

  border: 2px solid ${colors.backgroundSecondary};
  color: ${colors.textFade};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.textError};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.primary};
      color: ${colors.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${colors.primary};
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${colors.textLight};
    padding: 16px 0;

    &::placeholder {
      color: ${colors.textFade};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  display: flex;
  align-items: center;
  margin-left: 0px;

  svg {
    margin: 0;
  }

  span {
    background: ${colors.textError};
    color: ${colors.textWhite};

    &::before {
      border-color: ${colors.textError} transparent;
    }
  }
`;
