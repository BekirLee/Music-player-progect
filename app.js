const container = document.querySelector(".container");
const image = document.querySelector("#music_img");
const title = document.querySelector("#music_details #title");
const singer = document.querySelector("#music_details #singer");
const category = document.querySelector("#music_details #category");
const prev = document.querySelector("#controllers #prev");
const play = document.querySelector("#controllers #play");
const next = document.querySelector("#controllers #next");
const currentTime = document.querySelector("#current_time");
//const current_time = document.querySelector("#current_time");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector("#progress_bar");
const volume = document.querySelector("#volume");
const volume_bar = document.querySelector("#volume_bar");
const ulMusiclist = document.querySelector(".ulMusiclist");


const player = new MusicPlayer(musicList, categories);

window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
    isPlaying();
});



play.addEventListener("click", () => {
    const isMusicPLay = container.classList.contains("playing");
    isMusicPLay ? pauseMusic() : playMusic();
});



prev.addEventListener("click", () => {
    prevMusic();
});



next.addEventListener("click", () => {
    nextMusic();
});



document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        event.preventDefault(); // Sayfanın kaymaması için önlem alıyoruz
        if (container.classList.contains("playing")) {
            pauseMusic();
        } else {
            playMusic();
        }
    }
});

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
    console.log(audio.volume)
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


const selectedMusic = (li) => {
    player.index = li.getAttribute("li-index");
    displayMusic(player.getMusic());
    playMusic();
    isPlaying();
};


const isPlaying = () => {
    for (let i of ulMusiclist.querySelectorAll(".ulMusiclist li")) {
        if (i.classList.contains("playing")) {
            i.classList.remove("playing");
        }
        if (i.getAttribute("li-index") == player.index) {
            i.classList.add("playing");
        }

    }
};


audio.addEventListener("ended", () => {
    nextMusic();
})


const displayMusicList = (list) => {
    //bu asadidaki hisseleri yeniden anlatmaq lazimdi!
    for (var i = 0; i < list.length; i++) {
        var liTag = `
        <li li-index='${i}' onclick="selectedMusic(this)" class="group-item p-1  d-flex align-items-center justify-content-between">
        <span>${list[i].getName()} </span>
   
       
        <span id="music-${i}" class="badge btn-primary rounded-pill"></span>
        <audio class="music-${i}" src="mp3/${list[i].file}"></audio>
         </li>`;

        ulMusiclist.insertAdjacentHTML("beforeend", liTag);

        let audioDuration = ulMusiclist.querySelector(`#music-${i}`);
        let audioTag = ulMusiclist.querySelector(`.music-${i}`);

        audioTag.addEventListener("loadeddata", () => {
            audioDuration.innerText = calculateTime(audioTag.duration);
        });
    }

};


function getCategorName(id) {
    console.log(id)

    var name = ''
    let categoriesList = player.categoryList


    categoriesList.forEach(element => {
        element.id == id ? name = element.name : ''
    });

    return name

}


function nextMusic() {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
    isPlaying();
}


function prevMusic() {
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};


//pause
function pauseMusic() {
    container.classList.remove("playing");
    audio.pause();
    play.querySelector("i").classList = ("fa-solid fa-play");
    isPlaying();
}


//play mucis
function playMusic() {
    container.classList.add("playing");
    audio.play();
    play.querySelector("i").classList = ("fa-solid fa-pause");

}


//bringing music
function displayMusic(music) {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    category.innerText = getCategorName(music.categoryId);
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
};

