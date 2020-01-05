const TwitterService = require('../services/twiiter');
class TwitterBusiness {

    async sortRandomTweetFromHashtagAndDate(hashtag, date) {
        const tweets = await (new TwitterService()).getTweetsFromHashtag(hashtag, date);
        console.log(tweets.length)
        const randomIndex = Math.floor(Math.random() * tweets.length)
        const randomTweet = tweets[randomIndex];
        return randomTweet;
    }
}

module.exports = TwitterBusiness;