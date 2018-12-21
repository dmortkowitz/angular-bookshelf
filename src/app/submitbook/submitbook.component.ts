import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-submitbook',
  templateUrl: './submitbook.component.html',
  styleUrls: ['./submitbook.component.css'],
  providers: [BookService]
})
export class SubmitbookComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  submitForm(title: string, author: string, summary: string, pages: string, status: string) {
      var newBook: Book = new Book(title, author, summary, pages, status);
      this.bookService.addBook(newBook);
  }
}
