import React from "react";
import { useState, useEffect } from "react";

const GenerateUser = (props) => {
  const url = `https://randomuser.me/api/?results=500`;
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

  return (
    <div>
      <button onClick={getUser}>Generate Random User</button>
    </div>
  );
  const loaded = () => {
    return (
      <div>
        <h1>
          {data.name[0]}/{data._id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  }; 
};

export default GenerateUser;
