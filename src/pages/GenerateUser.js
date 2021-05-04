import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "reactstrap";
import "./GenerateUser.css";

const GenerateUser = (props) => {
  const url = `https://randomuser.me/api/?results=100`;
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0].name);
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h4>Generate Different User</h4>
        <Button className="btn" onClick={getUser}>Generate Random User</Button>
      </div>
    );
  };

  const addUser = () => {
    return 
  }

  const getInfo = () => {
    console.log(user);
    return (
      <>
        <Button className="btn1" onClick={getUser}>Generate Random User</Button>
        <Card className="cardSpecific">
         <h1> {user.results[0].name.first} {user.results[0].name.last}{" "}</h1>
          <img className="image" src={user.results[0].picture.large}></img>
          <Button onClick={props.addUser}>Add To Users</Button>
        </Card>
      </>

    );
  };

  const loading = () => {
    return (
      <div>
        <h4>Generate Different User</h4>
        <Button onClick={getUser}>Generate Random User</Button>
      </div>
    );
  };

  return user ? getInfo() : loading();
};

export default GenerateUser;
