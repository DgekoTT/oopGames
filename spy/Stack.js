/**
 * Пробую создать стек-подобную структуру, когда один объект 
 * ссылается на следующий и так по цепочке до последнего
 */

//класс для описания объектов стека

class StackObj {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// класс для управления 
class Stack {
    constructor() {
        this.top = null; // ссылка на первый объект стека
        this.dict = {}; // хранилище обьектов в стеке
        this.count = 1; // счетчик количестов объектов в стеке
    }
    // добавление объекта
    pushInStack(obj) {
        let  number = 'obj' + this.count;
        if (!this.top) {
            this.top = obj;
            this.dict[`${number}`] = obj;
            this.count += 1;
            return console.log('Первый объект добавлен');
        } else {
            let ch_top = this.top;
            let newObj = null;
            while (ch_top != null) {
                newObj = ch_top;
                ch_top = ch_top.next;
            }
            newObj.next = obj;
            this.dict[`${number}`] = obj;
            this.count += 1;
            } 
    }
        


    //удаление последнего объекта в хранилище
    delObj() {
        let delObject = null;
        let first = this.top;
        while (!first.next == null) {
            delObject = first;
            first = first.next;
        delObject.next = null;
        let delName = toString(this.count-1);
        delete this.dict.delName
        this.count -= 1;
        }       
    }

}
    