// создаем объект класса Bag
let myBag = new Bag(100,100);

// создаем предметы класса Item
let bottel = new Item('Water', 1, 1);
let porridge = new Item("Rice", 2, 2.5);
let iron = new Item('Iron', 99, 80);
let ballon = new Item('Red_ballon', 1, 98);

// добавляем предметы в сумку
myBag.add_item(bottel);
myBag.add_item(porridge);
myBag.add_item(iron);
myBag.add_item(ballon);

// показываем содержимое сумки
myBag.show_itemsIn();

// убираем бутылку из сумки
myBag.delItemFrom('Water');

// пытаемся добавить непредмет в сумку
let numBB = 5;
myBag.add_item(numBB);

// создаем коробку
let Ivan_box = new Box('Ivan', 150, 150);

// добавляем предметы в коробку
Ivan_box.add_item(bottel);
Ivan_box.add_item(porridge);
Ivan_box.add_item(iron);
Ivan_box.add_item(ballon);
//смотрим что в коробке
Ivan_box.show_itemsIn();