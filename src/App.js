import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPatients from "./Components/AllPatients/AllPatients/AllPatients";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import AddDoctor from "./Components/DashBoard/AddDoctor/AddDoctor";
import DashBoard from "./Components/DashBoard/DashBoard/DashBoard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard/appointment">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <PrivateRoute path="/dashBoard/allPatient">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <Route path="/dashBoard/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
