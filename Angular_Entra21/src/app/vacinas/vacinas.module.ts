import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { VacinasRoutingModule } from './vacinas-routing.module';

@NgModule({
  declarations: [
    VacinaListagemComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    AppMaterialModule,
  ]
})
export class VacinasModule { }
