import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { of, Subject, fromEvent } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';


interface Point {
  x: number;
  y: number;
  timestamp: number;
}

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html'
})
export class MergeMapComponent implements OnInit {

  ngOnInit(): void {
    const saveLocation = (location:Point) => {
      return of(location).pipe(delay(500));
    };
    // streams
    const click$ = fromEvent(document, 'click');
    
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
  }
}