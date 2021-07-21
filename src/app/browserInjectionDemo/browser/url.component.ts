import { Component, Inject } from '@angular/core';

import { locationToken } from './location.token';

@Component({
  selector: 'browser-url',
  templateUrl: './url.component.html',
})
export class UrlComponent {
  get url() {
    return this.location.href;
  }

  constructor(
    @Inject(locationToken) private location: Location,
  ) {}
}
