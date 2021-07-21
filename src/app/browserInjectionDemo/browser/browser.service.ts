import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import { FakeUserAgent } from './fake-user-agent';
import { userAgentToken } from './user-agent.token';

@Injectable({
  providedIn: 'root',
})
export class BrowserService implements OnDestroy {
  private userAgent = new BehaviorSubject(this.realUserAgent);

  userAgent$ = this.userAgent.pipe(
    distinctUntilChanged(),
  );

  constructor(
    @Inject(userAgentToken) private realUserAgent: string,
  ) {}

  ngOnDestroy() {
    this.userAgent.complete();
  }

  fakeUserAgent(value: FakeUserAgent) {
    this.userAgent.next(FakeUserAgent[value]);
  }

  stopFakingUserAgent() {
    this.userAgent.next(this.realUserAgent);
  }
}
