"use strict";

var boxName = React.createElement("div", null, "JORGE CHAVEZ");
var headshot = React.createElement("img", {
  id: "headshotImg",
  src: "/image/headshot.jpg",
  alt: "Image of Jorge Chavez"
});
var description = React.createElement("p", null, "Hi, I am Jorge Chavez a 26 year old student at San Diego State University who is pursuing a Master's degree in Computer Science. I currently have a job as a Software Engineer, and I really enjoy writing software and learning new technologies. One of my favorites hobbies is to play online games with my friends. I have a github repo that I am currently working to improve, check it out by pressing the link below!");
var repoLink = React.createElement("form", {
  action: "https://github.com/jorgech1993/CS648--Modern-Full-Stack-Dev"
}, React.createElement("button", {
  type: "submit"
}, "VIEW MY GITHUB REPO"));
ReactDOM.render(boxName, document.getElementById('boxName'));
ReactDOM.render(headshot, document.getElementById('headshot'));
ReactDOM.render(description, document.getElementById('description'));
ReactDOM.render(repoLink, document.getElementById('githubLink'));