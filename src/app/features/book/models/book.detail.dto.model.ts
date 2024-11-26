export interface BookDetailDtoModel {
  id: number;
  isbn: string;
  title: string;
  author: string;
  description?: string;
  releaseDate: Date;
}
