import { TestBed } from '@angular/core/testing';
import { BookManageService } from './book-manage.service';
import { Book } from '../model/books';
import { of } from 'rxjs';

describe('Book Manage service', () => {
    let httpClientSpy: { get: jasmine.Spy };
    let bookService: BookManageService;
    beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      bookService = new BookManageService(httpClientSpy as any);
    });
    it('should return expected books (HttpClient called once)', () => {

        const BOOK: Book = {
            id: 'Jerry-Book',
            volumeInfo: {
              title: 'Diablo',
              subtitle: 'Diablo II',
              authors: ['Jerry', 'Tom'],
              publisher: 'SAP',
              publishDate: '2020-2-2',
              description: 'This is great book',
              averageRating: 1,
              ratingsCount: 100
            }
        };
        const expectedBooks: Book[] = [ BOOK];
        httpClientSpy.get.and.returnValue(of(expectedBooks));
        bookService.searchBooks('Jerry').subscribe(
            books => expect(books).toEqual(expectedBooks, 'expected books'),
        fail
      );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
});
