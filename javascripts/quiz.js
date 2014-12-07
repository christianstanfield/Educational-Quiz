function showQuestions(arr, i) {
	var text = "";

	//loop through all questions from the json file
	text += '<form action="results.html" type="post"><h3>Question ' + (i + 1) + '</h3>' +
		'<h4>' + arr[i].question + '</h4>' +
		'<div id="answers-' + i + '">';
	var j;
	for (j = 0; j < arr[i].answers.length; j++) {
		text += '<input ';

		//check json to see if this is the correct answer and apply the correctAns class if so
		if (arr[i].answers[j].correct == "true") {
			text += 'class="correctAns" type="radio" name="answer-' + i + '" required value="' + j + '"><label class="correct">' +
				arr[i].answers[j].answer + '</label>';
		}
		else {
			text += 'type="radio" name="answer-' + i + '" required value="' + j + '"><label>' +
				arr[i].answers[j].answer + '</label>';
		}
		if (j === 1) { text += '<br>' }
	}
	text += '</div>';

text += '<h1 id="score"></h1><input id="submit" type="submit" value="Submit Answers"></form>';
document.getElementById("questions").innerHTML = text;
}
