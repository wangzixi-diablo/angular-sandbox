import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { InternetExplorerService } from './internet-explorer.service';

@Component({
  host: { style: 'display: block;' },
  selector: 'internet-explorer-11-banner',
  templateUrl: './internet-explorer-11-banner.component.html',
})
export class InternetExplorer11BannerComponent implements OnDestroy{
  private isDismissed = new BehaviorSubject(false);

  isBannerVisible$ = combineLatest(
    this.internetExplorer.isInternetExplorer11$,
    this.isDismissed,
  ).pipe(
    map(([isInternetExplorer11, isDismissed]) =>{
      console.log('evaluate: ', isInternetExplorer11, isDismissed);
      return isInternetExplorer11 && !isDismissed;
    }
  ));

  constructor(
    private internetExplorer: InternetExplorerService,
  ) {}

  onDismiss(): void {
    this.isDismissed.next(true);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
