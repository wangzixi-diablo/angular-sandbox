import { Component } from '@angular/core';

@Component({
  selector: 'entry',
  template:`<p>I am Entry</p>
            <a href="/custom">navigate to</a>
            <router-outlet></router-outlet>`,
})
export class EntryComponent{
}
