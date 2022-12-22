// 3. Stringlar massivi berilgan. Faqat uzunligi 5 dan kichik bo'lgan elementlaridan tashkil topgan
//  massiv qaytaradigan funksiya yozing

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter((elem) => (elem.length <= 5))
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

