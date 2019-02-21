import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

    readonly dados = [
      ['Janeiro', 33],
      ['Fevereiro', 68],
      ['Março', 49],
      ['Abril', 15],
      ['Maio', 80],
      ['Junho', 27]
    ];

    readonly dados2 = [
      ['Germany', 200],
      ['United States', 300],
      ['Brazil', 400],
      ['Canada', 500],
      ['France', 600],
      ['RU', 700]
    ];

  constructor() { }

  /**
   * Retorn um observable contendo os dados a serem
   * exibidos no gráfico.
   * 
   * @return Observable<any>
   */

   obterDados(): Observable<any> {
     return new Observable(observable => {
       observable.next(this.dados);
       observable.complete();
     })
   }

   ObterDados2(): Observable<any> {
     return new Observable(observable => {
        observable.next(this.dados2);
        observable.complete();
     })
   }
}
