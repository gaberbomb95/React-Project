import React from "react";
import { Card } from "reactstrap";
import "./Home.css";

const Home = (props) => {
  return (
    <Card className='home'>
      <h1>Generate Random User</h1>
      <br></br>
      <p>This app lets you generate a random user</p>
      <p>To generate a random user click on "Generate User"</p>
      <p>To generate add random user to your users click "Add User"</p>
      <p>To see your user list click "My Users" next to "Generate User"</p>
    </Card>
  );
};

export default Home;
