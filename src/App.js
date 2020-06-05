import React from 'react';
import {Route,Switch} from 'react-router-dom'
import {Home} from "./Pages/Home/Home";
import {About} from "./Pages/About/About";
import {NavBar} from "./Components/Navbar";
import {Alert} from "./Components/Alert";
function App() {
  return (
      <>
        <NavBar />
        <div className="container pt-4">
            <Alert />
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route path={"/about"} component={About}/>
            </Switch>
        </div>
      </>
  );
}

export default App;
