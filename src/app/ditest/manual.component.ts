import { Component, OnInit, Injectable, Injector } from '@angular/core';

@Injectable()
class UsefulService {
    constructor(){
        console.log("Useful Service is created");
    }
}

@Injectable()
class NeedsService {
  constructor(public service: UsefulService) { 
      console.log("NeedsService is created");
  }
}

const injector = Injector.create({
  name: 'JerryProvider',
  providers:
    [{ provide: NeedsService, deps: [UsefulService] }, { provide: UsefulService, deps: [] }]
});
console.log(' true or false?' , injector.get(NeedsService).service instanceof UsefulService);

@Component({
  selector: 'manual_di',
  template: '<p>Manual DI </p>'
})
export class ManualDIComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }
}
