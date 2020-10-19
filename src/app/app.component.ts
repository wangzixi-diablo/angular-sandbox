import { Component, OnInit, Inject } from '@angular/core';
import { JerrySandBoxService } from './jerrySandBoxService';
import { GreetingService } from './greeting.service';
import { fromEvent, Observable, of, from, range, interval, asyncScheduler, concat, merge, OperatorFunction, timer, combineLatest } from 'rxjs';
import { throttleTime, map, switchMap, take, mapTo, concatMap, concatMapTo, mergeScan, switchMapTo, delay, debounceTime, distinctUntilChanged, tap, takeWhile, withLatestFrom } from 'rxjs/operators';
import { filter, scan } from 'rxjs/operators';

import { ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { build$ } from 'protractor/built/element';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

interface Jerry {
  [uid: string]: {
    [pageContext: string]: Observable<number[]>;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sandbox';
  userInput = 'Jerry';
  condition = false;
  hero = {
    name: 'Jerry'
  };

  @ViewChild('tpl2') ttTobeAdd: TemplateRef<void>;
  @ViewChild('container_id', { read: ViewContainerRef })
  jerryContainer: ViewContainerRef;
  showTpl() {
    this.jerryContainer.createEmbeddedView(this.ttTobeAdd);
  }

  constructor(private jerryService: JerrySandBoxService, private englishGreet: GreetingService, @Inject(APP_CONFIG) config: AppConfig) {
    this.test();
  }

  accumulator(acc: number, value: number, index: number): number {
    console.log('in accumulator, acc: ' + acc + ' current value: ' + value
      + ' index: ' + index);
    return acc + value;
  }

  test(){
    let testdata: Jerry = {};
    testdata.uid1 = {};
    const bulk1 = {
      contentPage: of([1, 2, 3])
    };

    const bulk2 = {
      footerPage: of([4, 5, 6])
    };

    const bulk3 = {
      HeaderPage: of([7, 8, 9])
    };
    testdata.uid1 = { ...bulk1, ... bulk2};
    testdata.uid2 = bulk3 ;

    // how to copy bulk3 of uid2 to uid1??
    testdata.uid1.HeaderPage = bulk3.HeaderPage;
    Object.assign(testdata.uid2, bulk1);
    console.log('data: ' + testdata);
  }

  ngOnInit(): void {
    // fromEvent(document, 'click')
    //   .pipe(
    //     // restart counter on every click
    //     switchMap(() => interval(1000))
    //   )
    //   .subscribe((oe) => console.log('Jerry: ' + oe));
  }

  jerryTest() {
    const button = document.querySelector('button');
    fromEvent(button, 'click').pipe(map(event => (event as MouseEvent).x), scan((count, clientX) => count + clientX, 0))
      .subscribe(count => console.log(`total sum of mouse event.x: ${count} `));
  }

  downlog(event){
    console.log('jerry input value: ' + event.data);
    const input = document.getElementById('jerry');
    // console.log('access by dom api: ' + input.value);
  }

  toggle(event){
    console.log('Jerry: ' + JSON.stringify(event));
  }
  jerrytest2() {
    const ob = new Observable(function subscribe(observer) {
      // 追踪 interval 资源
      const intervalID = setInterval(() => {
        observer.next('hi');
      }, 1000);
      // 提供取消和清理 interval 资源的方法
      return function jerryunsubscribe() {
        clearInterval(intervalID);
      };
    });

    const jerry = ob.subscribe((x) => console.log(x));
    jerry.unsubscribe();
  }

  jerry_custom_operator() {
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

@Component({
  selector: 'app-template',
  template: `
    <!--
    <ng-container *ngTemplateOutlet="greet"></ng-container>
    <hr>-->

    <ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>
    <!--
    <hr>
    <ng-container *ngTemplateOutlet="svk; context: myContext"></ng-container>
    <hr>-->

    <ng-template #greet><span>Hello</span></ng-template>
    <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
    <ng-template #svk let-person="localSk" let-alias="test"><span>Ahoj {{person}} and {{alias}}!</span></ng-template>
`
})
export class NgTemplateOutletExampleComponent {
  myContext = { $implicit: 'World', name: 'name2', localSk: 'Svet', test: 'Jerry' };
  /*myContext = {
    name: 'Jerry'
  }*/
}

export class ViewComponent implements OnInit {

  applicant = {};

  constructor(public route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.store.select(state => state.applicants.entities[params.get('id')])),
      tap(applicant => this.applicant = applicant)
    ).subscribe();
  }
}
