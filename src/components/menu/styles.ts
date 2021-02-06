import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Header = styled.header`
  background: ${colors.backgroundSecondary};
`;

export const HeaderContent = styled.div`
  > img {
    height: 80px;
  }

  button {
    svg {
      color: ${colors.textRegular};
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  img {
    width: 56px;
    height: 56px;
  }

  div {
    line-height: 24px;

    span {
      color: ${colors.textLight};
    }

    a {
      color: ${colors.primary};

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
