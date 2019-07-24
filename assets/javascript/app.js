// When the start button is clicked the button and message are replaced
// A timer is displayed
// Time will count down

var timer = 10;
var intervalNum;
var a,b,c;
var correctResponse = 0;
var incorrectResponse = 0;
var questionList = ["first questiuon", "second question"];
var choiceList = ["a", "b", "c","d"];
var answerList = [1,2];

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

        for (let j = 0; j < choiceList.length; j++) {
            var choiceDiv = questionDiv.append('<div class="form-check form-check-inline">');
            var choice = choiceDiv.append('<input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" >');
            choice.append('<label class="form-check-label" for="inlineRadio1">'+choiceList[j]+'</label>')
        }
    }

}


// loop through to make questions 
// loop through to reference answers


// <div class="form-check form-check-inline">
//   <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
//   <label class="form-check-label" for="inlineRadio2">2</label>
// </div>

// <div class="form-check form-check-inline">
//   <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled>
//   <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
// </div> 



function checkAnswer (){
    // loop through and check the responses
}

// function called when the timer is 0 
function timeUp (){
    //clear out question form
    //$('#bodyParagraph').empty();

    // end of the timer
    a.html("TIME IS UP");

    // calling the checkAnswer function to update the score
    checkAnswer();

    // print out the correct answers
    b = $('#start-timer').append("<p>Number of correct answers: " + correctResponse+ "</p>")
    
    // print ou the incorrect answers
    c = $('#start-timer').append("<p>Number of incorrect answers: " + incorrectResponse + "</p>");
}
