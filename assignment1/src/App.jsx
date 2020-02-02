const boxName = (
	<div>
		JORGE CHAVEZ 
	</div>
);

const headshot = (
	<img id = "headshotImg" src={ "/image/headshot.jpg" } alt = "Image of Jorge Chavez"/>
);

const description = (
	<p>Hi, I am Jorge Chavez a 26 year old student at San Diego State University who is pursuing a Master's degree in Computer Science.
	 I currently have a job as a Software Engineer, and I really enjoy writing software and learning new technologies.
	 One of my favorites hobbies is to play online games with my friends. I have a github repo that I am currently working to improve, check it out
	 by pressing the link below!</p>
);

const repoLink = (
	<form action="https://github.com/jorgech1993/Assignment1">
		<button type="submit">VIEW MY GITHUB REPO</button>
	</form>
);

ReactDOM.render(boxName, document.getElementById('boxName'));
ReactDOM.render(headshot, document.getElementById('headshot'));
ReactDOM.render(description, document.getElementById('description'));
ReactDOM.render(repoLink, document.getElementById('githubLink'));
