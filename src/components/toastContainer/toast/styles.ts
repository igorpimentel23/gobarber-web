import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { colors } from '../../../styles/colors';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: string;
}

const toastTypeVariations = {
  info: css`
    background: ${colors.backgroundInfo};
    color: ${colors.textInfo};
  `,

  success: css`
    background: ${colors.backgroundSuccess};
    color: ${colors.textSuccess};
  `,

  error: css`
    background: ${colors.backgroundError};
    color: ${colors.textError};
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  max-width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 12px;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !(props.hasdescription === 'true') &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
