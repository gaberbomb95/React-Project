import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import GenerateUser from "./pages/GenerateUser";
import { useState } from "react";
import MyUsers from "./pages/MyUsers"

function App() {
  const url = `https://randomuser.me/api/?results=100`;
  const [user, setUser] = useState(null);
  const [userTeam, setUserTeam] = useState(null);

  const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0].name);
    setUser(data);
  };

  const addUser = (userData) => {
    console.log(userData);
    setUserTeam(userData);
    
  };

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/generateuser">
          <GenerateUser addUser={addUser} user={user} getUser={getUser} />
        </Route>

        <Route path='/myusers'>
          <MyUsers userTeam={userTeam} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
