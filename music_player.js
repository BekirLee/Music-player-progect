class MusicPlayer {
    constructor(musicList,categoryList) {
        this.musicList = musicList;
        this.categoryList = categoryList;
        this.index = 0;
    }

    getMusic() {
        return this.musicList[this.index];
    }

    next() {
        if (this.index + 1 < this.musicList.length) {
            this.index++;
        }
        else {
            this.index = 0;
        }
    }

    previous() {
        if (this.index != 0) {
            this.index--;
        } else {
            this.index = this.musicList.length - 1;
        }
    }
}