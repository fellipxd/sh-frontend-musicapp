import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  height: 12rem;
  width: 12rem;
  border-radius: 5px;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardHeader = styled.h2`
  color: #fff;
`;

export const CardBody = styled.span`
  font-size: 0.7rem;
  color: #fff;
`;
