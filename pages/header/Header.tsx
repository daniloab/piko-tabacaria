import React from "react";

import styled from "styled-components";
import PikoLogo from "../../public/logo_piko_white.svg";
import { Flex } from "rebass";

const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  color: white;
  padding: 30px 123px;
  width: 100%;
  max-width: 1080px;
`;

const Nav = styled.nav`
    height: 136px;
    
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
