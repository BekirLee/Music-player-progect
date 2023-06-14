const container = document.querySelector(".container");
const image = document.querySelector("#music_img");
const title = document.querySelector("#music_details #title");
const singer = document.querySelector("#music_details #singer");
const prev = document.querySelector("#controllers #prev");
const play = document.querySelector("#controllers #play");
const next = document.querySelector("#controllers #next");
const currentTime = document.querySelector("#current_time");
//const current_time = document.querySelector("#current_time");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector("#progress_bar");
const volume = document.querySelector("#volume");
const volume_bar = document.querySelector("#volume_bar");


const player = new MusicPlayer(musicList);



window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
})

function displayMusic(music) {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
};

play.addEventListener("click", () => {
    const isMusicPLay = container.classList.contains("playing");
    isMusicPLay ? pauseMusic() : playMusic();
});

function prevMusic() {
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};

prev.addEventListener("click", () => {
    prevMusic();
});

function nextMusic() {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

next.addEventListener("click", () => {
    nextMusic();
});

function playMusic() {
    container.classList.add("playing");
    audio.play();
    play.classList = ("fa-solid fa-pause");
}

function pauseMusic() {
    container.classList.remove("playing");
    audio.pause();
    play.classList = ("fa-solid fa-play");

}

const calculateTime = (resultTime) => {
    const minutes = Math.floor(resultTime / 60);
    const seconds = Math.floor(resultTime % 60);
    const updatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const finalTime = `${minutes}:${updatedSeconds}`;
    return finalTime;
}

audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});

progressBar.addEventListener("input", () => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});


volume_bar.addEventListener("input", (e) => {
    const volue = e.target.value;
    audio.volume = volue / 100;
    if (audio.volume == 0) {
        audio.muted = true;
        mute = "muted";
        volume.classList = ("fa-solid fa-volume-xmark");
    } else {
        audio.muted = false;
        mute = "notmuted";
        volume.classList = ("fa-solid fa-volume-high");
    }
});


let mute = "notmuted";

volume.addEventListener("click", () => {
    if (mute === "notmuted") {
        audio.muted = true;
        mute = "muted";
        volume.classList = ("fa-solid fa-volume-xmark");
        volume_bar.value = 0;
    } else {
        audio.muted = false;
        mute = "notmuted";
        volume.classList = ("fa-solid fa-volume-high");
        volume_bar.value = 100;

    }
});

