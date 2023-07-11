//js code
var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget?"));
  var accommodation = Number(prompt("What are your accommodation costs?"));
  var numDays = Number(prompt("How many days are you staying?"));

  calculateDailyBudget(totalBudget, accommodation, numDays);
};

var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  var daily = ((totalBudget - accommodation) / numDays).toFixed(2);

  dailyBudget.innerText = `You have $${daily} to spend on food and fun.`;
};

tripInfoButton.addEventListener("click", tripInfo);

//console.log(dailyBudget);
//console.log(tripInfoButton);
