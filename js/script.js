
var mainImg = document.getElementById("mainImg");
var butllet = Array.from(document.querySelectorAll(".butllet"));

for (var i = 0; i < butllet.length; i++) {
  butllet[i].addEventListener("click", function (e) {
    var imgSrc = this.getAttribute("src");
    mainImg.setAttribute("src", imgSrc);
  });
}

var imgList = Array.from(document.querySelectorAll(".item img"));
var lightgalleryOverlay = document.getElementById("lightgalleryOverlay");
var lightgallery = document.getElementById("lightgallery");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var closeBtn = document.getElementById("closeBtn");
var currImgIndex;
for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {

    currImgIndex = imgList.indexOf(e.target);
    lightgalleryOverlay.classList.replace("d-none", "d-flex");
    lightgallery.style.backgroundImage = `url(${e.target.src})`;
  });
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
closeBtn.addEventListener("click", closeSlider);

function nextSlide() {
  currImgIndex++;
  if (currImgIndex == imgList.length) {
    currImgIndex = 0;
  }

  lightgallery.style.backgroundImage = `url(${imgList[currImgIndex].src})`;
}

function prevSlide() {
  currImgIndex--;
  if (currImgIndex == 0) {
    currImgIndex = imgList.length - 1;
  }
  lightgallery.style.backgroundImage = `url(${imgList[currImgIndex].src})`;
}

function closeSlider() {
  lightgalleryOverlay.classList.replace("d-flex", "d-none");
}

lightgalleryOverlay.addEventListener("keyup", function (e) {

  console.log(e.key);
  switch (e.key) {
    case "ArrowRight":
      nextSlide();
      break;
    case "ArrowLeft":
      prevSlide();
      break;
    case "Escape":
      closeSlider();
      break;
    default:
  }

});
