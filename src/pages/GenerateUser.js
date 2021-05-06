import React from "react";
import { useState, useEffect } from "react";
import { Button, Card } from "reactstrap";
import "./GenerateUser.css";

const GenerateUser = (props) => {
  // const url = `https://randomuser.me/api/?results=100`;
  // const [user, setUser] = useState(null);
  // const [userTeam, setUserTeam] = useState(null);

  // const getUser = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data.results[0].name);
  //   setUser(data);
  // };

  useEffect(() => {
    props.getUser();
  }, []);

  const loaded = () => {
    return (
      <div>
        <h4>Generate Different User</h4>
        <Button className="btn" onClick={props.getUser}>
          Generate Random User
        </Button>
      </div>
    );
  };

  // const addUser = (userData) => {
  //   console.log("addUser", userData)
  //    setUserTeam(userData);
  // };
  

  const getInfo = () => {
    return (
      <>
        <Button className="btn1" onClick={props.getUser}>
          Generate Random User
        </Button>
        <Card className="cardSpecific">
          <h1>
            {" "}
            {props.user.results[0].name.first} {props.user.results[0].name.last}{" "}
          </h1>
          <img className="image" src={props.user.results[0].picture.large}></img>
          <Button onClick={() => props.addUser(props.user.results[0])}>Add To Users</Button>
        </Card>
      </>
    );
  };

  const loading = () => {
    return (
      <div>
        <h4>Generate Different User</h4>
        <Button onClick={props.getUser}>Generate Random User</Button>
      </div>
    );
  };

  return props.user ? getInfo() : loading();
};

export default GenerateUser;