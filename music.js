class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this, this.title + " - " + this.file;
    }
}

const musicList = [
    new Music("Bos ver", "Nilufer", "1.jpeg", "1.mp3"),
    new Music("Bos ver", "Nilufer", "1.jpeg", "1.mp3"),

];