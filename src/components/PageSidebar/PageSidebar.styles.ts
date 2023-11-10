import styled from "styled-components";

interface Props {
  $active: boolean
}

export const StyledSidebar = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${({ $active }) => $active ? "150px" : 0};
  background-color: #5de2da;
  transition: 0.3s;
`;

export const StyledButton = styled.button<Props>`
  position: absolute;
  top: 10px;
  left: ${({ $active }) => $active ? "135px" : 0};
  z-index: 1;
  padding: 4px 8px;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: 0;
  transition: 0.3s;
  transform: rotate(${({ $active }) => $active ? "180deg" : 0});
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  &:is(:target, :active) {
    background-color: #cfcfcf;
  }
`