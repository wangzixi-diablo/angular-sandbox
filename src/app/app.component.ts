import 'reflect-metadata';

import {
  Component
} from "@angular/core";
import { Router, ActivationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

// Each mixin is a traditional ES class
class Jumpable {
  jump() {}
}

class Duckable {
  duck() {}
}

// Including the base
class Sprite {
  x = 0;
  y = 0;
}

// Then you create an interface which merges
// the expected mixins with the same name as your base
interface Sprite extends Jumpable, Duckable {}
// Apply the mixins into the base class via
// the JS at runtime
applyMixins(Sprite, [Jumpable, Duckable]);

// This can live anywhere in your codebase:
function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

// ================================
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
