var quotes = [
  'Get piercings, remove them, make friends, move on, travel, stay in. Find what kind of person you are and love that person.',
  'Our purpose is never to get away from hard things. It\'s to find the hard things worth doing.',
  'Fill your life with adventures, not things. Have stories to tell, not stuff to show.',
  'Be strong, be weak, be whoever you want to be.',
  'You are enough.',
  'Do more things that make you forget to check your phone.',
  'Be soft. Do not let the world make you hard. Do not let pain make you hate. Do not let the bitterness steal your sweetness. Take pride that even though the rest of the world may disagree, you still believe it to be a beautiful place.',
  'Act as if it were impossible to fail.',
  'People wait all week for Friday, all year for summer, and all of life for happiness.',
  'Be the reason someone smiles today.',
  'Happiness looks good on you.',
  'The best view comes after the hardest climb.',
  'You were not born to just pay bills and die.',
  'Be who you needed when you were younger.',
  'Be a combination of all the best people you meet, not the worst.',
  'Stop being afraid of what could go wrong and start being positive about what could go right.',
  'A tiger does not lose sleep over the opinion of sheep.',
  'Be a Fruit Loop in a world of Cheerios.',
];

var quoteElement = document.getElementsByClassName('quote')[0];
var quotesLength = quotes.length;
function replaceQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.innerHTML = randomQuote;
}
replaceQuote();
window.onclick = replaceQuote;

// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104633301-1', 'auto');
ga('send', 'pageview');
