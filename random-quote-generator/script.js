// Select's the h1 element is from the html
const quoteh1 = document.getElementById("quote");
const btnClk = document.getElementById("btn");

// all the quotesObj
const quotesObj = {
  quote1:
    '"A strong person bends the rules to survive; a weak one obeys them and dies." — Fang Yuan, Reverend Insanity',
  quote2:
    '"Only by sacrificing what you love can you gain what you need." — Fang Yuan, Reverend Insanity',
  quote3:
    '"Power belongs to those who dare to take it, not to those who wait for it." — Fang Yuan, Reverend Insanity',
};

console.log(quotesObj);
// * object.keys('objectName') gives a list of what is inside the object `quotesObj`
console.log(Object.keys(quotesObj));

btnClk.addEventListener("click", () => {
  const keys = Object.keys(quotesObj);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  quoteh1.innerHTML = quotesObj[randomKey];
  console.log(quotesObj[randomKey]);
});

// !!! This works but junky
// btnClk.addEventListener("click", () => {
//   let randomProp = (quotesObj) =>
//     Object.keys(quotesObj)[(Math.random() * Object.keys(quotesObj).length) | 0];
//   let key = randomProp(quotesObj);
//   quoteh1.innerHTML = quotesObj[key];
//   console.log(quotesObj[key]);
// });
