import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnitarioComponent } from './unitario/unitario.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'acerca', component: UnitarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
