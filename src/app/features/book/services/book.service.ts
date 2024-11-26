import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookShortDtoModel} from "../models/book.short.dto.model";
import {environment} from "../../../../environments/environment";
import {BookDetailDtoModel} from "../models/book.detail.dto.model";
import {BookFormModel} from "../models/book.form.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private readonly _http: HttpClient,
  ) {
  }

  findAll(): Observable<BookShortDtoModel[]> {
    return this._http.get<BookShortDtoModel[]>(environment.apiUrl + '/books');
  }

  findById(id: number): Observable<BookDetailDtoModel> {
    return this._http.get<BookDetailDtoModel>(environment.apiUrl + '/books/' + id);
  }

  save(book: BookFormModel): Observable<BookDetailDtoModel> {
    return this._http.post<BookDetailDtoModel>(environment.apiUrl + "/660/books", book);
  }

  update(id: number, book: BookFormModel): Observable<BookDetailDtoModel> {
    console.log(book);
    return this._http.put<BookDetailDtoModel>(environment.apiUrl + "/660/books/" + id, book);
  }

  delete(id: number): Observable<BookDetailDtoModel> {
    return this._http.delete<BookDetailDtoModel>(environment.apiUrl + "/books/" + id);
  }
}
