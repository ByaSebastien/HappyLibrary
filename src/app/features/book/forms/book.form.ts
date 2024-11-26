import {Validators} from "@angular/forms";

export const BookForm = {
  isbn: [null,[Validators.required,Validators.minLength(11),Validators.maxLength(13)]],
  title: [null,[Validators.required,Validators.maxLength(50)]],
  author: [null,[Validators.required,Validators.maxLength(50)]],
  description: [null,[Validators.maxLength(255)]],
  releaseDate: [null,[Validators.required]],
}
