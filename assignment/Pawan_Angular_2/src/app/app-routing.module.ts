import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewpageComponent} from './newpage/newpage.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
