
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsershelfComponent } from './usershelf/usershelf.component';
import { SubmitbookComponent } from './submitbook/submitbook.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'members',
    component: MainpageComponent
  },
  {
    path: 'members/usershelf',
    component: UsershelfComponent
  },
  {
    path: 'members/submitbook',
    component: SubmitbookComponent
  },
  {
    path: 'members/books/:id',
    component: BookdetailComponent
  },
  {
    path: 'members/user',
    component: UserComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
