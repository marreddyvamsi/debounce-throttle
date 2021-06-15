const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

let inputval = document.getElementById("search");
let disval = document.getElementById("dis");

let dosome = (e) => {
  let val = e.target.value;
  if (e.target.value) {
    disval.textContent = days.filter((day) => {
      return day.includes(e.target.value);
    });
  } else {
    disval.textContent = "";
  }
};
dosome = debounce(dosome, 500);

inputval.addEventListener("keyup", (e) => {
  dosome(e);
});

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
