import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

export const locationToken: InjectionToken<Location> =
  new InjectionToken('Location API', {
    factory: (): Location => {
      console.log("Jerry location token is injected!");
      return inject(DOCUMENT).location;
    },
    providedIn: 'root',
  });
