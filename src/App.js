
import Home from "./Components/Home/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import AddService from "./Components/Admin/AddService/AddService";
import Login from "./Components/Login/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import CheckOut from "./Components/Admin/CheckOut/CheckOut";
export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <div>

      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <PrivateRoute path="/admin">
        <AddService></AddService>
          </PrivateRoute>
          <Route path="/login">
        <Login></Login>
          </Route>
          <PrivateRoute path="/checkOut/:serviceId">
        <CheckOut></CheckOut>
          </PrivateRoute>
       

        </Switch>
      </Router>
     
      
    </div>
    </UserContext.Provider>

  );
}

export default App;
