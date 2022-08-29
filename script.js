console.log("Welcome To Spotify"); /*First thing-->To check in console it its working or not*/
//initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

/*songs list*/
let songs = 
[
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
  {songName: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
]

//Handle Play/Pause Click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0)
{
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
}
else
{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
}
})

//Listen To Events
audioElement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    //Update Seek Bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;

})
