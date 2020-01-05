class NumbersController {
    constructor(min = 0, max = 100) {
        this.min = +min;
        this.max = +max;
        this.range = max - min;
    }

    randomNumber() {
        const random = Math.floor(Math.random() * this.range);
        const result = random + this.min;
        return result;
    }
    randomNumbers(qtd) {
        let numbers = [];
        while (numbers.length <= qtd) {
            numbers.push(this.randomNumber());
        }
        return numbers;
    }
}

module.exports = NumbersController;