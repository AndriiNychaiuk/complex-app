import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { StyledPageHeader } from "./PadeHeader.styles";

export const PageHeader = () => {
  const sidebarState = useSelector((state: RootState) => state.sidebar.value)

  return (
    <StyledPageHeader $active={sidebarState} />
  )
};
