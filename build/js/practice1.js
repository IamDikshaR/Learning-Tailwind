let btn = document.querySelector('#new');
let quote = document.querySelector('#quote')
let person = document.querySelector('#person')

const quotes = [{
    quote:`"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
    person: '-Thomas A. Edison'
},{
    quote:'"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."',
    person: '-Hellen Keller'
},{
    quote:`"Your time is limited, so don't waste it living someone else's life. Dont be trapped by dogma - which is living with the results of other people's thinking."`,
    person: '-Steve Jobs'
},{
    quote:'"The future belongs to those who believe in the beauty of their dreams."',
    person: '-Eleanor Roosevelt'
},{
    quote:`"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: '-Oprah Winfrey'
},{
    quote:'"The way to get started is to quit talking and begin doing."',
    person: '-Walt Disney'
},{
    quote:'"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."',
    person: '-Dr. Seuss'
},{
    quote:'"You must be the change you wish to see in the world."',
    person: '-Mahatma Gandhi'
},{
    quote:'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that"',
    person: '-Martin Luther King Jr'
},{
    quote:'"It is during our darkest moments that we must focus to see the light."',
    person: '-Aristotle'
},{
    quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    person:'-Nelson Mandela'
}]

btn.addEventListener('click', function()  {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})