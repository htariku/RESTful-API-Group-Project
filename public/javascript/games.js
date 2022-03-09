const router = require('express').Router();
const source = document.querySelector('#scores-template');
const template = handlebars.compile(source);
var scores = await fetch('/scores')
var scoreData = {
    away:{
        score: 45688,
        name:"Assholes"
    },  
    home:{
        score: 123131,//api data
        name:"Other"///api data
    }
}
var html = template(scoreData);
const scoreDiv = document.querySelector('.scores').addEventListener('click',(event)=>{
    event.preventDefault()
    document.location.replace('/dashboard')
    console.log("replacing")
})
