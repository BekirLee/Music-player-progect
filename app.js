const container = document.querySelector(".container");
const image = document.querySelector("#music_img");
const title = document.querySelector(".music_details #title");
const singer = document.querySelector(".music_details #singer");
const prev = document.querySelector(".controllers #prev");
const play = document.querySelector(".controllers #play");
const next = document.querySelector(".controllers #next");









let player = new MusicPlayer(musicList);

let music = player.getMusic();
console.log(music.getName());

player.next();
music = player.getMusic();
console.log(music.getName());
