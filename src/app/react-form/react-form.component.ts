import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime, throttleTime } from "rxjs/operators";

const APIENDPOINT = "http://localhost:3000/echo?data=";

@Component({
  selector: 'jerryform',
  template: `
    <input type="text" [formControl]="favoriteColorControl">
    <div>{{ response }}</div>
  `
})
export class ReactFormComponent implements OnInit  {

  constructor(private http:HttpClient){
  }

  response = '';

  onValueChanged = (value)=>{
    console.log('new value from live change: ' + value);
    
    const url = `${APIENDPOINT}${value}`;
    
    const headers: HttpHeaders = new HttpHeaders({
      'Accept': 'text/html',
    });
    
    const options = {
      headers: headers,
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
    //this.favoriteColorControl.valueChanges.subscribe(this.onValueChanged);

    //this.favoriteColorControl.valueChanges.pipe(debounceTime(3000)).subscribe(this.onValueChanged);

    this.favoriteColorControl.valueChanges.pipe(throttleTime(2000)).subscribe(this.onValueChanged);
  }
  favoriteColorControl = new FormControl('');
}