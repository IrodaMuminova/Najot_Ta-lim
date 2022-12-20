let getPerson = (name, phone, birthDate, createdDate, bonus, height, weight) => {
    return {
        name,
        phone,
        birthDate,
        createdDate,
        bonus,
        height,
        weight: weight,
        getAge() {
            let thisYear = new Date().getFullYear();
            let birthYear = new Date(this.birthDate).getFullYear();
            let age = thisYear - birthYear;
            return age;
        }
        ,
        isHealthy() {
            if (this.height - this.weight >= 110) {
                return 'Siz sog\'lomsiz'
            }
            else {
                return "O\'z ustingizda ishlashingiz kerak"
            }
        }
        ,
        getBalance() {
            let thisYear = new Date().getFullYear();
            let birthYear = new Date(this.birthDate).getFullYear()
            let Sodiqlik_Bonusi = (thisYear - birthYear) * 25000;
            return this.bonus + Sodiqlik_Bonusi
        }
    }


}

console.log(getPerson("Farangiz", "+998972340117", "03-01-2004", "11-12-2021", 120000, 55, 175).getBalance())
