console.log("Belajar DOM")

// console.log(document)

// getElementById
var title = document.getElementById("title");
// getElementsByTagName
var tagNames = document.getElementsByTagName("li");
//getElementsByClassName
var classNames = document.getElementsByClassName("mentor");

// console.log(classNames);

// title.style.background = "red";
// title.style.color = "white";

title.remove();

var body = document.getElementById("body");
let h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Belajar JS"))

//body.appendChild(h1);

body.prepend(h1)


// for(let i = 0; i < tagNames.length; i++) {
//     console.log(tagNames[i]);
// }

// console.log(tagName)






