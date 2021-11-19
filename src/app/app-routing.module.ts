import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',//Va regarder ce qui se passe dans l'url ...Si mon url est vide alors..
    component: HomeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
