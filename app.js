const container = document.querySelector(".container");
const image = document.querySelector("#music_img");
const title = document.querySelector("#music_details #title");
const singer = document.querySelector("#music_details #singer");
const prev = document.querySelector("#controllers #prev");
const play = document.querySelector("#controllers #play");
const next = document.querySelector("#controllers #next");

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
};

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



