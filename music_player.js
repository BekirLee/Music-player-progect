class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0;
    }
    getMusic() {
        return this.musicList[this.index];
    }
}