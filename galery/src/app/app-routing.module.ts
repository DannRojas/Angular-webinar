import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './components/home/home.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { PublicacionFormComponent } from './components/publicacion-form/publicacion-form.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "publications", component: PublicationsComponent},
  {path: "publication/:id", component: PublicacionFormComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
