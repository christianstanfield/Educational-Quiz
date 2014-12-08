function showResults(arr) {
  var text = '<h1 id="score"></h1><h1 id="average"></h1>';
  text += '<div id="question_results">'
  var i;

//loop through all questions in json
  for (i = 0; i < arr.length; i++) {
//check URL arguments to get the student's answer to this question
    var args = window.location.search.substring(1);
    var vals = args.split("&");
    var ans = vals[i].split("=");
    var answer = ans[1];

    text += '<h3>Question ' + (i + 1) + '</h3>' +
            '<h4>' + arr[i].question + '</h4>' +
            '<div id="chart-' + i + '"></div>' +
            '<div id="answers-' + i + '">';
    var j;
//loop through all answers
    for (j = 0; j < arr[i].answers.length; j++) {
      text += '<input ';
      if (arr[i].answers[j].correct == "true") {
	//check to see if this was the answer selected and check it if so
      	if (j == answer) {
      		text += 'class="correctAns radio" type="radio" name="answer-' + i + '"value="' + j + '" checked><label class="correct">' +
                  arr[i].answers[j].answer + '</label>';
      	} else {
          text += 'class="correctAns radio" type="radio" name="answer-' + i + '"value="' + j + '"><label class="correct">' +
                	arr[i].answers[j].answer + '</label>';
      	}
      } else {
	//check to see if this was the answer selected and check it if so
      	if (j == answer) {
      		text += 'class="radio" type="radio" name="answer-' + i + '"value="' + j + '" checked><label>' +
                	arr[i].answers[j].answer + '</label>';
      	}	else {
        	text += 'class="radio" type="radio" name="answer-' + i + '"value="' + j + '"><label>' +
                	arr[i].answers[j].answer + '</label>';
      	}
      }
      if (j === 1) {text += '<br>'}
    }

  text += '</div>';
  }
  text += '</div>';
  document.getElementById("results").innerHTML = text;

//color the labels of the correct answers green
  var correct = document.getElementsByClassName('correct');
  var n;

  for (n = 0; n < correct.length; n++) {
    correct[n].style.fontWeight = 'bold';
    correct[n].style.color = '#339900';
  }

//check for number of correct answer and divide by 4 to get score
  var correctAns = document.getElementsByClassName('correctAns');
  var count = 0;
  var m;

  for (m = 0; m < correctAns.length; m++) {
    if (correctAns[m].checked) {
      count++;
    }
  }

  var score = count / 4 * 100;
  document.getElementById('score').innerHTML = 'Your score is ' + score + '%';

	//add score to json array
	scores.push({"score":score});

	//add all scores together and divide by the length to get the average
	var i;
	var total = 0;

	for (i = 0; i < scores.length; i++) {
  	total += scores[i].score;
	}

	average = total / scores.length;
	document.getElementById('average').innerHTML = 'The average score for this class so far is ' + average + '%';

	//disable all radio buttons since they shouldn't be selectable anymore
	var radio = document.getElementsByClassName('radio');
	var j;

	for (j = 0; j < radio.length; j++) {
		radio[j].disabled = true;
	}
}
