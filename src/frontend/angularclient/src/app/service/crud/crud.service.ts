import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Book} from "../../model/crud/book";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private crudUrl = 'http://localhost:8080/api/v1/crud/books';

  constructor(private http: HttpClient) { }

  public findAllBooks(){
    return this.http.get(this.crudUrl);
  }

  public createBook(book: Book){
    return this.http.post<Book>(this.crudUrl, book);
  }

  public updateBook(id: number, book: Book){
    let urlParams = new HttpParams().set("id", id.toString());
    return this.http.put(this.crudUrl, book, {params: urlParams});
  }

  public getBookById(id: number){
    return this.http.get<Book>(this.crudUrl + "/" + id);
  }

  public deleteBookById(id: number){
    return this.http.delete(this.crudUrl + "/" + id);
  }
}
