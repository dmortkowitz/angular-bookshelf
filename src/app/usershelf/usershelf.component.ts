import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { BookService } from '../book.service';


@Component({
  selector: 'app-usershelf',
  templateUrl: './usershelf.component.html',
  styleUrls: ['./usershelf.component.css'],
  providers: [BookService]
})

export class UsershelfComponent implements OnInit {
  books: Book[];
  constructor(private router: Router, private bookService: BookService) {}

    ngOnInit() {
      this.books = this.bookService.getBooks();
  }

  goToDetailPage(clickedBook: Book) {
    this.router.navigate(['books', clickedBook.id]);
  };
}
