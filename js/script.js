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
    "year": "",
    "tags":"Creativity, Inspiration"
   },
   {
    "quote": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma– which is living with the results of other people's thinking.",
    "source": "Steve Jobs",
    "citation": "",
    "year": "",
    "tags":"Inspiration", 
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
   "year": "",
   "tags": "Grit, Determination"
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
   "year": "2008"
  }

 ]





/***
 * `getRandomQuote` function
***/
 function getRandomQuote (){
   //Create the variable that generates a random number between zero and the last index in the quotes array
   let randomNumber = Math.ceil(Math.random() * quotes.length -1);

   //Use the random number variable and bracket notation to grab a random object from the 'quotes' array 
   return quotes[randomNumber];
   
  };

  
  

 





/***
 * `printQuote` function
***/
 function printQuote () {
  // 1. Create a variable that calls the getRandomQuote() 
  // function
  let selectQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now
  let selectHtml = `<p class= "quote"> ${selectQuote.quote}</p> <p class= "source"> ${selectQuote.source}`

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
  if (selectQuote.citation) {
    selectHtml += `<span class="citation">${selectQuote.citation}</span>`
  };



  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string
  if(selectQuote.year){
    selectHtml += `<span class="year">${selectQuote.year}</span>`
  
  };

  if(selectQuote.tags){
    selectHtml += `<span class="tags">${selectQuote.tags}</span>`
  
  };

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string
  selectHtml += `</p>`;



  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string
  document.getElementById('quote-box').innerHTML = selectHtml;

};
  
  //Generates random color background
function setBg () {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  randomColor.innerHTML = "#" + randomColor;
  
};

setInterval(function(){ setBg }, 3000);




 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.addEventListener("click", setBg)
