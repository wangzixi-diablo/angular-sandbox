import {
  AfterViewInit,
  Component,
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";

interface jerryConfig {
  autofocus?: boolean;
  name?: string;
  age?: number;
}

@Directive({
  selector: "[cxFocus]"
})
export class FocusDirective implements OnInit, OnChanges {
  @Input("cxFocus") public config: jerryConfig;

  @Input() set cxRefreshFocusOn(_switchCondition: string) {
    console.log("Jerry new value: " + _switchCondition);
  }

  constructor() {
    console.log("Jerry directive constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    debugger;
  }

  ngOnInit(): void {
    console.log("Jerry directive in ngOnInit: " + this.config);
  }
}

@Component({
  selector: "app-root",
  template: `
  <jerryform></jerryform>
  `
})
export class AppComponent {

}
