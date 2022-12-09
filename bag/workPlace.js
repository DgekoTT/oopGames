let myBag = new Bag(100,100);
console.log(myBag);

let bottel = new Item('water',1,1);
console.log(bottel);

myBag.add_item(bottel);

console.log(...myBag.itemsAll);
