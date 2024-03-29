const router = require('express').Router();

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

router.get('/trends', async (req, res, next) => {
  const id = req.query.woeid
  const trends = await client.get('trends/place.json', {
    id: 1,
  })
  res.send(trends);
});

module.exports = router;
