const { stdout } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const survey = {
  1:{q:"What's your name? Nicknames are also acceptable :) :"},
  2:{q:"What's an activity you like doing? : "},
  3:{q:"What do you listen to while doing that? : "},
  4:{q:"What's your favourite thing to eat for that meal : "},
  5:{q:"Which meal is your favourite (eg: dinner, brunch, etc.) : "},
  6:{q:"What's your favourite thing to eat for that meal? : "},
  7:{q:"Which sport is your absolute favourite? : "},
  8:{q:"What is your superpower? In a few words, tell us what you are amazing at! : "}
}
//instead of nested callbacks I am using recursive callbacks till n is leass than 8.In the closing loop I am writing it the console.
  function getUserInput(n) {
      rl.question(survey[n].q, (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          survey[n]['a']=answer;
          if (n < 8) {
              getUserInput(n+1);
          } else {
            //console.log(survey);
            for(key in survey){process.stdout.write(`${survey[key].q} : ${survey[key].a}\n`)}
              rl.close();
          }
      }); 
  }
  
  getUserInput(1);






