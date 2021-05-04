import "./App.css";
import { Route, Switch } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import GenerateUser from "./pages/GenerateUser";



function App() {

  const addUser = () => {
    console.log("addUser")
  }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/generateuser">
          <GenerateUser addUser={addUser} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
