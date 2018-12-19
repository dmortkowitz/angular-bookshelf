
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsershelfComponent } from './usershelf/usershelf.component';
import { SubmitbookComponent } from './submitbook/submitbook.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { UserComponent } from './user/user.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MainpageComponent
  },
  {
    path: 'usershelf',
    component: UsershelfComponent
  },
  {
    path: 'submitbook',
    component: SubmitbookComponent
  },
  {
    path: 'books/:id',
    component: BookdetailComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
