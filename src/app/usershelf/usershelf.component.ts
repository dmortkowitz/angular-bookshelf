import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-usershelf',
  templateUrl: './usershelf.component.html',
  styleUrls: ['./usershelf.component.css']
})
export class UsershelfComponent {

  constructor(private router: Router){}

  books: Book[] = [
    new Book("Norwegian Wood", "Haruki Murakami", "This stunning and elegiac novel propelled Haruki Murakami into the forefront of the literary scene.", 1),
    new Book("I Am China", "Xiaolu Guo", "Rock 'n roll, revolution, and romance are seductively woven together in this intense and moving novel from the author of Twenty Fragments of a Ravenous Youth.", 2),
    new Book("On Such A Full Sea", "Lee Chang-Rae", "A visionary work from one of the most important writers of our time, On Such a Full Sea takes Chang-rae Lee's elegance of prose mastery of storytelling, and insight into themes of identity, culture, work, and love, and lifts them to an exhilarating new plane.", 3)
  ];

  goToDetailPage(clickedBook: Book) {
    this.router.navigate(['books', clickedBook.id]);
  };

    ngOnInit() {
  }
}
