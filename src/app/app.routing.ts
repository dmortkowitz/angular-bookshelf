import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsershelfComponent } from './usershelf/usershelf.component';


const appRoutes: Routes = [
  {
    path: '',
    component: MainpageComponent
  },
  {
    path: 'usershelf',
    component: UsershelfComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
