import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';

import { FiPower } from 'react-icons/fi';
import { Header, HeaderContent, Profile } from './styles';

interface MenuInterface {
  logoImg: string;
}

const Menu: React.FC<MenuInterface> = ({ logoImg }) => {
  const { signOut, user } = useAuth();

  return (
    <Header className="py-4 d-none d-sm-flex">
      <HeaderContent className="d-flex flex-row container align-items-center">
        <img src={logoImg} alt="GoBarber" />
        <Profile className="d-flex flex-fill align-items-center ms-5 ps-5">
          <img
            src={user.avatar_url}
            alt={user.name}
            className="rounded-circle"
          />
          <div className="d-flex flex-column ms-2">
            <span>Bem vindo,</span>
            <Link to="/profile" className="text-decoration-none">
              <strong>{user.name}</strong>
            </Link>
          </div>
        </Profile>

        <button
          type="button"
          onClick={signOut}
          className="border-0 bg-transparent"
        >
          <FiPower />
        </button>
      </HeaderContent>
    </Header>
  );
};

export default Menu;
