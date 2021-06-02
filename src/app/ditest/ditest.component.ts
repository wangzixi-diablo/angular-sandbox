import { Component, OnInit } from '@angular/core';
import { MyService } from './di-service';

@Component({
  selector: 'app-ditest',
  templateUrl: './ditest.component.html'
})
export class DitestComponent implements OnInit {

  constructor(private myService: MyService) { 
    if( myService instanceof Array ){
      (myService as MyService[]).forEach((element) => {
        element.print();
      });
    }
  }

  ngOnInit(): void {
  }
}
