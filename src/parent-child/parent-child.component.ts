import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'appparentchild',
  template: `<h1>title</h1>
  {{ JerryHelloChange }}
  <child [childContent] = "parentContent"></child>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentChildComponent implements OnInit {

  public parentContent = 'Jerry 222';
  constructor() { }

  get JerryHelloChange(){
    console.log('change in parent view');
    return true;
  }
  ngOnInit(): void {
    this.parentContent = '1';
    let c = setTimeout;
    setTimeout(() => {
      // this.parentContent = '2';
      console.log('change in parent');
    }, 3000);
  }

}

@Component({
  selector: 'child',
  template: `<h1>This is child</h1>
  <h2>{{ childContent }}</h2>
  <button (click)="onClick()">Click Me to trigger Change</button> 

  <span>{{ childContent }}</span>`
})
export class ChildComponent{
  
  @Input()
  childContent: string;

  onClick(){
    setTimeout(()=>{ console.log('timeout!')}, 3000);
  }
}