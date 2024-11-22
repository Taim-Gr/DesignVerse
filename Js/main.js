let el = document.querySelector(".scroller");
let scrollHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;
let Height = scrollHeight - clientHeight;
// cause the clientheight i cant scroll in it that why i delete it from the all height .
addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  let scrollPercentge = `${(scrollTop / Height) * 100}`;
  el.style.width = `${Math.min(scrollPercentge, 100)}%`;
});

// Start Mega menu Click .
let megaMenu = document.querySelector(".mega-menu");
let otherLinks = document.querySelector(".header .other").parentElement;
let megaImage = document.querySelector(".mega-menu img");
otherLinks.addEventListener("click", function () {
  megaMenu.classList.add("active");
  megaMenu.style.cssText = `
        z-index: 10;
        opacity: 10;
        top: calc(100% + 1px);
        padding: 5px;
  `;
});
document.addEventListener("click", function (event) {
  if (
    event.target !== megaMenu &&
    event.target !== otherLinks &&
    event.target !== otherLinks.children[0] &&
    event.target !== megaImage
  ) {
    megaMenu.classList.remove("active");
    megaMenu.style.cssText = `
    z-index: -1;
    opacity: 0;
    `;
  }
});
// End Mega menu Click .
// Date Counter
let countDownDate = new Date("Dec 31, 2024  23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiffrence = countDownDate - dateNow;
  // Get Time Units :
  // Years :
  let days = Math.floor(dateDiffrence / (1000 * 60 * 60 * 24));
  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  // console.log(days);
  let hours = Math.floor(
    (dateDiffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((dateDiffrence % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((dateDiffrence % (1000 * 60)) / 1000);
  document.querySelector(".events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiffrence <= 0) {
    clearInterval(counter);
    document.querySelector(".events .text h2").innerHTML =
      "it's 2025 ! Happy New Year ";
  }
}, 1000);
// Date Counter
