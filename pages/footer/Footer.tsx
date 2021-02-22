import React from "react";
import styles from "../../styles/Home.module.css";

import styled from "styled-components";

import { Flex, Text } from "rebass";

import PikoLogo from "../../public/logo_piko_white.svg";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YoutubeIcon from "@material-ui/icons/Youtube";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 150px;
  padding: 30px 0px;
`;

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Grid>
        <Flex flexDirection={"column"}>
          <Text fontSize={"38px"} color={"#be15af"} fontWeight={"bold"}>
            Contatos
          </Text>
          <Flex flexDirection={"column"}>
            <Flex  mb={'10px'} alignItems={"center"}>
              <WhatsAppIcon style={{ fill: "rgb(136 38 125)" }} />
              <Text pl={"5px"}>WhatsApp</Text>
            </Flex>
            <Flex  mb={'10px'} alignItems={"center"}>
              <InstagramIcon style={{ fill: "rgb(136 38 125)" }} />
              <Text pl={"5px"}>Instagram</Text>
            </Flex>
            <Flex  mb={'10px'} alignItems={"center"}>
              <FacebookIcon style={{ fill: "rgb(136 38 125)" }} />
              <Text pl={"5px"}>Facebook</Text>
            </Flex>
            <Flex  mb={'10px'} alignItems={"center"}>
              <YoutubeIcon style={{ fill: "rgb(136 38 125)" }} />
              <Text pl={"5px"}>Youtube</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection={"column"}>
          <Text fontSize={"38px"} color={"#be15af"} fontWeight={"bold"}>
            Horários
          </Text>
          <Flex flexDirection={"column"}>
            <Text mb={'10px'}>Qui - 18h às 00h</Text>
            <Text mb={'10px'}>Sex - 18h às 00h</Text>
            <Text mb={'10px'}>Sáb - 18h às 00h</Text>
            <Text mb={'10px'}>Dom - 18h às 00h</Text>
          </Flex>
        </Flex>
        <Flex>
          <PikoLogo />
        </Flex>
      </Grid>
    </footer>
  );
};

export default Footer;
