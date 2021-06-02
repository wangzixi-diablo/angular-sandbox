import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, FocusDirective } from './app.component';
import { JerrySandBoxService } from './jerrySandBoxService';
import { GreetingService } from './greeting.service';
import { EnglishGreetingService } from './english.greeting.service';
import { ExampleModule } from './ngrxdemo/ngrxdemo.module';

import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effect';

import { UnlessDirective } from '../unless/unless.directive';
import { HERO_DI_CONFIG, APP_CONFIG } from './app.config';

import { HttpErrorHandler, UnKnownHandler, BadGatewayHandler } from './ngrxdemo/service/unittest-study/abstract-test';

import { ParentModule } from 'src/parent-child/parent.module';
import { ParentChildComponent } from 'src/parent-child/parent-child.component';
import { RouteStudyModule } from './route-study/route-study.module';
import { RouterModule, Routes } from '@angular/router';
import { RouteDemoComponent } from './route-study/route-demo/route-demo.component';
import { CanActivateTeam, UserToken, JerryPermissions } from './route-study/route-demo/activate-guard';
import { HeroResolver } from './route-study/route-demo/resolve-guard';
import { WildComponent } from './route-study/route-demo/wild.component';
import { ColorModule } from './color/color.module';
import { JerryReactFormModule } from './react-form/react-form.module';
import { DitestModule } from './ditest/ditest.module';

const CUSTOM_ROUTES: Routes = [
  { path: "custom/:id", 
    component: RouteDemoComponent,
    data:{ name: 'jerry'},
    canActivate: [CanActivateTeam],
    resolve: {
      hero: HeroResolver
    } 
  },
  {
    path: '**',
    component: WildComponent
  }
];
// 'http://localhost:4200/heros'

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    FocusDirective,
  ],
  imports: [
    BrowserModule,
    ExampleModule,
    CommonModule,
    ParentModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    //FormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    JerryReactFormModule,
    RouterModule.forRoot(CUSTOM_ROUTES),
    RouterModule,
    ColorModule,
    DitestModule,
  ],
  exports:[FocusDirective],
  
  providers: [{ provide: JerrySandBoxService },
  { provide: GreetingService,  useClass: EnglishGreetingService},
  {
    provide: 'apiUrl',
    useValue: 'http://localhost:4200/heros'
  },
  { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
  
  { provide: HttpErrorHandler, useExisting: UnKnownHandler,
   multi: true},
   { provide: HttpErrorHandler, useExisting: BadGatewayHandler,
    multi: true},CanActivateTeam, UserToken, JerryPermissions,HeroResolver
],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
