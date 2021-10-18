import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import Customerdetail from "./components/Customerdetail";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Createcustomer from "./components/Createcustomer";
import Createmovie from "./components/Createmovie";
import Editcustomer from "./components/Editcustomer";
import Customerlist from "./components/Customerlist";
import Movielist from "./components/Movielist";
import Editmovie from "./components/Editmovie";
import Movielistuser from "./components/Movielistuser";
import Rentdetail from "./components/Rentdetail";
import Logoutbutton from "./components/Logoutbutton";
import Profile from "./components/Profile";
import Loading from "./components/Loading";
import Login from "./components/Login";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand>
                  <Link to={"/Login"} className="nav-link">
                    Movie Rental System
                  </Link>
                </Navbar.Brand>

                {isAuthenticated && (
                  <Nav className="justify-content-end">
                    <Nav>
                      <Link to={"/Movielistuser"} className="nav-link">
                        Movies
                      </Link>
                    </Nav>
                    <Nav>
                      <Link to={"/Createcustomer"} className="nav-link">
                        Create Customer
                      </Link>
                    </Nav>
                    <Nav>
                      <Link to={"/Customerlist"} className="nav-link">
                        Customer List
                      </Link>
                    </Nav>

                    {/* <Nav>
                      <Link to={"/Customerdetail"} className="nav-link">
                        Customer Detail
                      </Link>
                    </Nav> */}

                    <Nav>
                      <Link to={"/Createmovie"} className="nav-link">
                        Create Movie
                      </Link>
                    </Nav>

                    <Nav>
                      <Link to={"/Movielist"} className="nav-link">
                        Movie List
                      </Link>
                    </Nav>

                    <Nav>
                      <Link to={"/Rentdetail"} className="nav-link">
                        Rent Details
                      </Link>
                    </Nav>
                  </Nav>
                )}

                <Nav className="nav-link">
                  <>
                    <Logoutbutton />
                  </>
                </Nav>
                <Nav>
                  <Profile />
                </Nav>
              </Container>
            </Navbar>
          </header>

          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper">
                  <Switch>
                    <Route exact path="/" component={Movielistuser} />
                    <Route path="/Createcustomer" component={Createcustomer} />
                    <Route path="/Createmovie" component={Createmovie} />
                    <Route path="/edit-customer/:id" component={Editcustomer} />
                    <Route path="/edit-movie/:id" component={Editmovie} />
                    <Route path="/Customerlist" component={Customerlist} />
                    <Route path="/Customerdetail" component={Customerdetail} />
                    <Route path="/Movielist" component={Movielist} />
                    <Route path="/Movielistuser" component={Movielistuser} />
                    <Route path="/Rentdetail" component={Rentdetail} />
                    <Route path="/Login" component={Login} />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
