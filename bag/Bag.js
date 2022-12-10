// класс для сумки с методами
class Bag {
    constructor(maxWeight, maxVolume) {
        this.name = 'сумка';
        this.maxWeight = maxWeight;
        this.maxVolume = maxVolume;
        this.totalWeight = 0;
        this.totalVolume = 0;
        this.itemsAll = [];
    }
    add_item(item) {
        if (!(item instanceof Item)) {
            return console.log(`Добавлять в  ${this.name} можно только обьекты класса Item`)
        };
        if ((this.totalWeight + item.weight) > this.maxWeight) {
            return console.log('Превышен максимальный вес')
        };
        if ((this.totalVolume + item.volume) > this.maxVolume) {
            return console.log(`${this.name} не вмешает такой объем`)
        };
        this.totalWeight += item.weight;
        this.totalVolume += item.volume;
        this.itemsAll.push(item);
        console.log(`${item.name} успешно добавлен в ${this.name}`)
    }

    show_itemsIn() {
        console.log('Список предметов в наличии :')
        console.log(...this.itemsAll)
    }
    
    delItemFrom(name) {
        for (let i= 0; i <= this.itemsAll.length; i++) {
            if (this.itemsAll[i].name == name) {
                console.log(`Убираем ${this.itemsAll[i].name}`)
                this.itemsAll.splice(i, 1);
                break;
            }
        }

    }
}
