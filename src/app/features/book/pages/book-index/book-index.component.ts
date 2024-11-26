import {Component} from '@angular/core';
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";
import {BookShortDtoModel} from "../../models/book.short.dto.model";
import {BookDetailDtoModel} from "../../models/book.detail.dto.model";
import {UserTokenDtoModel} from "../../../auth/models/user.token.dto.model";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-book-index',
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss'
})
export class BookIndexComponent {

  currentUser: UserTokenDtoModel|undefined;
  books!: BookShortDtoModel[];

  constructor(
    private readonly _bookService: BookService,
    private readonly _ar: ActivatedRoute,
    private readonly _authService: AuthService,
  ) {
    this._ar.data.subscribe((data: any) => {
      this.books = data.books;
    });
    this._authService.currentUser$.subscribe({
      next: (user: UserTokenDtoModel|undefined) => {
        this.currentUser = user;
      }
    });
  }

  delete(id: number) {
    this._bookService.delete(id).subscribe({
      next: (data: BookDetailDtoModel) => {
        this._bookService.findAll().subscribe({
          next: (books: BookShortDtoModel[]) => {
            this.books = books;
          }
        });
      }
    });
  }
}
