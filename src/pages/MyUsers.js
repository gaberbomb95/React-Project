import React from 'react'
import { Card, Button } from 'reactstrap'
import "./MyUsers.css"

const MyUsers = (props) => {
    return (
        <div className="flex">
            {props.userTeam.map((user) => {
                return  <Card className="cardTeam">
                <h1>
                  {" "}
                  {user.name.first} {user.name.last}{" "}
                </h1>
                <img className="image2" src={user.picture.large}></img>
              </Card>
            })}
        </div>
    )
}

export default MyUsers

