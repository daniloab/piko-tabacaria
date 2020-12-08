import React from "react";

import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex: 1;
  flex-direction: row;
  color: white;
  padding: 30px 123px;
`;

const Nav = styled.nav``;

import { Flex } from "rebass";

const HeaderComponent = () => {
  return (
    <Header>
      <Flex>
        <img
          src={"../../assets/images/piko_logo_alta_02.png"}
          alt="piko-logo"
          width="64px"
          height="64px"
        />
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
