function fadeinText(textArray) {

  for (var i = 0; i < textArray.length; i++) {
    textArray[i].css('display','none');
  }

  var delay = -750;
  for (var i = 0; i < textArray.length; i++) {
    delay += 750
    textArray[i].delay(delay).fadeIn(1000);
  };
}


// Should fade in each letter one at a time but not working :(
// function animateText(htmlTextElement) {

//   var text = $(htmlTextElement).text();
//   $(htmlTextElement).text("");
//   animateLetters(0);

//   function animateLetters(index) {
//     if (index<text.length) {
//     var current_text = $(htmlTextElement).text();
//     current_text += text[index];
//     $(htmlTextElement).css('display','none');
//     $(htmlTextElement).text(current_text).fadeIn(1000).delay(1000);
//     animateLetters(index+1);
//     }
//   }

  // ALTERNATE:
  // for (var i = 0; i < text.length; i++) {
  //   var current_text = $(htmlTextElement).text();
  //   current_text += text[i];
  //   $(htmlTextElement).css('display','none');
  //   $(htmlTextElement).text(current_text).fadeIn(1000);
  // }
// }