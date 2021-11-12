import "./App.css";
import BottomNav from "./components/Utils/BottomNav";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import Notifications from "./components/Notifications/Notifications";
import History from "./components/History/History";
import Account from "./components/Account/Account";
import {WebcamCapture} from "./components/Webcam/WebcamCapture";

import { HelpCenter } from "./components/HelpCenter/HelpCenter";

import { Refer } from "./components/Refer/Refer.jsx";

import { About } from "./components/About/About";

import { Terms } from "./components/Terms/Terms";

import { Privacy } from "./components/PrivacyPolicy/Privacy";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F5617F",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/notifications">
            <Notifications />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/webcam">
            <WebcamCapture />
          </Route>
        </Switch>

      {/* <HelpCenter /> */}
      {/* <Refer /> */}
      {/* <About /> */}
      {/* <Terms /> */}
      {/* <Privacy /> */}
      
      </div>
    </ThemeProvider>
  );
}

export default App;
