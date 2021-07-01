import {
  Component
} from "@angular/core";
import { Router, ActivationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

function immutable(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.set;

  descriptor.set = function (value: any) {
    return original.call(this, { ...value })
  }
}

class C {
  private _point = { x: 0, y: 0 }

  @immutable
  set point(value: { x: number, y: number }) {
    this._point = value;
  }

  get point() {
    return this._point;
  }
}

const c = new C();
const point = { x: 1, y: 1 }
c.point = point;

console.log(c.point === point)

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
