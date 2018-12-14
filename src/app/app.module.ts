import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsershelfComponent } from './usershelf/usershelf.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { SubmitbookComponent } from './submitbook/submitbook.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UsershelfComponent,
    BookshelfComponent,
    SubmitbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
