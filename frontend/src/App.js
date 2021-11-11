import "./App.css";
import BottomNav from "./components/Utils/BottomNav";

<<<<<<< HEAD
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Switch } from "react-router-dom";
=======
import './App.css';
>>>>>>> 0ee067552aa75106ec21114091b0703e3b1d47f4

import Home from "./components/Home/Home";
import Notifications from "./components/Notifications/Notifications";
import History from "./components/History/History";
import Account from "./components/Account/Account";

// import {HelpCenter} from './components/HelpCenter/HelpCenter';

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
        </Switch>
    </div>
    </ThemeProvider>

    // <HelpCenter />
  );
}

export default App;
