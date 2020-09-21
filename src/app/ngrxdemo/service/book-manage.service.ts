import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookManageService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';
  constructor(private http: HttpClient) { }

  searchBooks(queryTitle: string) {
    return this.http.get(`${this.API_PATH}?q=${queryTitle}`);
  }
}
