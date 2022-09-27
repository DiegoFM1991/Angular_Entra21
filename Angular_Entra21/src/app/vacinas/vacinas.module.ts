import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';

@NgModule({
  declarations: [
    VacinaListagemComponent,
    VacinaDetalheComponent
  ],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    AppMaterialModule,
  ]
})
export class VacinasModule { }
