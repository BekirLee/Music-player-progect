const player = new MusicPlayer(musicList);

let musicName = player.getMusic();
console.log(musicName.getName());
player.next();
console.log(musicName.getName());
player.previous();
console.log(musicName.getName());
