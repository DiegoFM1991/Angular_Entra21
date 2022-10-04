import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pesquisador } from 'src/app/shared/model/pequisador';
import { Vacina } from './../../shared/model/vacina';
import { PesquisadorService } from './../../shared/service/pesquisador.service';
import { VacinasService } from './../../shared/service/vacinas.service';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrls: ['./vacina-detalhe.component.scss']
})
export class VacinaDetalheComponent implements OnInit {

  public idVacina: number;
  public vacina: Vacina = new Vacina();
  public pesquisadores: Pesquisador[] = new Array();

  constructor(private pesquisadorService: PesquisadorService,
              private vacinasService: VacinasService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPesquisadores();

    this.route.params.subscribe(params => {
      this.idVacina = params['id'];

      if(this.idVacina) {
        this.buscarVacina();
      }
    });
  }

  buscarVacina(){
    this.vacinasService.buscarPorId(this.idVacina).subscribe(
      resultado => {
        if(resultado){
          this.vacina = resultado;
        }else{
          //TODO evoluir essa mensagem
          alert('Vacina não encontrada');
        }
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
      }
    );
  }

  buscarPesquisadores(){
    this.pesquisadorService.listarTodos().subscribe(
      resultado => {
        this.pesquisadores = resultado;
      },
      erro => {
        //TODO evoluir para mostrar mensagem na tela
        console.log("DEU ERRO. Causa: " + erro);
      }
    );
  }

  salvar(){
    if(this.idVacina){
    this.vacinasService.atualizar(this.vacina).subscribe(
      resultado => {
        this.vacina = resultado;
        alert("Vacina ATUALIZADA com sucesso");
        this.limpar();
      },
      erro => {
        alert("Erro: " + erro.error.message);
      }
    );
  }else{
    this.vacinasService.salvar(this.vacina).subscribe(
      resultado => {
        this.vacina = resultado;
        alert("Vacina SALVA com sucesso");
        this.limpar();
      },
      erro => {
        alert("Erro: " + erro.error.message);
      }
    );
  }
}

  limpar(){
    this.vacina = new Vacina();
  }

  compararObjetos(o1: any, o2: any): boolean {
    return o1.nome === o2.nome && o1.id === o2.id;
  }

}
