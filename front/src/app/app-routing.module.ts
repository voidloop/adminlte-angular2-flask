import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarterComponent } from './starter/starter.component';

const routes: Routes = [
  { path: '', redirectTo: 'starter', pathMatch: 'full' },
  { path: 'starter', component: StarterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
