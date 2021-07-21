import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, MonoTypeOperatorFunction } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

import { BrowserService } from './browser.service';
import { FakeUserAgent } from './fake-user-agent';
import { userAgentToken } from './user-agent.token';

@Component({
  host: { style: 'display: block;' },
  selector: 'browser-faker',
  templateUrl: './browser-faker.component.html',
})
export class BrowserFakerComponent implements OnDestroy, OnInit {
  private defaultOptionValue = '';
  private destroy = new Subject<void>();
  private fakeBrowserSelection$: Observable<FakeUserAgent>;
  private realBrowserSelection$: Observable<void>;

  fakeBrowsers = Object.keys(FakeUserAgent);
  selectedBrowser = new FormControl(this.defaultOptionValue);
  wordStartPattern = /[A-Z]|\d+/g;

  constructor(
    private browser: BrowserService,
  ) {
    this.realBrowserSelection$ = this.selectedBrowser.valueChanges.pipe(
      tap((value) => { console.log('valueChanges occurs: ', value); return value }),
      filter(value => value === this.defaultOptionValue),
      takeUntil(this.destroy),
    );

    let op1 = filter((value: FakeUserAgent) => { console.log('in filter, new value: ' , value ); return value !== this.defaultOptionValue});

    let op2:MonoTypeOperatorFunction<FakeUserAgent> = takeUntil(this.destroy);

    this.fakeBrowserSelection$ = this.selectedBrowser.valueChanges.pipe( op1, op2 );
  }
 
  ngOnInit(): void {
    this.bindEvents();
  }

  ngOnDestroy() {
    this.unbindEvents();
  }

  private bindEvents(): void {
    this.fakeBrowserSelection$.subscribe(userAgent =>{
      this.browser.fakeUserAgent(userAgent);
      console.log('notify fake user agent should be used: ',  userAgent);
      }
      );
    this.realBrowserSelection$.subscribe(() =>
      this.browser.stopFakingUserAgent());
  }

  private unbindEvents(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
