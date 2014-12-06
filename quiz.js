function showQuestions(arr) {
	var text = "";
	var i;

	//loop through all questions from the json file
	for (i = 0; i < arr.length; i++) {
		text += '<form action="results.html" type="post"><h3>Question ' + (i + 1) + '</h3>' +
			'<h4>' + arr[i].question + '</h4>' +
			'<div id="answers-' + i + '">';
		var j;
		for (j = 0; j < arr[i].answers.length; j++) {
			text += '<input ';

			//check json to see if this is the correct answer and apply the correctAns class if so
			if (arr[i].answers[j].correct == "true") {
				text += 'class="correctAns" type="radio" name="answer-' + i + '" required value="' + j + '"><label class="correct">' +
					arr[i].answers[j].answer + '</label><br />';
			}
			else {
				text += 'type="radio" name="answer-' + i + '" required value="' + j + '"><label>' +
					arr[i].answers[j].answer + '</label><br />';
			}
		}
		text += '</div><br /><br />';
		if (i < arr.length - 1) {
			text += '<hr>';
		}
	}
	text += '<h1 id="score"></h1><input id="submit" type="submit" value="Submit Answers"></form>';
	document.getElementById("questions").innerHTML = text;
}
