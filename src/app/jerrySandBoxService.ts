import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class JerrySandBoxService{
    name = 'Jerry';
    print(){
        const observable = of(1, 2, 3);
        const opt = map(num => 'hello world: ' + num + ' done');
        const newObservable = opt(observable);
        newObservable.subscribe(data => console.log(data));
    }
}
