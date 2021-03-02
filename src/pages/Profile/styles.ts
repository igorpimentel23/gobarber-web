import styled from 'styled-components';
import { shade } from 'polished';
import { colors } from '../../styles/colors';

export const Container = styled.div`
  > header {
    height: 144px;
    background: ${colors.backgroundSecondary};

    a {
      svg {
        color: ${colors.textRegular};
        width: 24px;
        height: 24px;
      }
    }
  }
`;
export const Content = styled.div`
  max-width: 340px;
  margin: -174px auto;
`;

export const AvatarInput = styled.div`
  img {
    width: 186px;
    height: 186px;
  }

  label {
    width: 48px;
    height: 48px;
    background: ${colors.primary};
    right: 0;
    bottom: 0;
    transition: background-color 0.2s;

    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      color: ${colors.textDark};
    }

    &:hover {
      background: ${shade(0.2, colors.primary)};
    }
  }
`;
