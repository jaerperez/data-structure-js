// const array=["Diego","Karen","Oscar"];


// class MyArray {
//     constructor() {
//         this.length = 0;
//         this.data = {};
//     }

//     get(index) {
//         return this.data[index];
//     }

//     push(item) {
//         this.data[this.length] = item;
//         this.length++;
//         return this.data;
//     }
// }

// const myArray = new MyArray();
class MyArray{
    constructor({data=[],name}){
        this.data=data;
        this.name=name;
    }
    get (index){
        return this.data[index];
    }
    push(item){
        this.data.push(item);
    }
}

const myArray = new MyArray();

