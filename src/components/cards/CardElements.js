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

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardP = styled.p`
  color: #660099;
`;

export const CardContainer2 = styled.div`
  height: 8rem;
  width: 10rem;
  position: relative;
  border-radius: 5px;
`;

export const CardImage2 = styled.img`
  width: 100%;
  position: relative;
  display: block;

  &::before {
    position: absolute;
    content: "";
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const CardBody2 = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50%, -50%;
`;
