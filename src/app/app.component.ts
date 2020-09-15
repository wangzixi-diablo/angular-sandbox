import { Component } from '@angular/core';
import { JerrySandBoxService } from './jerrySandBoxService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sandbox';
    constructor(private jerryService: JerrySandBoxService){
      this.jerryService.print();
  }
  jerryTest(){
    console.log('Hello');
  }
}
