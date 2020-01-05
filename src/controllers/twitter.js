const TwitterBusiness = require('../business/twitter');
const FormatDate = require('../utils/formatDate');
class TwitterController {
    constructor(req) {
        this.hashtag = req.params.hashtag;
        const date = new Date();
        this.date = req.query.initDate ? req.query.initDate : FormatDate.toYYMMDD(date);
    }
    async randomTweet() {
        const business = new TwitterBusiness();
        const randomTweet = await business.sortRandomTweetFromHashtagAndDate(this.hashtag, this.date);
        if (randomTweet) {
            return { user_account: randomTweet.user.screen_name, tweet: randomTweet.text, date: randomTweet };
        }
        else return `Nenhum tweet encontrado para a hashtag #${this.hashtag} na data ${this.date}`
    }
}

module.exports = TwitterController;