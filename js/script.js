/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


 // Create an Array of objects to store the data for quotes 

 const quotes = [
   {
     "quote": "I've come to the realisation that I have absolutely no idea what I'm doing half the time.",
     "source": "David Bowie",
     "citation": "Pocket Bowie Wisdom Inspirational Words From A Rock Legend",
     "year": "1984"
   },
   {
    "quote": "We don't make mistakes, just happy little accidents.",
    "source": "Bob Ross",
    "citation": "",
    "year":""
   },
   {
    "quote": "Every child is an artist. The problem is how to remain an artist once we grow up.",
    "source": "Pablo Picasso",
    "citation": "",
    "year": ""
   },
   {
    "quote": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma– which is living with the results of other people's thinking.",
    "source": "Steve Jobs",
    "citation": "",
    "year": ""
   },
   {
    "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "source": "Ralph Waldo Emerson",
    "citation": "",
    "year": ""
   },
   {
    "quote": "You will face many defeats in life, but never let yourself be defeated.",
    "source": "Maya Angelou",
    "citation": "",
    "year": ""
  },
  {
   "quote": "Never let the fear of striking out keep you from playing the game.",
   "source": "Babe Ruth",
   "citation": "",
   "year": ""
  },
  {
   "quote": "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
   "source": "Marilyn Monroe",
   "citation": "",
   "year": ""
  },
  {
   "quote": "Love the life you live. Live the life you love.",
   "source": "Bob Marley",
   "citation": "",
   "year": ""
  },
  {
   "quote": "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or wheater you learn from it; whether you choose to persevere.",
   "source": "Barack Obama",
   "citation": "",
   "year": ""
  }

 ]





/***
 * `getRandomQuote` function
***/
 function getRandomQuote (array){
   //Creates the random number
   let randomNumber = Math.floor(Math.random() * quotes.length +1);
   
  
   for (var i = 0; i < array.length; i++) {
    var randomQuote = array[randomNumber];
    
  };
    
  return randomQuote; 
  
 };
   
 let result = getRandomQuote(quotes);





/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);