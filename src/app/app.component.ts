import {
  Component
} from "@angular/core";
import { Router, ActivationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

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
        console.log('路由开始了', e);
    });
  }
}
