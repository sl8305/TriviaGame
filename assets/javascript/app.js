// When the start button is clicked the button and message are replaced
// A timer is displayed
// Time will count down

var timer = 60;
var intervalNum;
var a,b,c;
var correctResponse = 0;
var incorrectResponse = 0;
var questionList = ["Question One: How many states are there in the United States? The choices are as follows: 13, 25, 50, 51 respectively", "Question Two: What state has the tallest moutains in the United States? The choices are as follows: Washington, Alaska, Colorodo, California", "Question three: What is Washington state's nickname? The choices are as follows: The Evergreen State, The Giving State, The Emerald State, The Needle"];
var choiceList = ["Choice 1", "Choice 2", "Choice 3","Choice 4"];
var answerList = [1,2,1,4];

$('#start').on("click",function() {
    //Clears the div of previous content
    $('#start-timer').empty();
    // set the interval to count down by 1 second
    intervalNum = setInterval(decrement,1000);

    // appends the timer to the p that was dynamically created
    a = $('#start-timer').append("<p>");
    a.html("Time left: " + timer);

    setUpForm();
})

function decrement(){
    // decrease timer by 1
    timer --;
    // update the time on the page
    a.html("Time left: " + timer);

    // When the timer = 0 stop the countdown
    if (timer === 0) {
        // clear the decrement
        clearInterval(intervalNum);
        // call the time up function 
        timeUp();
    }
}

// function to set up the input form
function setUpForm (){
    // adding the form div to the div called bodyParagraph
    var formBox = $("#bodyParagraph").append("<div>");

    for (let i = 0; i <questionList.length; i++) {
        // loop to create question
        var questionDiv = formBox.append("<div class='form-check form-check-inline'>");
        questionDiv.append('<p>'+questionList[i]+'</p>');

        // loop to create choices
        for (let j = 0; j < choiceList.length; j++) {
            var choiceDiv = questionDiv.append('<div class="form-check form-check-inline" style="margin-right:30px;">');
            var choice = choiceDiv.append('<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value=j+1 >');
            choice.append('<label class="form-check-label" for="inlineRadio1">'+choiceList[j]+'</label>')
        }
    }
}


function checkAnswer (){
    // loop through and check the responses
    // if the response === to the answerList then increment correct response
    // else increment the incorrect response
}

// function called when the timer is 0 
function timeUp (){
    //clear out question form
    $('#bodyParagraph').empty();

    // end of the timer
    a.html("TIME IS UP");

    // calling the checkAnswer function to update the score
    checkAnswer();

    // print out the correct answers
    b = $('#start-timer').append("<p>Number of correct answers: " + correctResponse+ "</p>")
    
    // print ou the incorrect answers
    c = $('#start-timer').append("<p>Number of incorrect answers: " + incorrectResponse + "</p>");
}
