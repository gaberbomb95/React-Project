import React from 'react'
import {Card, Button} from 'reactstrap'

const MyUsers = (props) => {
    return (
        <div>
            {props.userTeam.map((user) => {
                return  <Card className="cardTeam">
                <h1>
                  {" "}
                  {user.name.first} {user.name.last}{" "}
                </h1>
                <img className="image" src={user.picture.large}></img>
                <Button onClick={() => props.addUser(user)}>Add To Users</Button>
              </Card>
            })}
        </div>
    )
}

export default MyUsers

