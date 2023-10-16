const wrapper=document.querySelector(".wrapper"),
musicImg=wrapper.querySelector(".img-area img"),
musicName=wrapper.querySelector(".song-details .name"),
musicArtist=wrapper.querySelector(".song-details .artist"),
playPauseBtn=wrapper.querySelector(".play-pause"),
prevBtn=wrapper.querySelector("#prev"),
nextBtn=wrapper.querySelector("#next"),
mainAudio=wrapper.querySelector("#main-audio"),
progressArea=wrapper.querySelector(".pregress-area"),
progressBar=wrapper.querySelector(".progress-bar"),
musicList=wrapper.querySelector(".music-list"),
moreMusicBtn=wrapper.querySelector("#more-music")

function loadMusic(indexNumb)
{
    musicName.innerText=allMusic[indexNumb-1].name;
    musicArtist.innerText=allMusic[indexNumb-1].artist;
    musicImg.src = 'images/${allMusic[indexNumb-1].src}.jpg'
    mainAudio.src ='songs/${allMusic[indexNumb-1].src}.mp3'
}
function playMusic(){
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText="pause"
}
