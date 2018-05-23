var clock = 60;
    var GameOver = false;
    setInterval(function() {
        document.getElementById ("Clock").innerHTML = "Timer " + clock;
        if(clock == 0) {
           GameOver = true;
           check ();
           return;   

        }
        clock --;

        
      }, 1000)


function check () {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value; 
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var correct = 0;

        if (question1 == "Milwaukee") {
            correct++;
    }

        if (question2 == "Good Times") {
            correct++;
    }

        if (question3 == "Pernell Roberts & Wayne Rogers") {
            correct++;
    }

        if (question4 == "Minneapolis") {
            correct++;
    }

       if (question5 == "Architect") {
           correct++; 
    }

       if (question6 == "John Forsythe") {
           correct++;
    }

       if (question7 == "Cleveland") {
           correct++;
    }

       if (question8 == "James Gregory") {
           correct++;
    }
 
    var messages = ["You Win!! Great Job!!", "You didn't do so hot. Try again.", "Oops! You ran out of time!"]
    
    var range;

       if (correct < 6) {
           range = 1;
       }

       if (correct >= 6) {
           range = 0;
       }

       if (GameOver === true) {
           range = 2;
       }

       document.getElementById("after_submit").style.visibility = "visible";

       document.getElementById("message").innerHTML = messages[range];
       document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";


}