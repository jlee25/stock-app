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

export const calculateProfitLoss = (firstDate, secondDate, amount, range) => {
    let profitLossObject = {};

    let rangeOfDates = range.map((item, index) => {
        return item[0]
    })

    let closestStartDate = rangeOfDates.reduce(function(prev, curr) {
        return (Math.abs(curr - firstDate) < Math.abs(prev - firstDate) ? curr : prev);
      });

    let closestEndDate = rangeOfDates.reduce(function(prev, curr) {
        return (Math.abs(curr - secondDate) < Math.abs(prev - secondDate) ? curr : prev);
    });

    let initialValue = range.find(value => value[0] === closestStartDate)
    let endValue = range.find(value => value[0] === closestEndDate)

    let profitLoss = amount*endValue[1] - amount*initialValue[1]
    
    profitLossObject.amount = Math.abs(profitLoss).toFixed(2);

    if (profitLoss > 0) {
        profitLossObject.type = "positive";
    } else {
        profitLossObject.type = "negative";
    }

    return profitLossObject;
}