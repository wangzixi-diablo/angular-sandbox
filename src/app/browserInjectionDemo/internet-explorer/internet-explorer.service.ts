import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BrowserService } from '../browser';

@Injectable({
  providedIn: 'root',
})
export class InternetExplorerService {
  isInternetExplorer11$: Observable<boolean> =
    this.browser.userAgent$.pipe(
      map(userAgent => this.isInternetExplorer11(userAgent)),
    );

  constructor(
    private browser: BrowserService,
  ) {}

  isInternetExplorer11(userAgent: string): boolean {
    return /Trident\/7\.0.+rv:11\.0/.test(userAgent);
  }
}
