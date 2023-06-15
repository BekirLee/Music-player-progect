class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }


}
const musicList = [
    new Music("Boşver", "Nilüfer", "1.jpeg", "1.mp3"),
    new Music("Bu da Geçer mi Sevgilim", "Yalin", "2.jpeg", "2.mp3"),
    new Music("Aramizda Uçurumlar", "Suat Suna", "3.jpeg", "3.mp3"),
    new Music("Spiderman 2099", "Seamon", "gwen.jpeg.jpg", "4.mp3"),
    new Music("Another Love", "Another", "4.jpg", "5.mp3"),

];
