const meter = 3.28084;
const liter = 0.264172;
const kilo = 2.20462;

const input = document.getElementById("input");
const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  const inputValue = parseFloat(input.value);

  const lengthInMeters = (inputValue / meter).toFixed(3);
  const lengthInFeet = (inputValue * meter).toFixed(3);

  const volumeInLiters = (inputValue / liter).toFixed(3);
  const volumeInGallons = (inputValue * liter).toFixed(3);

  const weightInPounds = (inputValue * kilo).toFixed(3);
  const weightInKilos = (inputValue / kilo).toFixed(3);

  lengthEl.innerHTML = `${inputValue} meters = ${lengthInFeet} feet | ${inputValue} feet = ${lengthInMeters} meters`;
  volumeEl.innerHTML = `${inputValue} liters = ${volumeInGallons} gallons | ${inputValue} gallons = ${volumeInLiters} liters`;
  massEl.innerHTML = `${inputValue} kilos = ${weightInPounds} pounds | ${inputValue} pounds = ${weightInKilos} kilos`;
});
