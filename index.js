const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonForest = document.querySelector('.forest')
const cardForest = document.querySelector('.card-forest')
const buttonRain = document.querySelector('.rain')
const cardRain = document.querySelector('.card-rain')
const buttonCoffee = document.querySelector('.cafeteria')
const cardCoffee = document.querySelector('.card-cafeteria')
const buttonFire = document.querySelector('.fireplace')
const cardFireplace = document.querySelector('.card-fireplace')
const minutesDisplay = document.querySelector('.minutes')
const forestAudio = new Audio('./audios/Floresta.wav')
const rainAudio = new Audio('./audios/Chuva.wav')
const cafeteriaAudio = new Audio('./audios/Cafeteria.wav')
const fireplaceAudio = new Audio('./audios/Lareira.wav')
const secondsDisplay = document.querySelector('.seconds')
let clickbuttonPlay = 0
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut
forestAudio.loop = true
rainAudio.loop = true
cafeteriaAudio.loop = true
fireplaceAudio.loop = true

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
    clickbuttonPlay = 0
  }

  function pause(){
    clearTimeout(timerTimeOut)
  }
  
  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      updateTimerDisplay(minutes, 0)
  
      if (minutes <= 0 && seconds <=0) {
        clearTimeout
        clickbuttonPlay = 0

        return
      }
  
      if (seconds <= 0) {
        seconds = 60
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }
  
  function clearClick() {
    if  (clickbuttonPlay == 0) {
     countdown()
     ++clickbuttonPlay
     return
 }
  }

  buttonPlay.addEventListener('click', () => {
    clearClick()
    })

    buttonPause.addEventListener('click', function() {
    clearTimeout(timerTimeOut)
    clickbuttonPlay = 0
    })

    buttonPlus.addEventListener('click', function() {
      updateTimerDisplay (minutes, (secondsDisplay.textContent))
      plus()
      
    })

    buttonMinus.addEventListener('click', function() {
      if (minutes <=0) {
        return
      }
      updateTimerDisplay(minutes, Number(secondsDisplay.textContent))
      minus()
    })

    buttonForest.addEventListener('click', function(){
      forestAudioPlaying()
      forestSoundOn()
    })
    
    buttonRain.addEventListener('click', function(){
      rainAudioPlaying()
      rainSoundOn()
    })

    buttonCoffee.addEventListener('click', function(){
      cafeteriaAudioPlaying()
      cafeteriaSoundOn()
    })

    buttonFire.addEventListener('click', function(){
      fireplaceAudioPlaying()
      fireplaceSoundOn()
    })

    function plus () {
      minutes += 5
      resetTimer()
    }

    function minus () {
      minutes >= 5 ? minutes -= 5 : minutes = 0
      resetTimer()
    }

    function forestSoundOn() {
      buttonForest.classList.toggle('active')
      cardForest.classList.toggle('active')
    }

    function rainSoundOn() {
      buttonRain.classList.toggle('active')
      cardRain.classList.toggle('active')

    }

    function cafeteriaSoundOn() {
      buttonCoffee.classList.toggle('active')
      cardCoffee.classList.toggle('active')

    }

    function fireplaceSoundOn() {
      buttonFire.classList.toggle('active')
      cardFireplace.classList.toggle('active')

    }


    function forestAudioPlaying() {
      if (forestAudio.currenTime != 0 && !forestAudio.paused) {
        forestAudio.pause()
      } else {
        forestAudio.play()
      }
    }

    function rainAudioPlaying() {
      if (rainAudio.currenTime != 0 && !rainAudio.paused) {
        rainAudio.pause()
      } else {
        rainAudio.play()
      }
    }

    function cafeteriaAudioPlaying() {
      if (cafeteriaAudio.currenTime != 0 && !cafeteriaAudio.paused) {
        cafeteriaAudio.pause()
      } else {
        cafeteriaAudio.play()
      }
    }

    function fireplaceAudioPlaying() {
      if (fireplaceAudio.currenTime != 0 && !fireplaceAudio.paused) {
        fireplaceAudio.pause()
      } else {
        fireplaceAudio.play()
      }
    }