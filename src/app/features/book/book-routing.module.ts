import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookIndexComponent} from "./pages/book-index/book-index.component";
import {bookResolver} from "./resolvers/book.resolver";
import {BookCreateComponent} from "./pages/book-create/book-create.component";
import {BookDetailsComponent} from "./pages/book-details/book-details.component";
import {authenticatedGuard} from "../../shared/guards/authenticated.guard";
import {BookUpdateComponent} from "./pages/book-update/book-update.component";

const routes: Routes = [
  {
    path: '',
    component: BookIndexComponent,
    resolve: {
      books: bookResolver
    },
  },
  {path: 'create', component: BookCreateComponent, canActivate: [authenticatedGuard]},
  {path: 'update/:id', component: BookUpdateComponent, canActivate: [authenticatedGuard]},
  {path: ':id', component: BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
