import {
  Create,
  FiberManualRecord,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";

import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { API } from "aws-amplify";
import { listRooms } from "../graphql/queries";
import { onCreateRoom, onDeleteRoom } from "../graphql/subscriptions";
import { useState, useEffect } from "react";
import { selectUsername } from "../features/appSlice";
import { useSelector } from "react-redux";

const SideBar = () => {
  // fetch data from database
  const [rooms, setRooms] = useState([]);
  const username = useSelector(selectUsername);
  //Get All Room
  useEffect(() => {
    subscribeRoom();
    fetchAllRooms();
  }, []);

  const fetchAllRooms = async () => {
    try {
      const roomsData = await API.graphql({
        query: listRooms,
      });
      setRooms(roomsData.data.listRooms.items);
    } catch (error) {
      console.error(error);
    }
  };
  const subscribeRoom = () => {
    try {
      API.graphql({ query: onCreateRoom }).subscribe({
        next: (data) => {
          fetchAllRooms();
        },
      });
      API.graphql({ query: onDeleteRoom }).subscribe({
        next: (data) => {
          fetchAllRooms();
        },
      });
    } catch (error) {
      console.error("Lost Connection");
    }
  };

  return (
    <SidebarContainter>
      <SidebarHeader>
        <SidebarInfo>
          <h2>HQ</h2>
          <h3>
            <FiberManualRecord />
            {username ? username : "Anonymous"}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      {/* Function */}
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People & User Group" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channels" addChannelOption />
      {rooms.map((item, index) => (
        <SidebarOption
          id={item.id}
          title={item.name}
          key={item.id ? item.id : index}
          username={username}
        />
      ))}
    </SidebarContainter>
  );
};

export default SideBar;

const SidebarContainter = styled.div`
  color: white;
  background-color: var(--base-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #49274b;
  padding: 10px;
  > .MuiSvgIcon-root {
    padding: 4px;
    background-color: #ffff;
    color: #111;
    border-radius: 100%;
    cursor: pointer;
  }
  > .MuiSvgIcon-root:hover {
    opacity: 0.8;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-right: 2px;
    color: green; //pass props to chnage color status here
  }
`;
