import { Component, Inject } from '@angular/core';

import { locationToken } from './location.token';

@Component({
  selector: 'browser-url',
  templateUrl: './url.component.html',
})
export class UrlComponent {
  get url() {
    console.log("jerry: ", location.href);
    console.log('equal? ', location === this._InjectedLocation);
    return this._InjectedLocation.href;
  }

  constructor(
    @Inject(locationToken) private _InjectedLocation: Location,
  ) {}
}
