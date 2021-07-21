import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteDemoComponent } from './route-demo/route-demo.component';
import { Routes, RouterModule } from '@angular/router';


const CUSTOM_ROUTES: Routes = [
  { path: '', component: RouteDemoComponent },
  { path: 'custom', component: RouteDemoComponent }
]

@NgModule({
  declarations: [RouteDemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOM_ROUTES)
  ]
})
export class RouteStudyModule { }
