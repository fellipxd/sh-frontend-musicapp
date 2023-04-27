import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border-radius: 5px;
  background: ${({ primary }) => (primary ? "#660099" : "#fff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "0.7rem" : "0.5rem")};
  width: ${({widthBig}) => (widthBig ? "100%" : "auto")};
  color: ${({ light }) => (light ? "#fff" : "#660099")};
  font-size: ${({fontBig}) => (fontBig ? "1rem" : "0.8rem")};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
