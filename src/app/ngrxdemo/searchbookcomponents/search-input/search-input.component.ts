import {Component, EventEmitter, OnInit, Output, InjectionToken, Injector, Inject} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  isSearching = true;

  // 通过EventEmitter发送一个事件，参数类型为string
  @Output() searchEventEmitter = new EventEmitter<string>();
  bookName: string;

  init(){
    const BASE_URL = new InjectionToken<string>('BaseUrl');
    const injector = Injector.create({providers:
      [{provide: BASE_URL, useValue: 'http://localhost'}]});
    const url = injector.get(BASE_URL);
    console.log('Jerry url: ' + url);
  }

  // @Inject('apiUrl') private myname
  constructor(@Inject('apiUrl') private myname) {
    console.log('Jerry inject: ' + myname);
    this.init();
   }

   get jerryname(){
     return this.myname;
   }

   set jerryname(name: string){
     this.myname = name;
     debugger;
   }

  @Output() jerrysearchEventEmitter = new EventEmitter<string>();

  jerrybookName: string;

  ngOnInit() {
    // this.searchEventEmitter.emit('jerry');
    this.myname = 'fuck';
  }

  // backup: (keyup)="searchEventEmitter.emit(bookName)"
  search(bookName){
    this.searchEventEmitter.emit(this.bookName)
    console.log('new value: ' + this.bookName);
  }

}
