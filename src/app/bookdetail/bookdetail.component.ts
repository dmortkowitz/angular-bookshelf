import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css'],
  providers: [BookService]
})

export class BookdetailComponent implements OnInit {
  books: FirebaseListObservable<any[]>;
  bookId: string;
  bookToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.bookId = urlParameters['id'];
    });
    this.bookToDisplay = this.bookService.getBookById(this.bookId);
  }

}
