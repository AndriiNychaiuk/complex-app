import styled from "styled-components";

interface Props {
  $active: boolean;
}

export const StyledPageHeader = styled.header<Props>`
  padding-left: ${({ $active }) => $active ? "150px" : 0};
  height: 50px;
  box-shadow: 0 1px 4px 0 #cfdae0;
  -moz-box-shadow: 0 1px 4px 0 #cfdae0;
  -webkit-box-shadow: 0 1px 4px 0 #cfdae0;
  transition: 0.3s;
`;
