import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, FocusDirective } from './app.component';
import { JerrySandBoxService } from './jerrySandBoxService';
import { GreetingService } from './greeting.service';
import { EnglishGreetingService } from './english.greeting.service';
import { ExampleModule } from './ngrxdemo/ngrxdemo.module';

import { StoreModule } from '@ngrx/store';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effect';

import { UnlessDirective } from '../unless/unless.directive';
import { RainbowDirective } from './color/color.directive';
import { HERO_DI_CONFIG, APP_CONFIG } from './app.config';
import { MyService, MyNewService, MyNewerService } from './ngrxdemo/service/di-test';
import { HttpErrorHandler, UnKnownHandler, BadGatewayHandler } from './ngrxdemo/service/unittest-study/abstract-test';
import { ReactFormComponent } from './react-form/react-form.component'

import { ReactiveFormsModule } from '@angular/forms';
import { ParentModule } from 'src/parent-child/parent.module';
import { ParentChildComponent } from 'src/parent-child/parent-child.component';
import { DirectiveStudyComponent } from './directive-study/directive-study.component';
import { RouteStudyModule } from './route-study/route-study.module';
import { RouterModule, Routes } from '@angular/router';
import { RouteDemoComponent } from './route-study/route-demo/route-demo.component';
import { CanActivateTeam, UserToken, JerryPermissions } from './route-study/route-demo/activate-guard';
import { HeroResolver } from './route-study/route-demo/resolve-guard';
import { WildComponent } from './route-study/route-demo/wild.component';

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
    RainbowDirective,
    ReactFormComponent,
    FocusDirective,
    DirectiveStudyComponent
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
    ReactiveFormsModule,
    RouterModule.forRoot(CUSTOM_ROUTES),
    RouterModule
  ],
  exports:[FocusDirective],
  
  providers: [{ provide: JerrySandBoxService },
  { provide: GreetingService,  useClass: EnglishGreetingService},
  {
    provide: 'apiUrl',
    useValue: 'http://localhost:4200/heros'
  },
  { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
  //MyNewService,
  { provide: MyService, useExisting: MyNewerService, multi: true},
  { provide: MyService, useExisting: MyNewService, multi: true},
  { provide: HttpErrorHandler, useExisting: UnKnownHandler,
   multi: true},
   { provide: HttpErrorHandler, useExisting: BadGatewayHandler,
    multi: true},CanActivateTeam, UserToken, JerryPermissions,HeroResolver
],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
