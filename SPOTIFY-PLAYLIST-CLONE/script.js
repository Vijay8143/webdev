let songIndex=0;
let songId=0;
let front=document.querySelector(".forward");
let back=document.querySelector(".backward");
let audioElement=new Audio();
let masterPlay=document.querySelector("#masterplay");
let myProgressBar=document.querySelector('#myprogressBar');
let gif=document.querySelector('#gif');
let songItems=document.querySelectorAll('.songItem');
let playlist=document.querySelectorAll('.list');
let songInfo=document.querySelector('.songInfo');
let currentIndex=-1;
let songs=[
    {songName:"Legion",filePath:'songs/1.mp3',coverPath:"covers/1.jpg"},
    {songName:"Trap",filePath:'songs/2.mp3',coverPath:"covers/2.jpg"},
    {songName:"They MAD",filePath:'songs/3.mp3',coverPath:"covers/3.jpg"},
    {songName:"Rich-The-Kid",filePath:'songs/4.mp3',coverPath:"covers/4.jpg"},
    {songName:"Back It Up",filePath:'songs/7.mp3',coverPath:"covers/7.jpg"},
    {songName:"The Safety Dance",filePath:'songs/6.mp3',coverPath:"covers/6.jpg"}
]


songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})
// audioElement.play();
//Handle play /pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        if(!audioElement.src){
            audioElement.src='songs/1.mp3';
        }
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        gif.style.opacity=0;
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
    }
});
//adding event listener to make the song to be played when clicked from the playlist
    playlist.forEach((ele, i) => {
            ele.addEventListener('click', () => {
    // Reset all icons to play before changing current one
    playlist.forEach((icon) => {
        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
    });

    if (currentIndex === i && !audioElement.paused) {
      // Pause if clicking the currently playing song
        audioElement.pause();
        ele.classList.remove('fa-circle-pause');
        ele.classList.add('fa-circle-play');
        currentIndex = -1;
        gif.style.opacity=0;
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
    } else {
      // Play new song
        gif.style.opacity=1;
        audioElement.src = songs[i].filePath;
        audioElement.play();
        songInfo.innerText=songs[i].songName;
        ele.classList.remove('fa-circle-play');
        ele.classList.add('fa-circle-pause');
        currentIndex = i;
        songId=currentIndex;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
});
});
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seek bar
    myProgressBar.value=parseInt((audioElement.currentTime / audioElement.duration) * 100);
});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value * audioElement.duration)/100;
});
front.addEventListener('click',()=>{
    if(songId>=songs.length-1){
        songId=0;
    }
    else{
        songId++;
    }
    playlist.forEach((icon) => {
        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
    });
    playlist[songId].classList.remove('fa-circle-play');
    playlist[songId].classList.add('fa-circle-pause');
    gif.style.opacity=1;

    audioElement.src = songs[songId].filePath;
    audioElement.play();
    songInfo.innerText=songs[songId].songName;
});

back.addEventListener('click',()=>{
    if(songId<=0){
        songId=songs.length-1;
    }
    else{
        songId--;
    }
    playlist.forEach((icon) => {
        icon.classList.remove('fa-circle-pause');
        icon.classList.add('fa-circle-play');
    });
    playlist[songId].classList.remove('fa-circle-play');
    playlist[songId].classList.add('fa-circle-pause');
    gif.style.opacity=1;
    audioElement.src = songs[songId].filePath;
    audioElement.play();
    songInfo.innerText=songs[songId].songName;
});

