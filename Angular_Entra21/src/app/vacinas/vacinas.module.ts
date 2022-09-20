import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';

@NgModule({
  declarations: [
    VacinaListagemComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    MatTableModule,
    AppMaterialModule,
  ]
})
export class VacinasModule { }
