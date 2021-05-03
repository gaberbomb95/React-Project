import React from "react";
import { useState, useEffect } from "react";
import { Button } from 'reactstrap'
import './GenerateUser.css'

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
      <div className="loaded">
        <Button onClick={getUser}>Generate Random User</Button>
        <h4>Generate Different User</h4>
      </div>
    );
  };

  const loading = () => {
    return <Button onClick={getUser}>Generate Random User</Button>;
  };

  return user ? loaded() : loading();
};

export default GenerateUser;
