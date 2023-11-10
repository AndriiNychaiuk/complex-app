import { StyledButton, StyledSidebar } from "./PageSidebar.styles";
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from "../../store/features/sidebar/sidebarSlice"
import { RootState } from "../../store";

export const PageSidebar = () => {
  const sidebarState = useSelector((state: RootState) => state.sidebar.value)
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggle());

  return (
    <>
      <StyledSidebar $active={sidebarState}>
        <StyledButton $active={sidebarState} onClick={handleToggle}>
          <div>{`>`}</div>
        </StyledButton>
      </StyledSidebar>
    </>
  )
};
