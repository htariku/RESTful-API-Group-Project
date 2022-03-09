const router = require('express').Router();
// const scores= require('/controllers/bball-routes.js')
// const source = document.querySelector('#scores-template');
// const template = handlebars.compile(source);
var Scores = fetch('/scores')
var scoreData = {
    away:{
        score: scores.then(value => value[0]),
        name:scores.then(value => value[1])
    },  
    home:{
        score: scores.then(value => value[2]),
        name:scores.then(value => value[3]),

}
}
var html = template(scoreData);
const scoreDiv = document.querySelector('.scores').addEventListener('click',(event)=>{
    event.preventDefault()
    document.location.replace('/dashboard')
    console.log("replacing")
})
console.log(scoreData);
