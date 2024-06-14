console.log('Client side java script')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const messageSeven = document.querySelector('#message-7')
const messageEight = document.querySelector('#message-8')

messageOne.textContent = 'Waiting for Input'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''
    messageSix.textContent = ''
    messageSeven.textContent = ''
    messageEight.textContent = ''

    const stock = search.value 
    console.log(stock)

    fetch('https://stock-details-uyib.onrender.com/stock?stockName='+encodeURIComponent(stock)).then((response) => {
        response.json().then((data) => {
            if(data.error){
                messageTwo.textContent = data.error
            console.log(data.error)
            }else{
                messageOne.textContent = 'Name : ' + data.Name
                messageTwo.textContent = 'Currency : ' + data.Currency
                messageThree.textContent = 'Opening Price : ' + data.OpenPrice
                messageFour.textContent = 'Closing Price : ' + data.ClosingPrice
                messageFive.textContent = 'High : ' + data.High
                messageSix.textContent = 'Low : ' + data.Low
                messageSeven.textContent = 'Exchange : ' + data.Exchange
                messageEight.textContent =  data.About

                console.log(data)
            }
        })   
    })
})