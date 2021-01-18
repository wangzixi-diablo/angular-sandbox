import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const ENDPOINT = "http://localhost:3000/echo?data=";

@Component({
  selector: 'jerryform',
  template: `
    <input type="text" [formControl]="favoriteColorControl">
  `
})
export class ReactFormComponent implements OnInit  {

  constructor(private http:HttpClient){
  }
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
        var $http = this.http.get('http://localhost:3000/angular/' + value, options);
        
        $http.subscribe(
          (response)=>console.log('response from http: ' + response),
          (error)=>console.log('error: ' + error));
      }
    )
  }
  favoriteColorControl = new FormControl('');
}