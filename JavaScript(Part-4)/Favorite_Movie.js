//variable bnaayenge favorite movie name se user ko kya krna h guess krna h favorite movie jb tk vo guess na kr na h or phir kisi bhi time vo quit kr skta h user

//game-user ko favorite movie guess krna h
//  let favMovie = "Avtar";
//  let guess=prompt("Guess favorite movie is: ");

//  while((guess!=favMovie)&&(guess!='quit')){
//     console.log("Wrong Movie guessed.Please try again!");
//     guess=prompt("Guess favorite movie is: ");
//  }
//  if(guess==favMovie){
//    alert(("Congratiulations your guess right favorite movie!"));
//  }else{
//     console.log("you quit");
//  }


 let favMovie = "Avtar";
 let guess=prompt("Guess favorite movie is: ");

 while(guess!=favMovie){
    if (guess=="quit"){
      console.log("you quit");
      break;
    }
    guess=prompt("Wrong guess, try again!");
 }
 if(guess==favMovie){
   console.log("congrats!");
}