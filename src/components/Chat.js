import styled from "styled-components";
import ChatInput from "../components/ChatInput";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectRoomId, selectRoomName } from "../features/appSlice";
import { API } from "aws-amplify";
import { listMessages } from "../graphql/queries";


const Chat = () => {
  const roomId = useSelector(selectRoomId);
  const roomName = useSelector(selectRoomName);
  const fetchAllMessage = async () => {
    await API.graphql({query: listMessages})
  }
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomName ? roomName : "nothing"}</strong>
            </h4>
            <StarBorderOutlined />
          </HeaderLeft>

          <HeaderRight>
            <InfoOutlined />
            <p>Details</p>
          </HeaderRight>
        </Header>

        <ChatMessages>

        </ChatMessages>
        <ChatInput channelId={roomId} channelName={roomName} />
      </>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    text-transform: lowercase;
  }
  > .MuiSvgIcon-root {
    margin-left: 10px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  > .MuiSvgIcon-root {
    margin-right: 5px;
  }
`;

const ChatMessages = styled.div``;
