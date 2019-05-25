const superagent = require('superagent')
const api = 'https://evening-everglades-47925.herokuapp.com/api';


const getBookPrediction = async ({
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6
}) => {
  let result;
  let error;
  
  await superagent
    .post(api)
    .send({
      Q1,
      Q2,
      Q3,
      Q4,
      Q5,
      Q6
    })
    .then(res => {
      result = res.body;
    })
    .catch(err => {
      error = err;
    });

  return result;
};
  
  module.exports = getBookPrediction;
  