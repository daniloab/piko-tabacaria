import React from "react";

import { Flex, Text } from "rebass";

import styled from "styled-components";

const Wrapper = styled(Flex)`
  align-items: flex-start;
  justify-content: space-between;
  font-size: 200px;
  font-weight: bold;
  letter-spacing: 10px;
  
  span {
    margin-bottom: -56px;
  }
`

const LeftWrapper = styled(Flex)`
  flex-direction: column;
  text-transform: uppercase;
  color: white;
`;

const RightWrapper = styled(Flex)`
  flex-direction: column;
  text-transform: uppercase;
  color: white;
`;

const LeftFirstSpan = styled.span`
  color: black;
`;

const LeftSecondSpan = styled.span`
  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 10px black;
    -webkit-text-fill-color: transparent;
 }
`;

const LeftThirdSpan = styled(LeftSecondSpan)``;

const RightFirstSpan = styled.span`
 @supports (-webkit-text-stroke: 1px #ababab) {
    -webkit-text-stroke: 10px #ababab;
    -webkit-text-fill-color: transparent;
 }
`;

const RightSecondSpan = styled(RightFirstSpan)``;

const RightThirdSpan = styled.span`
 color: #ababab;
`;

const FirstWrapper = () => {
  return (
    <Wrapper>
      <LeftWrapper flexDirection={"column"} color={"gray"}>
        <LeftFirstSpan>piko</LeftFirstSpan>
        <LeftSecondSpan>piko</LeftSecondSpan>
        <LeftThirdSpan>piko</LeftThirdSpan>
      </LeftWrapper>
      <RightWrapper>
        <RightFirstSpan>piko</RightFirstSpan>
        <RightSecondSpan>piko</RightSecondSpan>
        <RightThirdSpan>piko</RightThirdSpan>
      </RightWrapper>
    </Wrapper>
  );
};

export default FirstWrapper;
