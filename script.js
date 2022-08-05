// // var arr = [];

// var sentence = document.getElementById("sentence").value;
// var letter = document.getElementById("letter").value;
// var result = document.getElementById("result").innerHTML;
// var index = sentence.indexOf(letter);

// function resultPrint() {
//   if (index === -1) {
//     alert("The letter does not exist in the sentence");
//   } else {
//     // result = sentence.substring(index + 1);
//     result = letter;
//   }
// }

document.getElementById("button").onclick = function () {
  var str = document.getElementById("sentence").value.toLowerCase();
  console.log("The string you entered: ", str);
  var letter = document.getElementById("letter").value.toLowerCase();
  console.log("The letter you entered: ", letter);
  // var result = document.getElementById("result").innerHTML;

  //var letterCheck = str.includes(letter)
  //var letterCheck = str.indexOf(letter) !== -1
  if (str.indexOf(letter) == -1) {
    alert("Letter does not exist in the string");
  } else {
    var afterLetter = str.substring(str.indexOf(letter) + 1);
    var result = afterLetter;
  }
  document.getElementById("result").innerHTML = result;
};
