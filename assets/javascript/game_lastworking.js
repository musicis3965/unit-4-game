


// generates the target number to get. to be between 40-60
var targetNumber = Math.floor(Math.random() * 60) + 40;

$("#number-to-guess").text(targetNumber);

 // Here we created a counter, we'll be using this to track the user's total.
 var counter = 0;
 var wins = 1;
 var lost = 1;
 

   // Here we created code that selects a number between 1 - 10
   
   var numberOptions = Math.floor(Math.random() * 10) + 1;
   var increment = numberOptions;
   
  //  this is defining the function randomNum. this will be used on each image!
   function randomNum() {
     Math.floor(Math.random() * 11);
   }


   $(".images").on("click", function() {
     document.getElementById("disappearing_text").style.visibility = "collapse";
     
     
     
    // define everything from 'counter to the else if statement as a funtion
    // to run when images is clicked

     // Each time the user clicks the crystal the counter goes up by --
     counter += increment;

     // We then output the number of times the crystal is clicked.
     document.getElementById('score').innerHTML = counter;

     if (counter === targetNumber) { 
       document.getElementById('wins').innerHTML = wins++;
       counter = 0;
       
       
     }

     // Here we added an "else if" condition. If the user's counter ever exceeds the targetNumber...
     else if (counter >= targetNumber) { 
       document.getElementById('lost').innerHTML = lost++;
       counter = 0;
        }
// ending for line 26
     });




