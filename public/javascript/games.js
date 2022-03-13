const router = require('express').Router();
const source = document.querySelector('#scores-template');
const handlebars = require('express-handlebars')

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

const scoreDiv = document.querySelector('.scores').addEventListener('click',(event)=>{
    event.preventDefault()
    document.location.replace('/dashboard')
    console.log("replacing")
})
