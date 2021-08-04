// #1. Create list of words to be guessed.
let emotions = [
    "anger",
    "disgust",
    "fear",
    "joy",
    "sadness"
   ]
   
   // #2. Create initial game settings.
   var answer = "";
   var guessed = [];
   var word_progress = null
   
   // #3. Create function to randomize the word to be guessed. (KP: JavaScript Random Colour, Math Random, And Math Floor)
   function random_word(){
     answer = emotions[Math.floor(Math.random()*emotions.length)]
   }
   
   // #4. Create function to generate keyboard in buttons format.
   function keyboard(){
     let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map(letter => // (KP: Arrow Functions)
       // (KP: JavaScript Template Literal, JavaScript Mouse Events)
       `<button class="btn btn-lg btn-info m-2" id='` + letter + `' onClick="guess('` + letter + `')">` + letter + `</button>`).join("");
     document.getElementById("keyboard").innerHTML = buttonsHTML
   }
   
   // #5. Create function to disable buttons and update progress after the letter has been chosen.
   function guess(letter_chose){
     guessed.indexOf(letter_chose) === -1 ? guessed.push(letter_chose): null;
     document.getElementById(letter_chose).setAttribute("disabled", true);
     if (answer.indexOf(letter_chose) >= 0){ // (KP: JavaScript Conditions)
       guessed_word();
       end()
     } 
   }
   
   // #6. Create function to end the game when the word guessed is correct.
   function end(){
     if (word_progress === answer){
       document.getElementById("keyboard").innerHTML = "You guessed it right! ur a failure congrats!!!"
     }
   }
   
   // #7. Create function to update progress of the word guessed.
   function guessed_word(){
     word_progress = answer.split("").map(letter => (guessed.indexOf(letter) >= 0 ? letter: " _ ")).join("");
     document.getElementById("correct_word").innerHTML = word_progress
   }
   
   // #8. Create function to restart the game.
   function restart(){
     mistakes = 0;
     guessed = [];
     random_word();
     keyboard();
     guessed_word()
   }
   
   // #9. Put all main functions at the end. (KP: JavaScript Function Parameters And Arguments)
   random_word();
   keyboard();
   guessed_word()
   
   
   