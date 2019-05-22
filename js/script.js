
/*
  -Create an array of quote objects with properties of quotes, source, citation & year.
*/
let quotes = [
		{
		quote: "Technology, through automation and artificial intelligence, is definitely one of the most disruptive sources.",
		source: "Alain Dehaze",
    citation: '',
    year: "2017"
		},
		{
		quote: "It is one of my sources of happiness never to desire a knowledge of other people's business",
		source: 'Fran Leibowitz',
    citation: 'Metropolitan Life',
    year: ''
		},
		{
		quote: "The force is strong with this one",
		source: "Darth Vader",
		citation: "The Empire Strikes Back",
    year: "1980"
    },
		{
		quote: "The best preparation for tomorrow is doing your best today.",
		source: "H. Jackson Brown Jr",
		citation: '',
    year: ''
		},
		{
		quote: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
		source: 'St Jerome',
	  citation: '',
    year: ''
		},
];

//display arrary of objects in the console when the page initally loads
console.log(quotes);

//define all the required variables in order for the page to load with a random quote
let html = '';
let randomQuote = getRandomQuote();
let quote = quotes[randomQuote].quote;
let source = quotes[randomQuote].source;
let citation = quotes[randomQuote].citation;
let year = quotes[randomQuote].year;

// getRandomQuote function retrieves the index of random quotes in the array of objects
function getRandomQuote() {
  let numberOfRandomQuotes;
  numberOfRandomQuotes = Math.floor(Math.random() * quotes.length);
  return numberOfRandomQuotes;
};

//  print function that populates html tags.
function print(html) {
  var div = document.getElementById('quote-box');
  div.innerHTML = html;
}

//   Create the `printQuote` function that calls getRandomQuote` function and assign it to the randomQuote variable.

function printQuote()  {
  html = '';
  randomQuote = getRandomQuote();
  //display the selected quote idex in the console
  console.log(randomQuote);

  //set a value for the variables listed below
  quote = quotes[randomQuote].quote;
  source = quotes[randomQuote].source;
  citation = quotes[randomQuote].citation;
  year = quotes[randomQuote].year;

  //display quote in the html file provided for this project
  html += '<p class="quote">'+ randomQuote + '-' + quote + '"</p>';

  //only display source with quote if citation and year are blank
  if (citation === '' && year === '') {
    html += '<p class=' + 'source>' + source + '</p>';
    /*<p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>*/
  };
  //only display source with quote and year if citation blank
  if (citation === '' && year !== '') {
        html += '<p class=source>' + source + '<span class="year">' + year + '</p>';
  }
  //only display source with quote and citation if year blank
  if (year === '' && citation !== '') {
        html += '<p class=source>' + source + '<span class="citation">' + citation + '</p>';
    }
 //display all object properties if everything is filled
  if (year !== '' && citation !== '') {
        html += '<p class=source>' + source + '<span class="citation">' + citation + '<span class="year">' + year + '</p>';
    }

  //display the html content
  print(html);
}

//display a quote when the html page initially loads
printQuote();

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
