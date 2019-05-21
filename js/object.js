let quoteVar =' ';

let quotes = [
		{
		  quote: 'my first quote', 
		  source: 'the first quote source', 
		  cititation: 'the first quote cititation', 
		  year: 'the first quote year'
		},
		{
		  quote: 'my second quote', 
		  source: 'the second quote source', 
		  cititation: 'the second quote cititation', 
		  year: 'the second quote year'
		},
		{
		  quote: 'my third quote', 
		  source: 'the third quote source', 
		  cititation: 'the third quote cititation', 
		  year: 'the third quote year'
		},
		{
		  quote: 'my fourth quote', 
		  source: 'the fourth quote source', 
		  cititation: 'the fourth quote cititation', 
		  year: 'the fourth quote year'
		},
		{
		  quote: 'my fifth quote', 
		  source: 'the fifth quote source', 
		  cititation: 'the fifth quote cititation', 
		  year: 'the fifth quote year'
		},
];

/* for (var i = 0; i < quotes.length; i++) {
  console.log(quotes[i].quote);
  }
*/

function printQuote(message){
  let html = '';
  quoteVar = getRandomQuote();
  };
  
function getRandomQuote() {
  return[Math.floor(Math.random() * quotes.length)];
  };

	console.log(quotes[getRandomQuote()].quote);  
  
/*
//create an object
// [ ] create an array - { } create an object
var studnt = { 
  //this is the object key with either a string, boolean, array
  //place each key value on its own line to make it readable
  name: "Dave",
  grades: [ 80, 90, 100 ]
};
*/