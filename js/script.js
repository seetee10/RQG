/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let html = '';
let quotes = [
		{
		quote: "1. Technology, through automation and artificial intelligence, is definitely one of the most disruptive sources.",
		source: 'Alain Dehaze',
    citation: 'Quote By Alain Dehaze KeenBrain. Retrieved May 20, 2019',
    year: '2017'
		},
		{
		quote: "2. It is one of my sources of happiness never to desire a knowledge of other people's business",
		source: 'brainyquote.com',
    citation: 'brainyquote.com',
    year: ''
		},
		{
		quote: "3. A little Learning is a dang’rous Thing",
		source: 'Internet',
		citation: 'Google search',
    year: '2013'
    },
		{
		quote: "4. The best preparation for tomorrow is doing your best today.",
		source: 'H. Jackson Brown Jr',
		citation: 'Brainy Quote',
    year: '1970'
		},
		{
		quote: "5. Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
		source: 'St Jerome',
	  citation: 'Brainy Quote',
    year: '385AD'
		},
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  let numberOfRandomQuotes;
  let randomQuote;
  numberOfRandomQuotes = Math.floor(Math.random() * quotes.length)
  return numberOfRandomQuotes;
  console.log(numberOfRandomQuotes);

  };

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function print(html) {
  var div = document.getElementById('quote-box');
  div.innerHTML = html;
}

function printQuote()  {
  html = '';
  let randomQuote = getRandomQuote();
  randomQuote;
  if (quotes[randomQuote].citation === '' || quotes[randomQuote].year === '') {
    printQuote();
  } else {
      html += '<p>' + quotes[randomQuote].quote + '</p>';
      html += '<p>'+quotes[randomQuote].source + '</p>';
      print(html);
  }
}

//printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
