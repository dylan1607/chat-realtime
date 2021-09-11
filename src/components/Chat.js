import styled from "styled-components";
import ChatInput from "../components/ChatInput";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { selectRoomId, selectRoomName } from "../features/appSlice";
import { API } from "aws-amplify";
import { getRoom } from "../graphql/queries";
import { onCreateMessage } from "../graphql/subscriptions";
import { useEffect, useState, useRef } from "react";
import Message from "./Message";

const Chat = () => {
  const chatRef = useRef(null);
  const [roomMessage, setRoomMessage] = useState(null);
  const roomId = useSelector(selectRoomId);
  const roomName = useSelector(selectRoomName);
  const fetchAllMessage = async () => {
    try {
      const messageData = await API.graphql({
        query: getRoom,
        variables: {
          id: roomId,
        },
      });
      setRoomMessage(messageData.data.getRoom.messages.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (roomId === null) return;
    fetchAllMessage();
    API.graphql({ query: onCreateMessage }).subscribe({
      next: (data) => {
        // console.log(data.value.data.onCreateMessage);
        fetchAllMessage();
      },
    });
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId]);
  return (
    <ChatContainer>
      {roomId && roomMessage && (
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
            {roomMessage?.map((item) => {
              return (
                <Message
                  key={item.id}
                  message={item.payload}
                  username={item.username}
                  timestamp={item.createdAt}
                />
              );
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput channelId={roomId} channelName={roomName} />
        </>
      )}
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
  position: fixed;
  top: 30;
  left: 30;
  width: 74%;
  z-index: 1000;
  display: flex;
  background-color: #ffff;
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

const ChatBottom = styled.div``;
