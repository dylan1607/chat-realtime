import styled from "styled-components";
import { API, graphqlOperation } from "aws-amplify";
import { createRoom, deleteRoom } from "../graphql/mutations";
import { Delete } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

const SidebarOption = ({ title, Icon, addChannelOption, id }) => {
  const dispatch = useDispatch();
  const addChannel = async () => {
    try {
      const channelName = prompt("Please enter the name");
      if (!channelName) return;
      await API.graphql(
        graphqlOperation(createRoom, { input: { name: channelName } })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteChannel = async () => {
    try {
      await API.graphql(graphqlOperation(deleteRoom, { input: { id: id } }));
    } catch (error) {
      console.error(error);
    }
  };

  const selectChannel = () => {
    if (id) {
      console.log(id);
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <Delete onClick={deleteChannel} /># {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  padding-left: 2px;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
`;

const SidebarOptionChannel = styled.h3`
  display: flex;
  align-items: center;
  > .MuiSvgIcon-root {
    padding: 15px;
    :hover {
      opacity: 0.9;
      background-color: #340e36;
    }
  }
`;
