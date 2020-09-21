import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    // this.searchEventEmitter.emit('jerry');
  }

}
