// класс коробка (дополнительн имеет бирку с именем владельца)
class Box extends Bag {
    constructor(nikname, maxWeight, maxVolume){
        super(maxWeight, maxVolume);
        this.name = 'Коробка'
        this.nikname = nikname;
    }
}