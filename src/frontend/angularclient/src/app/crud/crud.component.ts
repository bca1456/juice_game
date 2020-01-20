import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CrudService} from "../service/crud/crud.service";
import {Book} from "../model/crud/book";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";


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

  book: Book = new Book();
  books: Array<Book>; //для хранения списка книг
  editedBook: Book; //изменяемая книга
  isNewRecord: boolean;

  addBookString: FormControl = new FormControl('q');
  addBookFormGroup: FormGroup;

  constructor(private crudService: CrudService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder) {
    this.books = new Array<Book>();
  }

  //при загрузке врубаем получение всех книг
  ngOnInit() {
    this.fetchData();
    this.addBookFormGroup = this.formBuilder.group({
      name: [null, [Validators.required,
                    Validators.minLength(1),
                    Validators.pattern(/^[A-z]/)]],
      author: [null, [Validators.required,
                      Validators.minLength(1),
                      Validators.pattern(/^[A-z]/)]],
      quantityOfPages: [null, [Validators.required,
                                Validators.min(1),
                                Validators.pattern(/^[0-9]/)]]
    })
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

  updateBook(book: Book){
    this.isNewRecord = false;
    this.editedBook = book;
  }

  // сохраняем книгу
  saveBook() {
    if (this.isNewRecord) {
      // добавляем книгу
      this.crudService.createBook(this.book).subscribe(data => {
        this.fetchData();
      });
      this.isNewRecord = false;
      this.editedBook = null;
    } else {
      // изменяем книгу
      this.crudService.updateBook(this.editedBook.id, this.editedBook).subscribe(data => {
        this.fetchData();
      });
      this.editedBook = null;
    }
  }

  // отмена редактирования
  cancel() {
    // если отмена при добавлении, удаляем последнюю запись
    if (this.isNewRecord) {
      this.books.pop();
      this.isNewRecord = false;
    }
    this.editedBook = null; //обнуляем изменяемую книгу
    this.fetchData(); //получаем заново список
  }

  //удаление книги
  deleteBook(book: Book) {
    this.crudService.deleteBookById(book.id).subscribe(() => {
      this.fetchData();
    });
  }

  //работа с модальным окном добавления
  openBookModal(content) {
    this.isNewRecord = true;
    this.modalService.open(content);
  }

  isControlInvalid(controlName: string): boolean{
    const control = this.addBookFormGroup.controls[controlName];

    return control.invalid && control.touched;
  }

  onSubmit(){
    this.saveBook();
    //this.crudService.createBook(this.book);
    console.log(this.book);
    //this.modalService.dismissAll();
  }

  // submitNewBook(form: NgForm){
  //   this.crudService.createBook(this.book)
  // }
}
