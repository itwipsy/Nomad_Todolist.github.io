const quotes = [
    { 
        quote:"오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author:"앙드레 말로"
    },

    {   
        quote:"성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author:"톰 모나건"
    },

    {
        quote:"고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",
        author:"괴테"
    },
    
    { 
        quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author:"이소룡"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const TodayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = TodayQuote.quote;
author.innerText= TodayQuote.author;