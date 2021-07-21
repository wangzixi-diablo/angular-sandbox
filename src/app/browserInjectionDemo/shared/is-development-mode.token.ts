import { InjectionToken, isDevMode } from '@angular/core';

export const isDevelopmentModeToken: InjectionToken<boolean> =
  new InjectionToken('Development mode flag', {
    factory: (): boolean => isDevMode(),
    providedIn: 'root',
  });
