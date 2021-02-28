import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare type Data = {
  [name: string]: any;
};

@Component({
  selector: 'app-route-demo',
  templateUrl: './route-demo.component.html'
})
export class RouteDemoComponent implements OnInit {

  id: Observable<string>;
  constructor(route: ActivatedRoute) { 
    this.id = route.params.pipe(map(p => p.id));
    const url: Observable<string> = route.url.pipe(map(segments => segments.join('')));
    // route.data includes both `data` and `resolve`
    const user = route.data.pipe(map(d => d));

  }

  ngOnInit(): void {
  }
}
