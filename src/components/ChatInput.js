import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { API } from "aws-amplify";
import { createMessage } from "../graphql/mutations";

const ChatInput = ({ username, channelName, channelId }) => {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) return false;
    addMessage();
  };
  const addMessage = async () => {
    try {
      if (input.length === 0 || !channelId) return;
      await API.graphql({
        query: createMessage,
        variables: {
          input: {
            roomMessagesId: channelId,
            username: username,
            payload: input,
          },
        },
      });
      setInput("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          placeholder={`Send to #${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FunctionContainer>
          <Button hidden type="submit" onClick={sendMessage}>
            <Send />
          </Button>
        </FunctionContainer>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  > form {
    position: fixed;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    width: 70%;
    border: 1px solid lightgray;
    border-radius: 8px;
    background-color: #ffff;
  }
  > form > input {
    font-size: 1.25rem;
    border: none;
    margin: 15px;
    outline: none;
  }
`;
const FunctionContainer = styled.div`
  border-top: 1px solid lightgray;
  padding: 6px;
  > button {
    background-color: green;
    color: #ffff;
    padding: 10px 0;
    :hover {
      background-color: gray;
    }
  }
`;
