import { Component, OnInit, Inject } from '@angular/core';
import { JerrySandBoxService } from './jerrySandBoxService';
import { GreetingService } from './greeting.service';
import { fromEvent, Observable, of, from, range, interval, asyncScheduler, concat, merge, OperatorFunction, timer, combineLatest } from 'rxjs';
import { filter, scan } from 'rxjs/operators';

import { ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app.config';
import { build$ } from 'protractor/built/element';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MyService, MyNewService } from './ngrxdemo/service/di-test';
import { HttpErrorHandler } from './ngrxdemo/service/unittest-study/abstract-test';

interface Jerry {
  [uid: string]: {
    [pageContext: string]: Observable<number[]>;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sandbox';
  userInput = 'Jerry';
  condition = false;
  hero = {
    name: 'Jerry'
  };

  @ViewChild('tpl2') ttTobeAdd: TemplateRef<void>;
  @ViewChild('container_id', { read: ViewContainerRef })
  jerryContainer: ViewContainerRef;
  applicant: any;
  showTpl() {
    this.jerryContainer.createEmbeddedView(this.ttTobeAdd);
  }

  myFunc = (maybeString: string | undefined | null) => {
  const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
  }

  

  myFunc2 = (onlyString: string) => {
    const a: string = onlyString;
  }
  constructor() {

  }

  ngOnInit(): void {}
}

@Component({
  selector: 'app-template',
  template: `
    <!--
    <ng-container *ngTemplateOutlet="greet"></ng-container>
    <hr>-->

    <ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>
    <!--
    <hr>
    <ng-container *ngTemplateOutlet="svk; context: myContext"></ng-container>
    <hr>-->

    <ng-template #greet><span>Hello</span></ng-template>
    <ng-template #eng let-name><span>Hello {{name}}!</span></ng-template>
    <ng-template #svk let-person="localSk" let-alias="test"><span>Ahoj {{person}} and {{alias}}!</span></ng-template>
`
})
export class NgTemplateOutletExampleComponent {
  myContext = { $implicit: 'World', name: 'name2', localSk: 'Svet', test: 'Jerry' };
  /*myContext = {
    name: 'Jerry'
  }*/
}

export class ViewComponent implements OnInit {

  applicant = {};

  constructor(public route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
  }
}
