window.onload = function(){

let arrimg = ["Біля тополі2.jpg","ДикеПоле.jpg","ДопоможеЗСУ.jpg","Люди.jpg","ГетьЗУкраїни.jpeg"]
let arrname = ["Біля Тополі","Дике Поле","Допоможе ЗСУ","Люди","Геть З України"]
let arrpersonsong = ["Shumeil","Yarmak","Chico Qatoshi","Бумбокс","Jerry Heil .feat Verka Serdjuchka"]
let arrnsongs = ["shumei_-_bilja_topoli_(z2.fm)","yarmak__alisa_-_dike_pole_(z2.fm)","chico__qatoshi_-_dopomozhe_zsu_(z2.fm)","bumboks_-_ljudi_(z2.fm)","jerry_heil_feat_verka_serdjuchka_-_get_z_ukrani_(z2.fm)"]
let player = document.getElementById("player")

// text
let imgText = document.getElementById("img")
let nameSongText = document.getElementById("nameSong")
let PersonNameText = document.getElementById("PersonName")
let CountSongText = document.getElementById("CountSong")
let customRange1 = document.getElementById("customRange1")
let customRange2 = document.getElementById("customRange2")
let timeNow = document.getElementById("timeNow")
let maxTime = document.getElementById("maxTime")
// text

// startSite
imgText.src = `./img/`+arrimg[4]
nameSongText.innerHTML = arrname[4]
PersonNameText.innerHTML = arrpersonsong[4]
player.src = `./video/${arrnsongs[4]}.mp3`
player.onloadedmetadata = () =>{
    customRange1.max = player.duration
    maxTime.innerHTML = splitTime(player.duration)
}
// startSite

// duration
let sec1
let min
const splitTime = (sec) =>{
    min = Math.floor(sec / 60)
    sec1 = Math.floor(sec % 60)
    if(min < 10 && sec1 < 10){
        return ` 0${min}:0${sec1}`
    }
        return ` ${min}:${sec1}`
}
// duration


// arrwleft/Right
let arrowright = document.getElementById("arrowright")
let arrowleft = document.getElementById("arrowleft")
let songcount = 0

function playersPlay (){
    CountSongText.innerHTML = songcount+1
    imgText.src = `./img/`+arrimg[songcount]
    nameSongText.innerHTML = arrname[songcount]
    PersonNameText.innerHTML = arrpersonsong[songcount]
    player.src = `./video/${arrnsongs[songcount]}.mp3`
    player.onloadedmetadata = () =>{
        customRange1.max = player.duration
        maxTime.innerHTML = splitTime(player.duration)
    }
    player.play()        
    StopPlay.src = "./img/icons8-пауза-50.png"
}

arrowleft.addEventListener("click",function(){
        arrowleft.style.width = "40px"
        arrowright.style.width = "33px"
        songcount--
        if(songcount == -1){
            songcount = 4
        }
        playersPlay()
   
})
arrowright.addEventListener("click",function(){
    arrowleft.style.width = "33px"
    arrowright.style.width = "40px"
    songcount++
    if(songcount == 5){
        songcount = 0
    }
     playersPlay()
})
// arrwleft/Right


// range
    customRange1.oninput = function(){
        player.currentTime = customRange1.value
    }
// range



// play/stop
let StopPlay = document.getElementById("StopPlay")
let stopCount = true
StopPlay.addEventListener("click",function(){
    if(stopCount){
        StopPlay.src = "./img/icons8-пауза-50.png"
        stopCount = false
        player.play()        
        customRange1.value = player.currentTime
        let int = setInterval(() => {
            customRange1.value = player.currentTime
            timeNow.innerHTML = splitTime(player.currentTime)
            if(player.currentTime == player.duration){
                StopPlay.src = "./img/icons8-воспроизведение-50.png"
                stopCount = true
            }
        }, 100);
    }
    else{
        StopPlay.src = "./img/icons8-воспроизведение-50.png"
        stopCount = true
        player.pause()
        clearInterval(int)
    }
})

// play/stop



// Range2
customRange2.oninput = function(){
    player.volume = customRange2.value
}
// Range2
}



