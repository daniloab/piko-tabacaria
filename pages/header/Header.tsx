import React from "react";

import styled from "styled-components";
import PikoLogo from "../../public/logo_piko_white.svg";

const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  color: white;
  padding: 30px 123px 0px;
  width: 100%;
  max-width: 1080px;
  z-index: 1;
`;

const Nav = styled.nav`
    svg {
      width: 81px;
    }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Nav>
        <PikoLogo/>
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
