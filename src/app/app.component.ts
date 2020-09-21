import { Component } from '@angular/core';
import { JerrySandBoxService } from './jerrySandBoxService';
import { GreetingService } from './greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sandbox';
    constructor(private jerryService: JerrySandBoxService,
                private englishGreet: GreetingService){
      // this.jerryService.print();
      this.jerryService.print2();
      console.log(this.englishGreet.greet('Jerry'));
  }
  jerryTest(){
    console.log('Hello');
  }
}
