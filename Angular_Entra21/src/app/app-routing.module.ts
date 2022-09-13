import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'vacinas', pathMatch: 'full' },
  { path: 'vacinas', loadChildren:() => import('./vacinas/vacinas.module').then(m => m.VacinasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
