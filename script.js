const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Great things never come from comfort zones. - Neil Strauss",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

document.getElementById("newQuoteBtn").addEventListener("click", generateQuote);