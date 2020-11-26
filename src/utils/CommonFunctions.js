export const convertDateTypeToInteger = (dateType) => {
    switch (dateType) {
        case "monthly":
            return [new Date().setMonth(new Date().getMonth() - 1), new Date().getTime() ]
        case "weekly":
            return [new Date().setDate(new Date().getDate() - 7), new Date().getTime() ]
        case "yearly":
            return [new Date().setFullYear(new Date().getFullYear() - 1), new Date().getTime() ]
        default: 
            return [new Date() - 30, new Date().getTime() ]
    }
}

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