let alphabetStr = "abcdefghijklmnopqrstuvwxyz";
let alphabetArr = alphabetStr.split("");
let completedAlphabet = [];

// document.getElementById("app").innerHTML = `
//   alphabet string:${alphabetStr} <br/>
//   alphabet array: ${alphabetArr} <br/>
//   completed alphabet: ${completedAlphabet}
// `;

const handleKeydown = event => {
  //alert(String.fromCharCode(event.keyCode));
  let nextLetter = alphabetArr[completedAlphabet.length];
  let keyLetter = String.fromCharCode(event.keyCode).toLowerCase();
  if (keyLetter === nextLetter) {
    //    alert(keyLetter)
    completedAlphabet.push(keyLetter);
    document.getElementById("completedAlphabet").innerHTML = completedAlphabet
      .toString()
      .split(",")
      .join(" ");
    setTimeout(() => {
      if (completedAlphabet.length === 26) {
        alert("you did it");
      }
    }, 500);
  } else {
    alert("whoops");
  }
};
document.addEventListener("keydown", handleKeydown);
