import React from "react";
import styled from "styled-components/macro";

export default function Title({ firstPart, secondPart }) {
  return (
    <TitleStyled>
      {firstPart}
      <SpanStyled>{secondPart}</SpanStyled>
      <LineStyledTop />
      <LineStyledBottom />
    </TitleStyled>
  );
}

const TitleStyled = styled.h1`
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 35px;
  margin: 10px auto 10px;
  text-align: center;
`;

const SpanStyled = styled.span`
  color: #721313;
`;

const LineStyledTop = styled.hr`
  border: 1.5px solid
    ${props => (props.theme.mode === "dark" ? "white" : "#111")};
  width: 95%;
  margin: 2px auto 2px;
`;

const LineStyledBottom = styled.hr`
  border: 0.5px solid
    ${props => (props.theme.mode === "dark" ? "white" : "#111")};
  width: 85%;
  margin-top: 0px;
`;
// 721313
