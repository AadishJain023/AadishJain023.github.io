
const request = require('request')
// const chalk = require('chalk')


// const stock = (stockName,startDate,endDate,callback) => {
    // const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=M&M&interval=5min&apikey=JANQPW68DLLIWVHV'

    // request({url, json:true}, (error, response, body) => {
    //     if(error){
    //         callback('Unable to fetch data please check internet connection',undefined)
    //     }else if(response.statusCode !== 200){
    //         callback(res.statusCode,undefined)
    //     }else{
    //         console.log(body)
    //     }
    
    // })

    

// }

const stock = (stockName,callback) => {
    const options = {
        method: 'GET',
        url: 'https://real-time-finance-data.p.rapidapi.com/stock-overview',
        qs: {
            symbol: stockName,
            language: 'en'
        },
      headers: {
        'x-rapidapi-key': '3bb4dfe49bmsh7151205d7147236p10423fjsn447eb0073bec',
        'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
      }
    };
    request(options, (error, response, body) => {
        if (error){
           return callback('Unable to fetch data please check internet connection',undefined)
        }
        const parsedBody = JSON.parse(body)
        if(Object.values(parsedBody.data).length === 0){
            callback('Enter Valid Stock',undefined)
        }
        else{
            callback(undefined,{
                Name: parsedBody.data.name,
                Currency: parsedBody.data.currency,
                ClosingPrice: parsedBody.data.price,
                OpenPrice: parsedBody.data.open,
                High: parsedBody.data.high,
                Low: parsedBody.data.low,
                Exchange: parsedBody.data.exchange,
                About: parsedBody.data.about
            });
        }
    });
}

module.exports = stock

