import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { lighten } from 'polished';
import { colors } from '../../../styles/colors';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasdescription: string;
}

interface TimeBarProps {
  type?: 'success' | 'error' | 'info';
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

const toastTypeVariationsColors = {
  info: css`
    background-image: linear-gradient(
      130deg,
      ${lighten(0.2, colors.textError)},
      ${colors.textError}
    );
  `,

  success: css`
    background-image: linear-gradient(
      130deg,
      ${lighten(0.2, colors.textSuccess)},
      ${colors.textSuccess}
    );
  `,

  error: css`
    background-image: linear-gradient(
      130deg,
      ${lighten(0.2, colors.textError)},
      ${colors.textError}
    );
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  max-width: 360px;
  position: relative;
  padding: 16px 30px 0 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;

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
export const TimerBar = styled(animated.span)<TimeBarProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 5px;
  will-change: width;

  ${props => toastTypeVariationsColors[props.type || 'info']}
`;
