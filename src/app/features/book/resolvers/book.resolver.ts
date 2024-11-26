import { ResolveFn } from '@angular/router';
import {BookService} from "../services/book.service";
import {inject} from "@angular/core";
import {Observable} from "rxjs";
import {BookShortDtoModel} from "../models/book.short.dto.model";

export const bookResolver: ResolveFn<Observable<BookShortDtoModel[]>> = (route, state) => {
  const bookService: BookService = inject(BookService);
  return bookService.findAll();
};
