import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JerrySandBoxService } from './jerrySandBoxService';
//import { ExampleModule } from './ngrxdemo/ngrxdemo.module';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effect';
import { HERO_DI_CONFIG, APP_CONFIG } from './app.config';

//import { HttpErrorHandler, UnKnownHandler, BadGatewayHandler } from './ngrxdemo/service/unittest-study/abstract-test';

import { ParentModule } from 'src/parent-child/parent.module';
//import { CanActivateTeam, UserToken, JerryPermissions } from './route-study/route-demo/activate-guard';
//import { HeroResolver } from './route-study/route-demo/resolve-guard';
//import { ColorModule } from './color/color.module';
//import { JerryReactFormModule } from './react-form/react-form.module';
//import { DitestModule } from './ditest/ditest.module';
//import { RsJSModule } from './rxjs/rxjs.module';
//import { FunctionModule } from './function/function.module';
//import { BrowserTestModule } from './browserInjectionDemo/browserTest.module';
import { RouterModule } from '@angular/router';
import { SelectorModule } from './selector/selector.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    //BrowserTestModule,
    //ExampleModule,
    CommonModule,
    //ParentModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    //JerryReactFormModule,
    //ColorModule,
    //DitestModule,
    //RsJSModule,
    //FunctionModule
    SelectorModule
  ],
  
  providers: [{ provide: JerrySandBoxService },
  {
    provide: 'apiUrl',
    useValue: 'http://localhost:4200/heros'
  },
  { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
  
  /*{ provide: HttpErrorHandler, useExisting: UnKnownHandler,
   multi: true},*/
   /*{ provide: HttpErrorHandler, useExisting: BadGatewayHandler,
    multi: true},*/
    // CanActivateTeam, UserToken, JerryPermissions,HeroResolver
],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
