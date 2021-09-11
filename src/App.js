import { React, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Chat from "./components/Chat";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";
import { enterRoom } from "./features/appSlice";

function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      dispatch(enterRoom({ username: user.username }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  });

  return (
    <Router>
      <Header />
      <AppBody>
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Chat />
          </Route>
        </Switch>
      </AppBody>
    </Router>
  );
}

// export default App;
export default withAuthenticator(App);

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
