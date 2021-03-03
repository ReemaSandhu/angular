import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './Components/first-page/first-page.component';
import { SecondPageComponent } from './Components/second-page/second-page.component';
import { ThirdPageComponent } from './Components/third-page/third-page.component';
const routes: Routes = [
  { path:'first' , component: FirstPageComponent},
  { path:'second', component: SecondPageComponent},
  { path:'third', component: ThirdPageComponent},
  { path:'',redirectTo:'first',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[FirstPageComponent,SecondPageComponent,ThirdPageComponent]