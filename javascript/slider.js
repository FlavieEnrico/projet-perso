function challengesLoad(infos){
    challenges = infos["challenges"]
    startSlider()
}

const slideContainer = document.querySelector(".slider")
const sliderTitle = document.querySelector(".slider--title")
const sliderText = document.querySelector(".slider--text")
const btnRight = document.querySelector(".slider__btn-right")
const sliderStart = document.querySelector(".slider--btn")

let slideCounter = 0

const startSlider = () => {
  console.log(challenges[0])
  sliderTitle.innerHTML = challenges[0].title
  sliderText.innerHTML = challenges[0].text
  }

  btnRight.addEventListener("click", function() {
    if (slideCounter === challenges.length - 1) {
      console.log(challenges[0])
      sliderTitle.innerHTML = challenges[0].title
      sliderText.innerHTML = challenges[0].text
      slideCounter = -1
  
      slideContainer.classList.add("fadeIn")
      setTimeout(() => {
        slideContainer.classList.remove("fadeIn")
      }, 1000)
    } else {
      console.log(challenges[slideCounter + 1])
      sliderTitle.innerHTML = challenges[slideCounter + 1].title
      sliderText.innerHTML = challenges[slideCounter + 1].text
      slideCounter++
      slideContainer.classList.add("fadeIn")
      setTimeout(() => {
        slideContainer.classList.remove("fadeIn")
      }, 1000)
    }
  })
  
  //startSlider()