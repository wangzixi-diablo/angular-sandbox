export type Point = {
    x: number;
    y: number;
}

export interface MyFunc {
    (arg: string): string //a call signature
    funcName: (arg: string) => string //express of function in object literal
}

interface Counter {
    // callable part
    (start: number): string
    // static properties
    interval: number
    reset(): void
  }
  
  const getCounter = () => {
     const counter = ((start:number) => {}) as Counter
     counter.interval = 123
     counter.reset = () => {}
     return counter
  }
  
  const callable = getCounter();
  callable(10);
  callable.reset();
  callable.interval = 5;