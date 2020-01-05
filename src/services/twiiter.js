var Twit = require('twit');

class TwitterService {
    async getTweetsFromHashtag(hashtag = '', date = '') {
        var T = new Twit({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token: process.env.TWITTER_ACCESS_TOKEN,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        });
        const countOfTweetsPerRequest = 100; // This is the maximum tweets per request
        console.log(date)
        const response = await T.get('search/tweets', { q: `%23${hashtag} since:${date} -filter:retweets`, count: countOfTweetsPerRequest });
        return response.data.statuses;
    }
}

module.exports = TwitterService;