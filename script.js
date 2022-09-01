console.log(
  "Welcome To Spotify"
); /*First thing-->To check in console it its working or not*/
//initialize the variable
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));/*songs play one by pne first step*/

/*songs list*/
let songs = [
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "Hadippa",filepath: "songs/1.mp3",coverpath: "covers/2.jpg"},
  {songName: "Chal Waha Jate Hai",filepath: "songs/1.mp3",coverpath: "covers/3.jpg"},
  {songName: "Despacito",filepath: "songs/1.mp3",coverpath: "covers/4.jpg"},
  {songName: "Crazy 4",filepath: "songs/1.mp3",coverpath: "covers/5.jpg"},
  {songName: "Raith",filepath: "songs/1.mp3",coverpath: "covers/6.jpg"},
  {songName: "Dard e Disco",filepath: "songs/1.mp3",coverpath: "covers/7.jpg"},
  {songName: "Dhoom Machale",filepath: "songs/1.mp3",coverpath: "covers/8.jpg"},
  {songName: "Alan Walker",filepath: "songs/1.mp3",coverpath: "covers/9.jpg"},
  {songName: "Amplifier",filepath: "songs/1.mp3",coverpath: "covers/10.jpg"},
];
//song play one by one 2nd Step
songItems.forEach((elememt,i)=>{
  console.log(elememt, i);// removed after adding this--> console.log(e);
  elememt.getElementsByTagName("img")[0].src = songs[i].coverpath;// for cover img
  elememt.getElementsByClassName("songName")[0].innerText = songs[i].songName;// for songs path -->getting song name from here

})
//Handle Play/Pause Click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//Listen To Events
audioElement.addEventListener("timeupdate", () => {
  //console.log('timeupdate');
  //Update Seek Bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //console.log(progress);
  myProgressBar.value = progress;
});

//seekbar mouse move update song
myProgressBar.addEventListener('change', ()=>{
 audioElement.currentTime = myProgressBar.value * audioElement.duration/100;   
})

//click event on every song to play 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((elememt) =>{
  elememt.addEventListener('click',(e)=>{
    makeAllPlays();
//console.log(e.target);
e.target.classList.remove("fa-play-circle");
e.target.classList.add("fa-Pause-circle");

  })
})

//Function
const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((elememt) =>{
  elememt.classList.add('fa-Pause-circle');
  element.classList.add('fa-play-circle');
  }) 
}
