const NumberBusiness = require('../business/number');
class NumberController {
    constructor(req, numberController) {
        this.req = req
        this.min = req.query.min;
        this.max = req.query.max;
    }

    getRandomNumber() {
        return (new NumberBusiness(this.min, this.max)).randomNumber();
    }

    getRandomNumbers() {
        return (new NumberBusiness(this.min, this.max)).randomNumbers();
    }
}

module.exports = NumberController;