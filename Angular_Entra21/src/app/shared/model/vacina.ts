import { pesquisador } from "./pequisador";
export class Vacina {
  id: Number;
  paisOrigem: string;
  estagioPesquisa: number;
  dataInicioPesquisa: Date;
  responsavel: pesquisador;
}
