import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'appparentchild',
  template: `<h1>title</h1>
  <child [childContent] = "parentContent"></child>
  `
})
export class ParentChildComponent implements OnInit {

  public parentContent = 'Jerry 222';
  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'child',
  template: `<h1>This is child</h1>
  <h2>{{ childContent }}</h2>`
})
export class ChildComponent{
  
  @Input()
  childContent: string;
}