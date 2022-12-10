
let st = new Stack();

let first = new StackObj("obj1");
let second = new StackObj("obj2");
let third = new StackObj("obj3");

// добавляем объекты
st.pushInStack(first);
st.pushInStack(second);
st.pushInStack(third);

// получаем полный список
console.log(st.dict);

// проверяем наличие ссылок
console.log(first.next);


