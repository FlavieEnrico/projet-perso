function challengesLoad(infos){
    challenges = infos["challenges"]
    startSlider()
}

var slideContainer = document.querySelector(".slider")
var sliderTitle = document.querySelector(".slider--title")
var sliderText = document.querySelector(".slider--text")
var btnRight = document.querySelector(".slider__btn-right")
var sliderStart = document.querySelector(".slider--btn")

let slideCounter = 0

const startSlider = () => {
  console.log(challenges[0])
  sliderTitle.innerHTML = challenges[0].title
  sliderText.innerHTML = challenges[0].text
  }
if (btnRight) {
  btnRight.addEventListener("click", function() {
    if (slideCounter === challenges.length - 1) {
      location.href = "./credits.html";
    } else {
      sliderTitle.innerHTML = challenges[slideCounter + 1].title
      sliderText.innerHTML = challenges[slideCounter + 1].text
      slideCounter++
      slideContainer.classList.add("fadeIn")
      setTimeout(() => {
        slideContainer.classList.remove("fadeIn")
      }, 1000)
    }
  })

}
  
  //startSlider()