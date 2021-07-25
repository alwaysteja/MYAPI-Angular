import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  
  books:Book[];

  constructor(private servicebooks:BookserviceService) { }
  ngOnInit(): void{
    this.getBooks();
  }
  private getBooks(){
    this.servicebooks.getBooksList().subscribe(data =>
      {this.books=data;
      });
  }

}
