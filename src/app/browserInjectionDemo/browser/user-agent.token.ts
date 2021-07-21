import { inject, InjectionToken } from '@angular/core';

import { navigatorToken } from './navigator.token';

export const userAgentToken: InjectionToken<string> =
  new InjectionToken('User agent string', {
    factory: (): string => inject(navigatorToken).userAgent,
    providedIn: 'root',
  });
