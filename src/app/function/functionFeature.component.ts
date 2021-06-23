import { Component, OnInit } from '@angular/core';
import { Point } from './point';

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

const fn = (a: number) => a > 10;

fn.description = 'Jerry';

// Construct Signatures

type SomeObject = any;

type SomeConstructor = {
    new (s: string): SomeObject;
  };

// how to call ??

function fn2(ctor: SomeConstructor) {
    return new ctor("hello");
}

// Using the call signature
const digitsPattern1 = RegExp("^\\d+$");

// Using the construct signature
const digitsPattern2 = new RegExp("^\\d+$");

/* Study 1

*/
interface ActionReducer<T, V extends Point = Point> {
  (state: T | undefined, action: V): T;
}

@Component({
    selector: 'app-function',
    templateUrl: './functionFeature.component.html'
  })
  export class FunctionComponent implements OnInit {
    ngOnInit(): void {
        doSomething(fn);
        this.testActionReducer();
    }

    testActionReducer(): void{
      const myActionReducer = (a, b: Point) => a + b.y;

      // 打印 Jerry2
      console.log(myActionReducer('Jerry', { x: 1, y: 2}));
    }
  }