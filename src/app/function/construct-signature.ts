type Jerry = {
    score: number;
}

type SomeConstructor = {
    new(s: number): Jerry;
};

class MyConstructor implements Jerry{
    score: number;
    constructor(score: number){
        this.score = score;
    }
}

function demo(ctor: SomeConstructor, number:number) {
    return new ctor(number);
}


console.log('Ethan:' , demo(MyConstructor, 100));
console.log('Ethan:' , demo(MyConstructor, 200));


interface ComesFromString {
    name: string;
}

interface StringConstructable {
    new(n: string): ComesFromString;
}

class MadeFromString implements ComesFromString {
    constructor (public name: string) {
        console.log('ctor invoked: ', name);
    }
}

function makeObj(n: StringConstructable) {
    return new n('hello!');
}

console.log(makeObj(MadeFromString).name);

export const CONSTRUCT_SIGNATURE = '1';
