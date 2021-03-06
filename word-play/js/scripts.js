$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var words = sentence.split(" ");
    var longWords = [];

    var longWords = words.filter(function(word) {
      return word.length > 3;
    });

    longWords.reverse();
    var reversed = longWords.join(" ");

    $(".display").text(reversed);
  }); //form submit
}); //doc ready



// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.
