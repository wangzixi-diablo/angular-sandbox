import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
  seed: number;
  constructor(){
    this.seed = Number((Math.random() * 100).toFixed(0));
  }
}

// @Injectable() 去掉仍然能够工作？

export class MyNewService {
  seed: number;
  text: 'NewService';
  constructor(){
    this.seed = Number((Math.random() * 100).toFixed(0));
    console.log('diablo constructor called: ' + this.seed);
  }
}