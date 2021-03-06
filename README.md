# Project Overview

## Project Links

- [Github-Link](https://github.com/gaberbomb95/React-Project)
- [Vercel-Link](https://react-project-five.vercel.app/)

## Project Description

For this project, I plan to make a random user generator. I will use React's Link and Source to provide access to instructions. 100 random 'users' will be populated using an API call. 

## API

- [API-Link](https://randomuser.me/api/?results=100)


```
{
{
"gender": "female",
"name": {
"title": "Miss",
"first": "Aleena",
"last": "Erikstad"
},
"location": {
"street": {
"number": 8009,
"name": "Noreveien"
},
"city": "Sogndalsfjøra",
"state": "Vestfold",
"country": "Norway",
"postcode": "4640",
"coordinates": {
"latitude": "54.2817",
"longitude": "94.2900"
},
"timezone": {
"offset": "+6:00",
"description": "Almaty, Dhaka, Colombo"
}
},
"email": "aleena.erikstad@example.com",
"login": {
"uuid": "024cc9bf-8c1c-4534-8b33-f7c25246b4a9",
"username": "brownwolf527",
"password": "carpedie",
"salt": "WfVtosFS",
"md5": "6ec5b7bb1c3fbd8ec92a87069aa0a47c",
"sha1": "519256aa3136b1426f2e6c3ad2c3d6807b1290c7",
"sha256": "dba7343b1cec0a43dc8320de95a2456b78a72c6c75a160e6f0d923a8bfce6912"
},
"dob": {
"date": "1985-05-29T03:59:25.179Z",
"age": 36
},
"registered": {
"date": "2004-09-23T22:10:41.025Z",
"age": 17
},
"phone": "22472664",
"cell": "40096259",
"id": {
"name": "FN",
"value": "29058510007"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/34.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
},
"nat": "NO"
},
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [wireframes](https://res.cloudinary.com/dwoglig0f/image/upload/v1619798622/IMG-5009_1_lbw3ut.jpg)
- [react architecture](https://res.cloudinary.com/dwoglig0f/image/upload/v1619798602/IMG-5008_1_mp5kxa.jpg)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Fully functional, random user generator
- option to add user to a 'myusers' section
-option to remove user from 'myusers' section
- Navbar with options that link to their corresponding pages

#### PostMVP EXAMPLE

- ability to pull source code and render specific user data on another website


## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Generate User (Button) | Renders the trivia game, contains score as state |
| Footer | Renders the footer |
| UserData | Renders the 'user' info |
| MyTeam | saves user info that you want to use |



Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 30min | 15min | 15min |
| Basic Navbar & Footer | H | 30min | 1hrs | 1hrs |
| Pull user data and render it on page | H | 5hrs | 30hrs | 30hrs |
| (PostMVP) spit out src code | L | 10hrs | TBD | TBD |
| (PostMVP) implement ReactStrap | H | 5hrs | 2.5hrs | 2.5hrs |
| Styling for entire app, other pages | M | 5hrs | 2.5hrs | 2.5hrs |
| Total | H | 26hrs | 36.25hrs | 36.25hrs |

## Additional Libraries
ReactStrap

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.

The below code is how the user information is populated and it took a lot longer to get it working than I thought it would.

```
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



