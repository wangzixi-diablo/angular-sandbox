import { InjectionToken } from '@angular/core';

export const navigatorToken: InjectionToken<Navigator> =
  new InjectionToken('Navigator API', {
    factory: (): Navigator => navigator,
    providedIn: 'root',
  });
