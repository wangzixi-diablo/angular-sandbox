import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
  seed: number;
  text = 'OldService';
  constructor(){
    this.seed = Number((Math.random() * 100).toFixed(0));
  }
  public print = () => {
    console.log('Hello in MyService: ' + this.seed + ' type: '
    + this.text);
  }
}

@Injectable({ providedIn: 'root' })
export class MyNewService {
  seed: number;
  text = 'NewService';
  constructor(){
    this.seed = Number((Math.random() * 100).toFixed(0));
  }

  public print = () => {
    console.log('Hello in MyNewService: ' + this.seed
    + ' type: ' + this.text);
  }
}

@Injectable({ providedIn: 'root' })
export class MyNewerService {
  seed: number;
  text = 'NewerService';
  constructor(){
    this.seed = Number((Math.random() * 100).toFixed(0));
  }

  public print = () => {
    console.log('Hello in MyNewerService: ' + this.seed
    + ' type: ' + this.text);
  }
}