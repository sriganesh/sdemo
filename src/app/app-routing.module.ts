import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { Page1Component } from './pages/page1/page1.component'
import { Page2Component } from './pages/page2/page2.component'
import { Page3Component } from './pages/page3/page3.component'
import { Page4Component } from './pages/page4/page4.component'
import { from } from 'rxjs';


const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'page1',  component: Page1Component},
  { path: 'page2',  component: Page2Component},
  { path: 'page3',  component: Page3Component},
  { path: 'page4',  component: Page4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
