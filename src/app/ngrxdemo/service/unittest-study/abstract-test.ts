import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export abstract class HttpErrorHandler {
    constructor(){}
    abstract handleError(
      ): void;
}

@Injectable({
    providedIn: 'root',
  })
export class UnKnownHandler {
    handleError(){
        console.log('UnknownHandler works');
    }
}

@Injectable({
    providedIn: 'root',
  })
export class BadGatewayHandler {
    handleError(){
        console.log('BadGatewayHandlers works');
    }
}
