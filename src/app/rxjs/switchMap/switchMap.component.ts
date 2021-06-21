import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';

const COUNTDOWN_SECONDS = 10;

@Component({
  selector: 'switchMap-study',
  templateUrl: './switchMap.component.html'
})
export class SwitchMapComponent implements OnInit {
    ngOnInit(): void {

    // elem refs
    const remainingLabel = document.getElementById('remaining');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');

    // streams
    const interval$ = interval(1000).pipe(mapTo(-1));
    const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

    const timer$ = merge(pause$, resume$).pipe(
        startWith(true),
        switchMap(val => (val ? interval$ : empty())),
        scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
        takeWhile(v => v >= 0)).subscribe((val: any) => (remainingLabel.innerHTML = val));
    }
}