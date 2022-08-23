export let person = {
    name: "Derek",
    age: 29,
    isActive: true,
    hobbies:  ["soccer", "baseball"],
    toString() {
        let objectString = this.name + '' + this.age;
        console.log( objectString );
    }
}
   // person.toString();

let car = {
    brand: "chevrolet",
    gearBox: 'manual',
    color: "red",
    year: 2022,

}

let smartTv = {
inch: 55,
panel: "Oled",
brand: "samsung",
isAndroidTv: true

}

let youtubeVideo = {
    length: 60,
    format: "mp4",
    author: 'Fernando Herrera',
    language: "Español",

}