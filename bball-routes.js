const request = require('request');
const moment = require('moment');
const { response } = require('express');



var currentDate = moment().format().toString().split('T');
const options = {
  method: 'GET',
  url: 'https://api-basketball.p.rapidapi.com/games?',
  qs: {date: currentDate[0]},
  headers: {
    'x-rapidapi-host': 'api-basketball.p.rapidapi.com',
    'x-rapidapi-key': '5c4704c719msh0f08bd1ea31cf24p119c03jsnb8e576c8e250',
    useQueryString: true
  }
};

var getScores = function() {
  request(options, function (error, response, body) {
	if (error) throw new Error(error);


	let responseBody = JSON.parse(response.body)

    let responseArr = responseBody.response
    responseArr.forEach((ob)=>{
      if(ob.league.name==="NBA"){
       var scoreOb= [ob.teams.home.name, ob.scores.home.total, ob.teams.away.name, ob.scores.away.total]
       console.log(scoreOb)
      }
    })
});
};
getScores();
// module.exports=getScores());

