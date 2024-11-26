import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BookForm} from "../../forms/book.form";
import {BookDetailDtoModel} from "../../models/book.detail.dto.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.scss'
})
export class BookUpdateComponent {

  bookId: number;
  bookForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _bookService: BookService,
    private readonly _router: Router,
    private readonly _ar: ActivatedRoute,
  ) {
    this.bookForm = this._fb.group({...BookForm});
    this.bookId = +this._ar.snapshot.params['id'];
    this._bookService.findById(this.bookId).subscribe({
      next: (book: BookDetailDtoModel) => {
        this.bookForm.setValue({
          isbn: book.isbn,
          title: book.title,
          author: book.author,
          description: book.description,
          releaseDate: book.releaseDate
        });
      }
    });
  }

  submit() {

    if (this.bookForm.invalid) {
      this.bookForm.markAsTouched();
      return;
    }
    this._bookService.update(this.bookId,this.bookForm.value).subscribe({
      next: (book: BookDetailDtoModel) => {
        this._router.navigate(['/book']);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    })
  }
}
