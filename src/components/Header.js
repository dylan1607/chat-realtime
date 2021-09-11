import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { ExitToApp, AccessTime, Search } from "@material-ui/icons";
import { Auth } from "aws-amplify";

const Header = () => {
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HeaderContainer>
      {/* Left */}
      <HeaderLeft>
        <HeaderAvatar
        //Action
        />
        <AccessTime />
      </HeaderLeft>

      {/* Middle */}
      <HeaderMiddle>
        <Search />
        <input type="text" placeholder="Search something" />
      </HeaderMiddle>

      {/* Right */}
      <HeaderRight>
        <ExitToApp onClick={signOut} />
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
  justify-content: space-between;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: 10px;
    margin-right: 10px;
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
  padding: 4px 20px;
  border: 1px solid gray;
  > input {
    background-color: transparent;
    outline: none;
    border: none;
    text-align: center;
    min-width: 20vw;
    color: white;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  justify-content: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 15px;
    cursor: pointer;
  }
`;
