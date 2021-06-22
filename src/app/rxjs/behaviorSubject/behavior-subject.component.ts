import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html'
})
export class BehaviorSubjectComponent implements OnInit {

  ngOnInit(): void {
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
  }
}