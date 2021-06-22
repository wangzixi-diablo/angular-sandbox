import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html'
})
export class BehaviorSubjectComponent implements OnInit {

  ngOnInit(): void {

    const jerry = of([1,2,3]);
    
    jerry.subscribe(console.log);
    const subject = new BehaviorSubject(123);

    // two new subscribers will get initial value => output: 123, 123
  
    subject.subscribe((data) => console.log('sub 1: ', data));
    subject.subscribe((data) => console.log('sub 2: ', data));

    // two subscribers will get new value => output: 456, 456
    console.log('subject emits 456!');
    subject.next(456);

    // new subscriber will get latest value (456) => output: 456
    subject.subscribe((data) => console.log('sub 3: ', data));

    // all three subscribers will get new value => output: 789, 789, 789
    console.log('subject emits 789!');
    subject.next(789);

    console.log('latest value: ', subject.getValue());

    const builtOE$ = subject.asObservable();

    builtOE$.subscribe((data) => console.log('sub 4: ', data));

    // builtOE$.next(); // no next method defined on normal Observable!

    let normalSubject = new Subject(); 

    normalSubject.next("b");

    // 普通的 Subject, 下一行订阅语句，拿不到 b
    normalSubject.subscribe(value => {
      console.log("Subscription got", value); // Subscription wont get anything at this point
    });

    normalSubject.next("c"); // Subscription got c
    normalSubject.next("d"); // Subscription got d
  }
}