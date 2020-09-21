import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  isSearching = true;
  @Output() search = new EventEmitter<string>();
  bookName: string;
  constructor() { }

  ngOnInit() {
  }

}
