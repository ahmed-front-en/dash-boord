// src/Card.js
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.layout.borderRadius};
  padding: ${({ theme }) => theme.layout.cardPadding};
  box-shadow: ${({ theme }) => theme.shadows.main};
  width: 100%;
  height: 100%;
  position: relative; // مهم لإضافة زر "View Report" لاحقًا
`;

const Card = ({ children }) => {
  return <CardContainer>{children}</CardContainer>;
};

export default Card;
