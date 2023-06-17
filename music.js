class Music {
    constructor(title, singer, img, file, categoryId) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
        this.categoryId = categoryId

    }

    getName() {
        return this.title + " - " + this.singer;
    }


}
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

}


const categories = [
    new Category(1, 'Pop'),
    new Category(2, 'arabesk'),
    new Category(3, 'rock'),
    new Category(4, 'rap'),

]

const musicList = [
    new Music("Bu da Geçer mi Sevgilim", "Yalin", "2.jpeg", "2.mp3", 4),
    new Music("Boşver", "Nilüfer", "1.jpeg", "1.mp3", 1),
    new Music("Aramizda Uçurumlar", "Suat Suna", "3.jpeg", "3.mp3", 2),
    new Music("Spiderman 2099", "Seamon", "gwen.jpeg.jpg", "4.mp3", 3),
    new Music("Another Love", "Another", "4.jpg", "5.mp3", 1),

];
