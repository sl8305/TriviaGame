
// When the start button is clicked the button and message are replaced
// A timer is displayed
// Time will count down

var timer = 30;
var intervalNum;
var p;

$('#start').on("click",function() {
    //Clears the div of previous content
    $('#start-timer').empty();
    intervalNum = setInterval(decrement,1000);

    p = $('#start-timer').append("<p>");
    p.html(timer);

    //Display a timer
    
    


    // call the countDownfunction 
})

function decrement(){
    // decrease timer by 1
    timer --;
    // update the time on the page
    p.html(timer);

    // When the timer = 0 stop the countdown
    if (timer === 0) {
        clearInterval(intervalNum);
        console.log("TIME IS UP");
    }
}

// create a function to count down the time
function countDown (){

}


function checkAnswer (){
    // loop through and check the responses
}


// create ender functions
//      ending notice - all done
//      loops through and update the number of correct and incorrect answer

function timeUp (){
    let correctResponse = 0;
    let incorrectResponse = 0;

    // function to check the answer

    // output the html
    $('#main-text').text("Number of correct answers: " + correctResponse);
    $('#main-text').append("Number of incorrect answers: " + incorrectResponse);
}

//timeUp();
