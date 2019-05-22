const superagent = require('superagent')
const api = 'https://evening-everglades-47925.herokuapp.com/api';


const getBookPrediction = async ({
  q1,
  q2,
  q3,
  q4,
  q5,
  q6
}) => {
  let result;
  let error;
  
  await superagent
    .post(api)
    .send({
      q1,
      q2,
      q3,
      q4,
      q5,
      q6
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
  