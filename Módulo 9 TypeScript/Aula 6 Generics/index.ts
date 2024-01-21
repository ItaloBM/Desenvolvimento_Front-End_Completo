// Generics

export{};

function printItem<T>(item: Array<T>): void{
    console.log(item.length)
}

printItem([1,2,3]);