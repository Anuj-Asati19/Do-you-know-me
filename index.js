var rls = require('readline-sync');
console.log("LETS THAT HOW WELL DO YOU KNOW ME...?");
console.log("----------------------------------------------");console.log("----------------------------------------------");
var name = rls.question("What is your name..? ");
console.log("Hey " + name + " ,try to prove that you know me well by answering the following questions...");console.log("----------------------------------------------");console.log("----------------------------------------------");

let score = 0;
function play(question,answer,o1,o2,o3,o4){
  console.log("(Question) " + question);
  console.log("(1): " + o1);
  console.log("(2): " + o2);
  console.log("(3): " + o3);
  console.log("(4): " + o4);
  var inp = rls.question("Enter your Choice: ");
  if(inp == answer){
    score++;
    console.log("Correct Answer.");
    console.log("Score: " + score);
    console.log("----------------------------------------------");console.log("----------------------------------------------");
  }
  else{
    console.log("Ooops Wrong Answer!!!");
    console.log("The Correct Answer is " + answer);
    console.log("Score: " + score);
    console.log("----------------------------------------------");console.log("----------------------------------------------");
  }
}

questions = [ q1 = {
    quest : "What is My College Name...?",
    ans : 2,
    op1 : "MIT Gwalior",
    op2 : "JEC Jabalpur",
    op3 : "SGSITS Indore",
    op4 : "MANIT Bhopal"
  },
  q2 = {
    quest : "What is My Branch...?",
    ans : 1,
    op1 : "CSE",
    op2 : "IP",
    op3 : "MECH",
    op4 : "CIVIL"
  },
  q3 = {
    quest : "What is My Gender...?",
    ans : 4,
    op1 : "Feminist",
    op2 : "Mysoginist",
    op3 : "LGBTQ+",
    op4 : "Male"
  },
  q4 = {
    quest : "What is My favourite sport...?",
    ans : 3,
    op1 : "ludo",
    op2 : "snake and ladders",
    op3 : "Football",
    op4 : "Chidiya Udd"
  },
  q5 = {
    quest : "What is My Weight...?",
    ans : 4,
    op1 : "1 gram more than feather",
    op2 : "Dhai Kilo",
    op3 : "69 KG",
    op4 : "58 KG"
  }
]
for(val of questions){
play(val.quest,val.ans,val.op1,val.op2,val.op3,val.op4);
}

console.log("Final Score: " + score);
console.log("Thank You For Playing");
console.log("----------------------------------------------");
console.log("----------------------------------------------");