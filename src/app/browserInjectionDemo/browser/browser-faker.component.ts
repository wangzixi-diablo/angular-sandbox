import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { BrowserService } from './browser.service';
import { FakeUserAgent } from './fake-user-agent';

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

  browsers = Object.keys(FakeUserAgent);
  selectedBrowser = new FormControl(this.defaultOptionValue);
  wordStartPattern = /[A-Z]|\d+/g;

  constructor(
    private browser: BrowserService,
  ) {
    this.realBrowserSelection$ = this.selectedBrowser.valueChanges.pipe(
      filter(value => value === this.defaultOptionValue),
      takeUntil(this.destroy),
    );
    this.fakeBrowserSelection$ = this.selectedBrowser.valueChanges.pipe(
      filter(value => value !== this.defaultOptionValue),
      takeUntil(this.destroy),
    );
  }

  ngOnInit(): void {
    this.bindEvents();
  }

  ngOnDestroy() {
    this.unbindEvents();
  }

  private bindEvents(): void {
    this.fakeBrowserSelection$.subscribe(userAgent =>
      this.browser.fakeUserAgent(userAgent));
    this.realBrowserSelection$.subscribe(() =>
      this.browser.stopFakingUserAgent());
  }

  private unbindEvents(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
