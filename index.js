const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const str=tutorials.map(setc => setc.split(' '));
  let strs=[]
  for (var i = 0; i < str.length; i++) {
    for (var j=0; j< str[i].length; j++){
      str[i][j] = str[i][j].charAt(0).toUpperCase() + str[i][j].slice(1); 
    }
   strs.push(str[i].join(' ')) 
  }
  return strs
}
