// const thumb = document.querySelectorAll(".thumb");

// thumb.forEach(function (i) {
//   i.addEventListener("click", function (e) {
//     const jumboImg = document.querySelector(".jumbo-img");
//     jumboImg.src = e.target.src;
//   });
// });

const container = document.querySelector(".container");
const jumboImg = document.querySelector(".jumbo-img");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumboImg.src = e.target.src;
    jumboImg.classList.add("fade");
    setTimeout(function () {
      jumboImg.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
