import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Comentado para não encaminhar direto para a tela de vacinas
  // { path: '', redirectTo: 'vacinas', pathMatch: 'full' },
  {
    path: 'vacinas',
    loadChildren: () => import('./vacinas/vacinas.module').then(m => m.VacinasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
