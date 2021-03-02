import styled from 'styled-components';
import { colors } from '../../styles/colors';

interface DropDownProps {
  isOpen: boolean;
}

export const HeaderMobile = styled.header`
  background: ${colors.backgroundSecondary};
`;

export const HeaderContent = styled.div`
  background: ${colors.backgroundSecondary};
  > div > a > img {
    height: 70px;
  }

  button {
    svg {
      color: ${colors.textRegular};
      width: 22px;
      height: 22px;
    }
  }
`;

export const AnimationContainer = styled.div<DropDownProps>`
  top: ${props => (props.isOpen ? '98px' : '0')};

  background: ${colors.backgroundSecondary};
  left: 0;

  div > button {
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
