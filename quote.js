const quotes = [
{
    quote:"When you go through hardships and decide not to surrender, that is strength.",
    author:"- Arnold Schwarzenegger",
},
{
    quote:"It is kind of fun to do the impossible.",
    author:"- Walt Disney",
},
{
    quote:"There are better starters than me but I’m a strong finisher.",
    author:"- Usain Bolt",
},
{
    quote:"Grind Hard, Shine Hard.",
    author:"- Dwayne Johnson",
},
{
    quote:"Tough times never last, but tough people do.",
    author:"- Robert H. Schuller",
},
{
    quote:"I’ve failed over and over and over again in my life and that is why I succeed.",
    author:"- Michael Jordan",
},
{
    quote:"But I know, somehow, that only when it is dark enough can you see the stars.",
    author:"- Martin Luther King, Jr",
},
{
    quote:"Success usually comes to those who are too busy to be looking for it.",
    author:"- Henry David Thoreau",
},
{
    quote:"All progress takes place outside the comfort zone.",
    author:"- Michael John Bobak",
},
{
    quote:"The way to get started is to quit talking and begin doing.",
    author:"- Walt Disney",
},
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;