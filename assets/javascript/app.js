

var questionindex = 0;
var timerTime = 30;
var counter;
var rightanswers = 0;
var wronganswers = 0;
var timeup = 0;


var questions = [


{ 	// An array of objects containins question, answers and index of correct answer
	"question": "Where do single socks go when they die?",
	"answers": ["1. Under the sofa", "2. In you neighbors back yard", "3. '42'", "4. Your dog's stomach"],
	"correct": 3,
},

{
	"question": "How do you feel about peanut butter?",
	"answers": ["1. I love it ", "2. I hate it", "3. It's OK, I guess", "4. Numnum"],
	"correct": 4,
},


{
	"question": "What is the next question going to be?",
	"answers": ["1. This one ", "2. The next one", "3. None of the above", "4. All of the above"],
	"correct": 2,
},



{
	"question": "Is this the last question?",
	"answers": ["1. Absolutely! ", "2. Yes.", "3. I think so", "4. Nope, one more to go"],
	"correct": 4,
},

{
	"question": "How would you rank this assignment?",
	"answers": ["1. A+ ", "2. Meh ", "3. A++ ", "4. Cheesecake"],
	"correct": 4,
},



]


 $(document).ready(function(){


    $("#startbutton").on("click", function() {
	$("#startbutton").css("visibility", "hidden");
	$("#questioncontainer").css("visibility", "visible");
    $(".answers").css("visibility", "visible");

	startgame();
});



 function startgame () {


    $("#summary").css("visibility", "hidden");
	$("#restart").css("visibility", "hidden");

questionindex = 0;
timerTime = 30;
rightanswers = 0;
wronganswers = 0;
timeup = 0;
shownext(); // shows the first question (whatever questionindex is pre-set to)


$('#timer').html("Time left: "+timerTime);

}
	

// a stop function to stop count down, clear html of timer

function stopcount () {

							$('#timer').html("");
							clearInterval(counter);

}


// a countback function that is used in the setinterval


function countback () {



							if (timerTime > 0) {
							timerTime--
							$('#timer').html("Time left: "+timerTime);
							}
							else {

								showtimeup();
								timeup++;
								stopcount ();
								setTimeout(function(){ shownext(); }, 4500);

							}

}

// a function that starts the count back with set interval
function startcount () {

	 timerTime = 30;
	 $('#timer').html("Time left: "+timerTime);

	 counter = setInterval(countback, 1000);

	}






// a function that clears the previous question and shows new one

function shownext () {
		console.log('shownext(): ' + questionindex)

								if (questionindex < questions.length) { 

								$("#question").empty();
								$("#ans1").empty();
								$("#ans2").empty();
								$("#ans3").empty();
								$("#ans4").empty();


								$("#question").append("<h2>"+questions[questionindex].question+"</h2>");
								$("#ans1").append(questions[questionindex].answers[0]);
								$("#ans2").append(questions[questionindex].answers[1]);
								$("#ans3").append(questions[questionindex].answers[2]);
								$("#ans4").append(questions[questionindex].answers[3]);

								$("#questioncontainer").css("visibility", "visible");
								$(".answers").css("visibility", "visible");
								$("#correct").css("visibility", "hidden");
								$("#wrong").css("visibility", "hidden");
								$("#timeup").css("visibility", "hidden");


								// startcount();

								}


								else {

								$("#questioncontainer").css("visibility", "hidden");
								$("#correct").css("visibility", "hidden");
								$("#wrong").css("visibility", "hidden");
								$("#timeup").css("visibility", "hidden");
								$("#summary").css("visibility", "visible");
								$("#restart").css("visibility", "visible");
								$("#summary").html("Right answers: "+rightanswers+"<br/>"+"Wrong answers: "+wronganswers+"<br/>"+ "unasnwered: "+timeup);


								}


}


// a function that makes the question go away and inserts a "correct answer!" screen instead
function showcorrect () {

	$("#questioncontainer").css("visibility", "hidden");
	$(".answers").css("visibility", "hidden");
	$("#correct").css("visibility", "visible");
	$("#correct").html("Correct! The answer was: "+questions[questionindex].answers[(questions[questionindex].correct-1)]);


}

function showwrong () {

	$("#questioncontainer").css("visibility", "hidden");
	$(".answers").css("visibility", "hidden");
	$("#wrong").css("visibility", "visible");
	$("#wrong").html("Wrong! The answer was: "+questions[questionindex].answers[(questions[questionindex].correct-1)]);



}

function showtimeup () {

	$("#questioncontainer").css("visibility", "hidden");
	$(".answers").css("visibility", "hidden");
	$("#timeup").css("visibility", "visible");
	$("#timeup").html("Time up! The answer was: "+questions[questionindex].answers[(questions[questionindex].correct-1)]);

	questionindex++
					console.log("showtimeup "+questionindex)



}


// a function that makes the question go away and inserts a "wrong answer!" screen instead




$(".answers").on("click", function(){


console.log(questionindex);

			if (questions[questionindex].correct === parseInt(this.attributes.index.nodeValue)) {
				console.log("correct");
				showcorrect();
				rightanswers++;
				setTimeout(function(){ shownext(); }, 2500);


			}

				else {
					console.log("wrong");
					showwrong();
					wronganswers++;
			        setTimeout(function(){ shownext(); }, 2500);

				}

				stopcount();
				questionindex++
				console.log("stopcount"+questionindex)


				
			 });








$("#restart").on("click", function(){

 rightanswers = 0;
 wronganswers = 0;
 timeup = 0;
 questionindex = 0;
console.log("restart"+questionindex)

startgame();

});

}); //end document ready function


 
