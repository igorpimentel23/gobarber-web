import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles/colors';
import signUpBackgroundImg from '../../assets/signup-background.png';

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 700px;
  min-width: 320px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  animation: ${appearFromRight} 1s;
  max-width: 340px;

  > a {
    color: ${colors.textLight};
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, colors.textLight)};
    }
  }
`;

export const Background = styled.div`
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;
