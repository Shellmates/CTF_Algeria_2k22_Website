const dates = document.querySelector("select");
const days = document.getElementsByClassName("Day");
days[0].classList.remove("hidden");

dates.addEventListener("change", function () {
  if (dates.selectedIndex == 0) {
    days[1].classList.add("hidden");
    days[2].classList.add("hidden");
    days[0].classList.remove("hidden");
  }
  if (dates.selectedIndex == 1) {
    days[0].classList.add("hidden");
    days[2].classList.add("hidden");
    days[1].classList.remove("hidden");
  }
  if (dates.selectedIndex == 2) {
    days[0].classList.add("hidden");
    days[1].classList.add("hidden");
    days[2].classList.remove("hidden");
  }
});
