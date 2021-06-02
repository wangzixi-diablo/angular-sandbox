import {
  Component,
  Directive,
  OnInit,
  Injectable,
  Injector
} from "@angular/core";
import { Router, ActivationStart } from '@angular/router';
import { filter } from 'rxjs/operators';


interface jerryConfig {
  autofocus?: boolean;
  name?: string;
  age?: number;
}

@Directive({
  selector: "[cxFocuses]"
})
export class FocusDirective implements OnInit
//, 
//OnChanges 
{
  //@Input("cxFocus") public config: jerryConfig;

  /*@Input() set cxRefreshFocusOn(_switchCondition: string) {
    console.log("Jerry new value: " + _switchCondition);
  }*/

  constructor() {
    console.log("Jerry directive constructor");
  }
  /*ngOnChanges(changes: SimpleChanges): void {
    debugger;
  }*/

  ngOnInit(): void {
    console.log("Jerry directive in ngOnInit: "
    // + this.config
    );
  }
}

/*
<div cxFocuses>Painful</div>
*/
@Component({
  selector: "app-root",
  templateUrl: './app.component.html'
})
export class AppComponent {
  public jerry = '1';

  constructor(router:Router){
    router.events.pipe(
      filter(e => e instanceof ActivationStart)
    ).subscribe(e =>{
        // console.log('路由开始了', e);
    });
  }
}
