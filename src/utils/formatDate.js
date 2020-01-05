class FormatDate {
    static toYYMMDD(date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
}

module.exports = FormatDate;