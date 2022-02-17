import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";


/*!!!!!!!!!!!!!!!!!!!!!*/ 
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/App.css";
/*!!!!!!!!!!!!!!!!!!!!!!*/ 
import img from './components/assets/Logo.svg'
/*!!!!!!!!!!!!!!!!!!!!!!*/ 

import Login from "./components/autentification/Login";
import Registration from "./components/autentification/Registration";
import Profile from "./components/autentification/Profile";

import Home from "./components/base/Home";
import BoardAdmin from "./components/base/BoardAdmin";
import BoardUser from "./components/base/BoardUser";

import AddPerformance from "./components/performance/AddPerformance";
import Performance from "./components/performance/Performance";

import AddTicket from "./components/ticket/AddTicket";
import Ticket from "./components/ticket/Ticket";



import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';


const App = () => {

  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect( () => {
    history.listen( (location) => {
      dispatch(clearMessage());
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };





  return (
    <Router history={history}>
      <div class="st">
      
        <nav class="navbar navbar-expand navbar-light bg-light">
          

          <div class="navbar-nav mr-auto font-weight-bold">
            <li class="nav-item">
              <Link to={"/Home"} class="nav-link">
                Главная
              </Link>
            </li>


            <li class="nav-item ">
              <Link to={"/performance"} class="nav-link">
                Представления
              </Link>
            </li>


            <li class="nav-item">
              <Link to={"/ticket"} class="nav-link">
                Билеты
              </Link>
            </li>


            {showAdminBoard && (
              <li class="nav-item">
                <Link to={"/admin"} class="nav-link">
                  Управление
                </Link>
              </li>
            )}
      {/*
            {currentUser && (
              <li class="nav-item">
                <Link to={"/user"} class="nav-link">
                  Представления
                </Link>
              </li>
            )}
      */}
          </div>

          {currentUser ? (
            <div class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to={"/Profile"} class="nav-link">
                  Профиль
                </Link>
              </li>
              <li class="nav-item">
                <a href="/Login" class="nav-link" onClick={logOut}>
                  Выйти
                </a>
              </li>
            </div>
          ) : (
            <div class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to={"/Login"} class="nav-link">
                  Войти
                </Link>
              </li>

              <li class="nav-item">
                <Link to={"/Registration"} className="nav-link">
                  Зарегистрироваться
                </Link>
              </li>
            </div>
          )}
        </nav>


        <div className="container">
          <Switch>
            <Route exact path={["/", "/Home"]} component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Registration" component={Registration} />
            <Route exact path="/Profile" component={Profile} />


            <Route exact path="/Performance" component={Performance} />
            <Route exact path="/Ticket" component={Ticket} />

            <Route exact path="/addperformance" component={AddPerformance} />
            <Route exact path="/addticket" component={AddTicket} />


            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />

          </Switch>
        </div>




        

      </div>
    </Router>
  );
};

export default App;



















