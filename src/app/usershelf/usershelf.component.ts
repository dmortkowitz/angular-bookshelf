import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-usershelf',
  templateUrl: './usershelf.component.html',
  styleUrls: ['./usershelf.component.css'],
  providers: [BookService]
})

export class UsershelfComponent implements OnInit {
  books: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private bookService: BookService) {}

    ngOnInit() {
      this.books = this.bookService.getBooks();
  }

  goToDetailPage(clickedBook) {
    this.router.navigate(['members/books', clickedBook.$key]);
  };
}
