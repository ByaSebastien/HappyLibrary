import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookIndexComponent } from './pages/book-index/book-index.component';
import {SharedModule} from "../../shared/shared.module";
import { BookCreateComponent } from './pages/book-create/book-create.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { BookUpdateComponent } from './pages/book-update/book-update.component';


@NgModule({
  declarations: [
    BookIndexComponent,
    BookCreateComponent,
    BookDetailsComponent,
    BookUpdateComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule
  ]
})
export class BookModule { }
