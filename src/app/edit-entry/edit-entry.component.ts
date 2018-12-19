import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
  providers: [BookService]
})
export class EditEntryComponent implements OnInit {
  @Input() selectedBook;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  beginUpdatingBook(bookToUpdate){
    this.bookService.updateBook(bookToUpdate);
  }
  beginDeletingBook(bookToDelete){
    if(confirm("Are you sure you want to delete this book from your collection?")){
      this.bookService.deleteBook(bookToDelete);
    }
  }

}
