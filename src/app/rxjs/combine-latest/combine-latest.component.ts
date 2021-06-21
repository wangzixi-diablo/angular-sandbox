import { Component, OnInit, Inject } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';
import { mapTo, startWith, scan, debounceTime } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html'
})
export class CombineLatestComponent implements OnInit {
  readonly document: Document;

  constructor(
    @Inject(DOCUMENT) document: any) {
      this.document = document as Document;
    }

  redTotal:HTMLElement;
  blackTotal: HTMLElement;
  total:HTMLElement;  

  ngOnInit(): void {
    this.redTotal = this.document.getElementById('red-total'); 
    this.blackTotal = this.document.getElementById('black-total');
    this.total = this.document.getElementById('total');

    combineLatest([this.addOneClick$('red'), this.addOneClick$('black')]).subscribe((values) => {
      this.redTotal.innerHTML = `${values[0]}`;
      this.blackTotal.innerHTML = `${values[1]}`;
      this.total.innerHTML = values[0] + values[1] + "";
    });
  }

  addOneClick$ = id =>
  fromEvent(this.document.getElementById(id), 'click').pipe(
    debounceTime(1000),
    mapTo(1),
    scan((acc, curr) => acc + curr, 0),
    startWith(0)
  );
}