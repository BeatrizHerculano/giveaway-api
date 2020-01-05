const express = require('express');
const router = express.Router();
const TwitterController = require('../src/controllers/twitter');

router.get('/:hashtag', async function (req, res, next) {
    const twitterController = new TwitterController(req);
    res.send(await twitterController.randomTweet(req));
});
module.exports = router;