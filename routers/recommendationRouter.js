const express = require('express');
const getBookRecommendation = require('../helpers/getBookRecommendation');

const router = express.Router();

// takes in answers (as string) - returns recommendation based on machine learning model
router.post("/recommend", async (req, res) => {
  const {
    Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    Q6
  } = req.body;

  const answers = {
    Q1,
    Q2,
    Q3,
    Q4,
    Q5,
    Q6
  };

  // checks that all questions are answered
  const recommendation = await getBookRecommendation(answers);
      try{
          if (recommendation) {
            res.status(200).json({ ...recommendation});
          } else {
            throw "Please answer all the questions";
          }
      } catch (error) {
    res.status(500).json({
      message: "Error recommending book"
    });
  }
});

module.exports = router;