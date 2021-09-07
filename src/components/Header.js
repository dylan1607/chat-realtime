import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <HeaderContainer>
      {/* Left */}
      <HeaderLeft>
        <HeaderAvatar
        //Action
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Middle */}
      <HeaderMiddle>
        <SearchIcon />
        <input type="text" placeholder="Search something" />
      </HeaderMiddle>

      {/* Right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  top: 0;
  left: 0;
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--base-color);
  color: white;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
const HeaderMiddle = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  border: 1px solid gray;
  > input {
    background-color: transparent;
    outline: none;
    border: none;
    text-align: center;
    min-width: 30vw;
    color: white;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
  }
`;
