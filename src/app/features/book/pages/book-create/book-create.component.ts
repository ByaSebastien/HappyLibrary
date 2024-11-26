import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {Router} from "@angular/router";
import {BookDetailDtoModel} from "../../models/book.detail.dto.model";
import {HttpErrorResponse} from "@angular/common/http";
import {BookForm} from "../../forms/book.form";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  bookForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _bookService: BookService,
    private readonly _router: Router
  ) {
    this.bookForm = this._fb.group({...BookForm});
  }

  submit() {

    if (this.bookForm.invalid) {
      this.bookForm.markAsTouched();
      return;
    }
    this._bookService.save(this.bookForm.value).subscribe({
      next: (book: BookDetailDtoModel) => {
        this._router.navigate(['/book']);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    })
  }
}
