class Bag {
    constructor(maxWeight, maxVolume) {
        this.maxWeight = maxWeight;
        this.maxVolume = maxVolume;
        this.totalWeight = 0;
        this.totalVolume = 0;
        this.itemsAll = [];
    }
    add_item(item) {
        if (!item instanceof Item) {
            return console.log('Добавлять в  сумку можно только обьекты класса Item')
        };
        if ((this.totalWeight + item.weight) > this.maxWeight) {
            return console.log('Превышен максимальный вес')
        };
        if ((this.totalVolume + item.volume) > this.maxVolume) {
            return console.log('Сумка не вмешает такой объем')
        };
        this.totalWeight += item.weight;
        this.totalVolume += item.volume;
        this.itemsAll.push(item);
    }
}

