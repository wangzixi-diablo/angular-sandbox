import { Component, OnInit } from '@angular/core';
import { Point, MyFunc } from './point';
import { MyDate, GeneralFunction } from './myDate';

import { CONSTRUCT_SIGNATURE} from './construct-signature';

console.log(CONSTRUCT_SIGNATURE);

declare type ee = {
    name: string;
 };
 
 const jerry: ee = {
   name: 'Jerry'
 };
 
 // type alias
type GreetFunction = (a: string) => void;

// Call Signatures

// 注意这个语法，参数列表的圆括号后面，用冒号代表函数返回类型
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

/*const fn = (a: number) => a > 10;

fn.description = 'Jerry';
*/

const a1: GeneralFunction<string, number> = (a: string, b: number) => a + b;

const a2: GeneralFunction<string, number> = (a, b) => a + b;

const a3 = (a: string, b: number) => a + b;

const a4 = <GeneralFunction<string, number>>((a:string,b:number) => a + b);

console.log(a1('Ethan', 1));
console.log(a2('Ethan', 2));
console.log(a3('Ethan', 3));
console.log(a4('Ethan', 4));

const fn = <DescribableFunction>({
   description: 'Jerry'
});

const fn23 = Object.assign(
  function (number:number) { return number > 1 },
  fn
);

// two kinds summary

let composite: MyFunc = <MyFunc>({
  funcName: (name) => name
});

composite = Object.assign(
  function (name:string) { return name },
  composite
);

console.log(composite('composite'));
// Using the call signature
const digitsPattern1 = RegExp("^\\d+$");

// Using the construct signature
const digitsPattern2 = new RegExp("^\\d+$");

/* Study 1

*/
interface ActionReducer<T, V extends Point = Point> {
  (state: T | undefined, action: V): T;
}

const myDate = <MyDate>({
  toString: () => 'Jerry',
  setTime: (number) => number + 1
});


@Component({
    selector: 'app-function',
    templateUrl: './functionFeature.component.html'
  })
  export class FunctionComponent implements OnInit {
    ngOnInit(): void {
        doSomething(fn23);
        this.testActionReducer();
    }

    testActionReducer(): void{
      const myActionReducer = (a, b: Point) => a + b.y;

      // 打印 Jerry2
      console.log(myActionReducer('Jerry', { x: 1, y: 2}));

      console.log(myDate.toString(), myDate.setTime(12));
    }
  }