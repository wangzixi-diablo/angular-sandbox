import {
  AfterViewInit,
  Component,
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Injectable,
  Injector
} from "@angular/core";
import { Router, ActivationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable()
class UsefulService {
}

@Injectable()
class NeedsService {
  constructor(public service: UsefulService) { }
}

const injector = Injector.create({
  providers:
    [{ provide: NeedsService, deps: [UsefulService] }, { provide: UsefulService, deps: [] }]
});
console.log(' true or false?' , injector.get(NeedsService).service instanceof UsefulService);

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
  /*
  template: `  
  <a href="/custom/1">Click me</a>
  <p></p>
  <a [routerLink]="['/fuck', '1']">RouterTest</a>
  <div class="container">
  <router-outlet></router-outlet>
  </div>*/
  template: `
  <h2 *ngIf= "jerry === '1'">Hello</h2>
  `
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
