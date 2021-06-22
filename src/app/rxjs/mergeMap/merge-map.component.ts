import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { of, Subject, fromEvent } from 'rxjs';
import { delay, mergeMap, switchMap } from 'rxjs/operators';

interface Point {
  x: number;
  y: number;
  timestamp: number;
}

const saveLocation = (location:Point) => {
  return of(location).pipe(delay(500));
};

const click$ = fromEvent(document, 'click');

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html'
})
export class MergeMapComponent implements OnInit {

  setupMergeMap = () =>{
    // streams
    click$
      .pipe(
        mergeMap((e: MouseEvent) => {
          return saveLocation({
            x: e.clientX,
            y: e.clientY,
            timestamp: Date.now()
          });
        })
      )
      // Saved! {x: 98, y: 170, ...}
      // 不管我点得多快，每一次点击都会被记录下来
      .subscribe(r => console.log('Saved!', r.x, 
      r.y, r.timestamp));
  };

  setupSwitchMap = () => {
    click$
      .pipe(
        switchMap((e: MouseEvent) => {
          return saveLocation({
            x: e.clientX,
            y: e.clientY,
            timestamp: Date.now()
          });
        })
      )
      // Saved! {x: 98, y: 170, ...}
      // 点击速度变快时，只有一次点击会被记录下来
      .subscribe(r => console.log('Switch Map Saved!', r.x, 
      r.y, r.timestamp));
  }
  ngOnInit(): void {
    // this.setupMergeMap();
    this.setupSwitchMap();
  }
}