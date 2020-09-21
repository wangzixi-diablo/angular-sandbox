import { Injectable } from '@angular/core';
import { GreetingService } from './greeting.service';

@Injectable({ providedIn: 'root'})
export class EnglishGreetingService extends GreetingService {
   greet(name: string): string {
      return 'Hello ' + name;
   }
   constructor(){
      super();
      console.log('English class created!');
   }
}
