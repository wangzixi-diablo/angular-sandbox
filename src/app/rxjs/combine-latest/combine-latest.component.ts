import { Component, OnInit, Inject } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';
import { mapTo, startWith, scan, tap, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html'
})
export class CombineLatestComponent implements OnInit {
  readonly document: Document;

  constructor(
    // https://github.com/angular/angular/issues/20351
    @Inject(DOCUMENT) document: any) {
      this.document = document as Document;
    }

  redTotal:HTMLElement;
  blackTotal: HTMLElement;
  total:HTMLElement;  
  test:HTMLElement;

  ngOnInit(): void {
    this.redTotal = this.document.getElementById('red-total'); 
    this.blackTotal = this.document.getElementById('black-total');
    this.total = this.document.getElementById('total');
    this.test = this.document.getElementById('test');

    /*combineLatest(this.addOneClick$('red'), 
    
    this.addOneClick$('black')).subscribe(([red, black]: any) => {
      this.redTotal.innerHTML = red;
      this.blackTotal.innerHTML = black;
      this.total.innerHTML = red + black;
    });*/

    combineLatest([this.addOneClick$('red'), this.addOneClick$('black')]).subscribe((values) => {
      this.redTotal.innerHTML = `${values[0]}`;
      this.blackTotal.innerHTML = `${values[1]}`;
      this.total.innerHTML = values[0] + values[1] + "";
    });

    fromEvent(this.test, 'click').pipe(map( event => event.timeStamp), mapTo(1)).subscribe((event) => console.log(event));
  }

  addOneClick$ = id =>
  fromEvent(this.document.getElementById(id), 'click').pipe(
    // map every click to 1
    mapTo(1),
    // keep a running total
    scan((acc, curr) => acc + curr, 0),
    startWith(0)
  );
}
