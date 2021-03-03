import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { RetailerComponent } from './retailer/retailer.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  {path:'', redirectTo: 'contact', pathMatch:'full'},
  {path:'contact', component:ContactComponent},
  {path:'retailer', component:RetailerComponent},
  {path:'three', component:ThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
