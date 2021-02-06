import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles/colors';
import sigInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 700px;
  min-width: 320px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromLeft} 1s;
  max-width: 340px;

  form {
    a {
      color: ${colors.textLight};
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, colors.textLight)};
      }
    }
  }
  > a {
    color: ${colors.primary};
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, colors.primary)};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  background: url(${sigInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
