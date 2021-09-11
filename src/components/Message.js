import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";

const Message = ({ username, message, timestamp }) => {
  const date = new Date(decodeURIComponent(timestamp));
  const time = `${date.getUTCHours()}:${date.getUTCMinutes()}`;
  return (
    <MessageContainer>
      <Avatar />
      <MessageInfo>
        <h4>
          {username} <span>{time}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
};

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
