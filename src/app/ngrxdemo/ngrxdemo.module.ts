import {StoreModule} from '@ngrx/store';
import {reducers} from './reducer';
import { NgModule } from '@angular/core';
import { CounterComponent } from './container/component/counter/counter.component';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookManageComponent } from './container/component/bookmanage/book-manage.component';
import { SearchInputComponent } from './searchbookcomponents/search-input/search-input.component';
import { BookListComponent } from './searchbookcomponents/book-list/book-list.component';

import { BookDetailComponent} from './searchbookcomponents/book-detail/book-detail.component';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import { BookManageService } from './service/book-manage.service';
import { EffectsModule } from '@ngrx/effects';
import { BookManageEffects } from './effects/book-manager.effect';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('example', reducers), // 这个才是关键哦,
    EffectsModule.forFeature([BookManageEffects])
  ],
  declarations: [CounterComponent, BookManageComponent,
    SearchInputComponent, BookListComponent, BookDetailComponent
  ],
  exports: [CounterComponent, BookManageComponent, BookListComponent, BookDetailComponent],
  providers: [BookManageService]
})
export class ExampleModule { }
