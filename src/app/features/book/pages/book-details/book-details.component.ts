import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../services/book.service";
import {BookDetailDtoModel} from "../../models/book.detail.dto.model";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  book!: BookDetailDtoModel;

  constructor(
    private readonly _bookService: BookService,
    private readonly _ar: ActivatedRoute,
  ) {
    let id = + _ar.snapshot.params['id'];
    this._bookService.findById(id).subscribe({
      next: (book: BookDetailDtoModel) => {
        this.book = book;
      }
    });
  }
}
