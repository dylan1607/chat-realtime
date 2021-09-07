import styled from "styled-components";

const SidebarOption = ({ title, Icon, addChannelOption }) => {
  const addChannel = () => {};
  //   const channelName = prompt("Please enter the name");
  const selectChannel = () => {};
  return (
    <SidebarOptionContainer
    //   onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
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
  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.div``;
