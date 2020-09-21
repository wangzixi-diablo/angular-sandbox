import { of, fromEvent, interval, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';
import { createStore } from 'redux';

@Injectable()
export class JerrySandBoxService{
    name = 'Jerry';
    jerryMap: OperatorFunction<Event, number> = switchMap(this.jerryintervalFunction);

    jerryintervalFunction(event: Event){
        console.log('event: ' + event.timeStamp );
        /*
        returns an Observable that emits an infinite sequence
        of ascending integers, with a constant interval of time of your choosing between those emissions.*/

        // const a = interval(1000);
        // return a;
        // return event.timeStamp;
        return of(event.timeStamp);
    }

    counter(state: 0, action){
        switch (action.type) {
            case 'INCREMENT':
              return state + 1;
            case 'DECREMENT':
              return state - 1;
            case '@@redux/INIT':
              return 0;
            default:
              return state;
            }
    }
    print2(){
        const store = createStore(this.counter);
        store.subscribe(() =>
            console.log(store.getState())
        );

        // 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
        store.dispatch({ type: 'INCREMENT' });
// 1
        store.dispatch({ type: 'INCREMENT' });
// 2
        store.dispatch({ type: 'DECREMENT' });
// 1
    }

    print(){
        /*
        const observable = of(1, 2, 3);
        const newObservable = observable.pipe(
            tap(num => console.log(num)),
            map(num => 'hello world: ' + num)
        );
        newObservable.subscribe(data => console.log('in subscribe: ' + data));*/
        const clicks: Observable<Event> = fromEvent(document, 'click');

        const result = clicks.pipe(this.jerryMap);
        // result.subscribe(x => console.log(x));
        result.subscribe(x => {
            console.log(x);
        });
    }
}
