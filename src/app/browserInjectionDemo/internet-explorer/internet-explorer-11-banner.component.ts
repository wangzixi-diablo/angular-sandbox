import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { InternetExplorerService } from './internet-explorer.service';

@Component({
  host: { style: 'display: block;' },
  selector: 'internet-explorer-11-banner',
  templateUrl: './internet-explorer-11-banner.component.html',
})
export class InternetExplorer11BannerComponent {
  private isDismissed = new BehaviorSubject(false);

  isBannerVisible$ = combineLatest(
    this.internetExplorer.isInternetExplorer11$,
    this.isDismissed,
  ).pipe(
    map(([isInternetExplorer11, isDismissed]) =>
      isInternetExplorer11 && !isDismissed),
  );

  constructor(
    private internetExplorer: InternetExplorerService,
  ) {}

  onDismiss(): void {
    this.isDismissed.next(true);
  }
}
