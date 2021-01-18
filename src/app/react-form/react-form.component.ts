import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  ngOnInit(): void {

    const headers: HttpHeaders = new HttpHeaders({
      'Accept': 'text/html',
    });
    
    const options = {
      headers: headers,
      responseType: 'text' as 'json'
    }
    this.favoriteColorControl.valueChanges.subscribe(
      (value) =>{
        console.log('new value from live change: ' + value);
        const url = `${APIENDPOINT}${value}` 
        var $http = this.http.get(url, options);
        
        $http.subscribe(
          (response:string)=>{
            console.log('response from http: ' + response);
            this.response = response},
          (error)=>console.log('error: ' + error));
      }
    )
  }
  favoriteColorControl = new FormControl('');
}