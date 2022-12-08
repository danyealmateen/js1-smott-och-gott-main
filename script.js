// //For of loop
// let paragraph = document.getElementById("paragraph");
// console.log(paragraph);

// const cars = ["BMW", "Volvo", "Mini"];

// for (let car of cars) {
//   paragraph.innerHTML += `<br>${car}`;
// }

// //While
// const arry = [1, 2, 3, 4, 5];
// while (true) {
//   const random = Math.floor(Math.random() * arry.length);
//   console.log(arry[random]);
//   if (arry[random] === 2) break;
// }

// //Switch
// const randomNumber = Math.ceil(Math.random() * 3);

// switch (randomNumber) {
//   case 1:
//     console.log("En etta");
//     break;
//   case 2:
//     console.log("En tvåa");
//     break;
//   case 3:
//     console.log("En trea");
//     break;
// }

// //Ternary operator
// let aNumber = 5;
// aNumber === 5
//   ? console.log("Ja, det är en femma")
//   : console.log("Nej, det är inte en femma");

// //Smått & Gott, övningsuppgifter
// //1.Logga, 2.Använd samma array & Visa varje nummer i DOM:en i valfritt element.
// let arrayOne = [324, 23, 5, 63, 0, 24, 32];
// for (let arr of arrayOne) {
//   console.log(arr);
//   let output = document.createElement("div");
//   output.innerHTML += `${arr}`;
//   document.body.appendChild(output);
// }

// //1. While, Logga ett random nummer från 1 till 50 så länge det inte är mellan 30 och 35.
// while (true) {
//   const randomMath = Math.floor(Math.random() * 50);
//   if (randomMath >= 30 && randomMath <= 35) {
//     break;
//   } else {
//     console.log(randomMath);
//   }
// }

// //2. While, Computer guess

// let button = document.getElementById("button");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   computerGuess();
// });

// function computerGuess() {
//   let inputNumber = Number(document.getElementById("inputNumber").value);

//   while (true) {
//     const generateRandomNumber = Math.floor(Math.random() * 10);
//     if (generateRandomNumber === inputNumber) {
//       console.log("not yet..");
//       break;
//     } else {
//       console.log(generateRandomNumber);
//     }
//   }
//   console.log(inputNumber);
// }

// //3. Switch
// let buttonTwo = document.getElementById("buttonTwo");

// buttonTwo.addEventListener("click", (e) => {
//   e.preventDefault();
//   months();
// });

// function months() {
//   let textInput = document.getElementById("textInput").value;
//   let listOfMonths = [
//     "Januari",
//     "Februari",
//     "Mars",
//     "April",
//     "Maj",
//     "Juni",
//     "Juli",
//     "Augusti",
//     "September",
//     "Oktober",
//     "November",
//     "December",
//   ];

//   switch (textInput) {
//     case "Januari":
//       for (let i = 0; i < listOfMonths.length; i++) {
//         listOfMonths[1];
//       }
//   }
// }

// Ternary
// Ordlängd
// Skapa ett form med en text input
// Låt en användare skriva in ett ord
// Använd ternary operator för att ändra texten på ett h1-element till följande
// om input-ordet är längre än 6 bokstäver: ‘Långt ord’
// annars: ‘Kort ord’

// let button = document.getElementById("button");
// let header = document.createElement("h1");
// header.innerHTML = `Hello`;
// document.body.appendChild(header);

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   ternary();
//   console.log("Klickad");
// });

// function ternary() {
//   let input = document.getElementById("input").value;
//   input > 6
//     ? (header.innerHTML = `Långt ord`)
//     : (header.innerHTML = `Kort ord`);
// }

// Gissa nummer
// Skapa ett form med en number input
// Generera ett random nummer från 1 till 3
// Använd ternary operator för att ändra texten på ett h1-element till följande
// om input-numret är lika med random: ‘RÄTT’
// annars: ‘FEL’
