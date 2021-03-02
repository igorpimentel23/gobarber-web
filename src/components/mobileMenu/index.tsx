import React, { useState } from 'react';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/Auth';
import {
  HeaderMobile,
  HeaderContent,
  AnimationContainer,
  Profile,
} from './styles';

interface MobileMenuInterface {
  logoImg: string;
}

const MobileMenu: React.FC<MobileMenuInterface> = ({ logoImg }) => {
  const { user, signOut } = useAuth();

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderMobile className="d-sm-none d-flex flex-column container position-fixed pos-top z-index-3">
        <HeaderContent className="d-flex menu-height align-items-center justify-content-between z-index-3">
          <div className="me-auto">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="border-0 bg-transparent ps-3"
            >
              <span className={`icon-bar ${isMenuOpen ? 'line1' : ''}`} />
              <span className={`icon-bar ${isMenuOpen ? 'line2' : ''}`} />
              <span className={`icon-bar ${isMenuOpen ? 'line3' : ''}`} />
            </button>
          </div>
          <div>
            <Link to="/" className="text-decoration-none">
              <img src={logoImg} alt="GoBarber" />
            </Link>
          </div>
          <div className="ms-auto">
            <button
              type="button"
              onClick={signOut}
              className="d-flex align-items-center border-0 bg-transparent pe-3"
            >
              <FiPower />
            </button>
          </div>
        </HeaderContent>
        <AnimationContainer
          isOpen={isMenuOpen}
          className="d-flex align-items-center z-index-1 ease position-absolute w-100"
        >
          <div className="d-flex align-items-between container menu-height">
            <Profile className="d-flex me-auto align-items-center">
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
          </div>
        </AnimationContainer>
        <div
          onClick={() => setMenuOpen(false)}
          className={`${
            isMenuOpen ? 'd-block' : 'd-none'
          } vh-100 vw-100 position-absolute`}
        />
      </HeaderMobile>
    </>
  );
};

export default MobileMenu;
