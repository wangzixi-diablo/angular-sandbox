import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { debounceTime, throttleTime } from "rxjs/operators";

const APIENDPOINT = "http://localhost:3000/echo?data=";

@Component({
  selector: 'jerryform',
  template: `
    <input type="text" [formControl]="jerryFormControl">
    <div>{{ response }}</div>
  `
})
export class ReactFormComponent implements OnInit  {
  constructor(private http:HttpClient){}

  response = '';

  onValueChanged = (value)=>{
    console.log('new value from live change: ' + value);
    
    const url = `${APIENDPOINT}${value}`;
    
    const options = {
      responseType: 'text' as 'json'
    }

    var $http = this.http.get(url, options);
    $http.subscribe(
      (response:string)=>{
        console.log('response from http: ' + response);
        this.response = response},
      (error)=>console.log('error: ' + error));
  }

  ngOnInit(): void {

    // this.jerryFormControl.valueChanges.pipe(debounceTime(3000)).subscribe(this.onValueChanged);

    this.jerryFormControl.valueChanges.pipe(throttleTime(2000)).subscribe(this.onValueChanged);
  }
  jerryFormControl = new FormControl('');
}