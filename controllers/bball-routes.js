const moment = require('moment');
const { response } = require('express');
var currentDate = moment().format().toString().split('T');
var axios = require("axios").default;
const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/',(req, res) => {
    getScore().then(value => {
        var respArray=[]
        value.forEach(val => {
            if (val.league.name === "NBA") {
                var scoreStream = [val.teams.home.name, val.scores.home.total, val.teams.away.name, val.scores.away.total]
                respArray.push(scoreStream)
            }

        })
        return respArray

    }).then(respArray =>{
        const post = respArray.map(value => {
           return value.join(" ")+"\n";
        })
        res.render('scores',{post});
    })



})

var options = {
  method: 'GET',
  url: 'https://api-basketball.p.rapidapi.com/games?',
  params: { date: currentDate[0] },
  headers: {
    'x-rapidapi-host': 'api-basketball.p.rapidapi.com',
    'x-rapidapi-key': '5c4704c719msh0f08bd1ea31cf24p119c03jsnb8e576c8e250'
  }
};

// var getScore= function(){
//    axios.request(options)
//   .then(function (response) {
//     let responseArr = response.data.response
//     responseArr.forEach((ob) => {
//       if (ob.league.name === "NBA") {
//         var scoreOb= [ob.teams.home.name, ob.scores.home.total, ob.teams.away.name, ob.scores.away.total]
//         // console.log(scoreOb)
//         return scoreOb
//       };
//     })
//   }, error=>{
//       console.log(error.toString())
//   })
// };

var getScore= function(){
   var scores= axios.request(options)
        .then(function (response) {
            return response.data.response}
         , error=>{
            console.log(error.toString())
        })
    return scores;
};

isFulfilled = false;
var responArray= getScore().then(value => {
    var respArray=[]
    value.forEach(val => {
        if (val.league.name === "NBA") {
            var scoreStream = [val.teams.home.name, val.scores.home.total, val.teams.away.name, val.scores.away.total]
            respArray.push(scoreStream)
        }

    })
    return respArray

}

)
// while(!isFulfilled){
//     console.log(isFulfilled)
// }



// const options = {
//   method: 'GET',
//   url: 'https://api-basketball.p.rapidapi.com/games?',
//   qs: {date: currentDate[0]},
//   headers: {
//     'x-rapidapi-host': 'api-basketball.p.rapidapi.com',
//     'x-rapidapi-key': '5c4704c719msh0f08bd1ea31cf24p119c03jsnb8e576c8e250',
//     useQueryString: true
//   }
// };

// var getScores = async function() {
//   request(options, function (error, response, body) {
// 	if (error) throw new Error(error);


	// let responseBody = JSON.parse(response.body)

  //   let responseArr = responseBody.response
  //   responseArr.forEach((ob)=>{
  //     if(ob.league.name==="NBA"){
  //      var scoreOb= [ob.teams.home.name, ob.scores.home.total, ob.teams.away.name, ob.scores.away.total]
  //      console.log(scoreOb)
//       }
//     })
// });
// };
module.exports=router;
