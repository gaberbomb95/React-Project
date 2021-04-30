# Project Overview

## Project Links

- [https://github.com/adgreenie/react.git](https://github.com/adgreenie/react.git)
- [https://answer10.web.app/](https://answer10.web.app/)

## Project Description

For this project, I plan to make a random user generator. I will use React's Link and Source to provide access to instructions. 500 random 'users' will be populated using an API call. 

## API

https://randomuser.me/api/?results=500


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

- [wireframes](https://wireframepro.mockflow.com/view/green-proj2-wireframe)
- [react architecture](https://sitemap.mockflow.com/view/green-proj2-architecture)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Fully functional, interactive, trivia game
	- Questions/possible answers populated by API call
	- Tells player if selected answer is correct
	- Keeps track of score
- Navbar with options that link to their corresponding pages
- Options page that allows player to select trivia theme/difficulty
- Instructions page

#### PostMVP EXAMPLE

- Leaderboard that is updated using Firebase
- Create multiple leaderboards depending on selected difficulty

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Main | Contains Switch/Routes for content |
| Gameboard | Renders the trivia game, contains score as state |
| Question | Renders current question via API call and Answer components |
| Answer | Renders a possible answer using props from Question |
| Score | Renders player's score received through props |
| HighScore | Form that renders at end of game if the player achieves a high score |
| Options | Renders a form of selectable game options |
| Instructions | Renders rules and info about the game |
| Leaderboard | Renders list of top scorers via API call |

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 | 40min | 40min |
| Basic Navbar & Footer | H | 1 | 45min | 45min |
| Set up basic React routing | H | 1 | 30min | 30min |
| Make trivia API call, parse important data | H | 2 | 1.5 | 1.5 |
| Display questions and selectable answers, change on submit | H | 3 | 4 | 4 |
| Create logic to test for correct answer | H | 1 | 35min | 35min |
| Allow only one answer to be selected per question | H | 1 | 1 | 1 |
| Keep track of score | H | 2 | 2 | 2 |
| Style game display - basic | H | 2 | 3 | 3 |
| Make game display dynamic | H | 1 | 1 | 1 |
| Create game options form | H | 3 | 3 | 3 |
| Incorporate selected options into API call | H | 1 | 1.5 | 1.5 |
| Add content for instructions page | H | 1 | 1 | 1 |
| Make Navbar dynamic using ReactStrap | H | 1 | 1 | INC |
| Learn how to use Firebase | M | 4 | 3 | 3 |
| Add submit your score form to end of game | M | 3 | 2 | 2 |
| Create leaderboard, populate locally | M | 3 | 3 | 3 |
| Update and populate leaderboard using Firebase | M | 3 | .5 | INC |
| Create multiple leaderboards, based on selected difficulty | L | 3 | 0 | INC |
| Additional styling for game (progress bar, etc.) | L | 4 | 5 | 5 |
| Additional styling for Navbar, Footer, other pages | L | 4 | 9 | 9 |
| Total | H | 45 | 44 | 44 |

## Additional Libraries
ReactStrap - responsive navbar, progress bar for game
Firebase - updating and retrieving leaderboard

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code.

The below code is how the leaderboard is populated. The shorter the name, the more dots are added between the name and score. The font size is set progressively smaller for each entry.

```
let fontSize = props.gameView ? 24 : 42

scoreList = props.highScores.map((highScore, i) => {
	let dots = ' . . . '   
	for (let j = highScore.name.length; j < 12; j += 2) {
		dots += '. '
	}
	if (i > 0) {
		let mult = (i < 3 ? 2 : 1)
		props.gameView ? fontSize -= 1 * mult : fontSize -= 3 * mult
	}
```
...
```
	return (
		<li style={{fontSize: `${fontSize}px`, color: color}} key={i}>
			<span className="bold">{`${i + 1}) `}</span>
			{highScore.name} {dots} {highScore.score}
		</li>
	) 
})
```
