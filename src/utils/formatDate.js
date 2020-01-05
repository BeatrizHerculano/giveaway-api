class FormatDate {
    static toYYMMDD(date) {
        return `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`
    }
}

module.exports = FormatDate;