import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsershelfComponent } from './usershelf/usershelf.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { SubmitbookComponent } from './submitbook/submitbook.component';
import { AboutComponent } from './about/about.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { UserComponent } from './user/user.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    UsershelfComponent,
    BookshelfComponent,
    SubmitbookComponent,
    AboutComponent,
    BookdetailComponent,
    UserComponent,
    EditEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
