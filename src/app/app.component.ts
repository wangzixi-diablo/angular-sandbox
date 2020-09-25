import { Component, OnInit } from '@angular/core';
import { JerrySandBoxService } from './jerrySandBoxService';
import { GreetingService } from './greeting.service';
import { fromEvent, Observable, of, from, range } from 'rxjs';
import { throttleTime, map } from 'rxjs/operators';
import { filter, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sandbox';
    constructor(private jerryService: JerrySandBoxService,
                private englishGreet: GreetingService){
      // this.jerryService.print();
      // this.jerryService.print2();
      // console.log(this.englishGreet.greet('Jerry'));
  }
  /*
  throttleTime(1000)
  */


  accumulator(acc: number, value: number, index: number): number{
    console.log('in accumulator, acc: ' + acc + ' current value: ' + value
     + ' index: ' + index);
    return acc + value;
  }

  ngOnInit(): void {
    console.log('before ngOnInit');
    const source$ = range(0, 10);


    source$.pipe(
      filter((x, index) => {
        console.log('inside filter!: ' + x + ' index: ' + index); 
        return x % 2 === 0 }),
      map( x => { 
        console.log('inside map: ' + x);
        return (x + x); }
        ),
      // scan((acc, x) => acc + x, 0)
      scan(this.accumulator)
    )
    .subscribe(x => console.log('result: ' + x));
  }

  jerryTest(){
    const button = document.querySelector('button');
    fromEvent(button, 'click').pipe(map(event => (event as MouseEvent).x ), scan((count, clientX) => count + clientX, 0))
    .subscribe(count => console.log(`total sum of mouse event.x: ${count} `));
  }

  jerrytest2(){
    const ob = new Observable(function subscribe(observer) {
      // 追踪 interval 资源
      const intervalID = setInterval(() => {
        observer.next('hi');
      }, 1000);
      // 提供取消和清理 interval 资源的方法
      return function jerryunsubscribe() {
        debugger;
        clearInterval(intervalID);
      };
    });

    const jerry = ob.subscribe((x) => console.log(x));
    jerry.unsubscribe();
  }

  jerry_custom_operator(){
     // input has type observable
     function multiplyByTen(input) {
      return new Observable(function subscribe22anyname(observer) {
        input.subscribe({
          next: (v) => observer.next(10 * v),
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
      });
    }
    const inpute = from([1, 2, 3, 4]);
    const output = multiplyByTen(inpute);
    output.subscribe(x => console.log(x));
  }
}
