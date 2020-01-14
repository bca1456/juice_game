import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CrudService} from "../service/crud/crud.service";
import {Book} from "../model/crud/book";


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  //типы шаблонов
  //TemplateRef используется для создания вложенных представлений
  @ViewChild('readOnlyTemp', {static: false}) readOnlyTemp: TemplateRef<any>; //шаблон онли для просмотра
  @ViewChild('editTemp', {static: false}) editTemp: TemplateRef<any>; //шаблон для редактирования

  books: Array<Book>; //для хранения списка книг
  editedBook: Book; //изменяемая книга
  isNewRecord: boolean;

  constructor(private crudService: CrudService) {
    this.books = new Array<Book>();
  }

  //при загрузке врубаем получение всех книг
  ngOnInit() {
    this.fetchData();
  }

  //получаем все книги из базы
  private fetchData(){
    this.crudService.findAllBooks().subscribe((data: Book[]) => {
      this.books = data;
    })
  }

  // загружаем один из двух шаблонов
  loadTemplate(book: Book) {
    if (this.editedBook && this.editedBook.id == book.id) {
      return this.editTemp;
    } else {
      return this.readOnlyTemp;
    }
  }

}
