import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AddBook from './components/AddBook/AddBook';
import { createContext, useState } from 'react';
import Order from './components/Order/Order';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import CheckOut from './components/CheckOut/CheckOut';
import ManageBook from "./components/ManageBook/ManageBook";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    < UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivetRoute path="/books/:id">
            <CheckOut />
          </PrivetRoute>
          <PrivetRoute path="/admin">
            <AddBook />
          </PrivetRoute>
          <PrivetRoute path="/orders">
            <Order />
          </PrivetRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addBook">
            <AddBook />
          </Route>
          <Route path="/manageBook">
            <ManageBook />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
