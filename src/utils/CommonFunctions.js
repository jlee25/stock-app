export const convertDateToInteger = (dates) => {
    if (dates.length > 0) {
        return (
            dates.map(date => new Date(date).getTime())
        )
    } else {
        return (
            new Date(dates).getTime()
        )
    }
}

export const getOldDates = () => {
    let today = new Date()
    let priorDate = new Date().setDate(today.getDate() -30 )
    return priorDate
}