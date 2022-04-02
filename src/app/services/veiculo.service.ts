import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Marca } from 'src/app//models/marca';
import { EmptyError, Observable } from 'rxjs';
import { Modelo } from '../models/modelo';
import { Cor } from '../models/cor';
import { Filial } from '../models/filial';
import { Veiculo } from '../models/veiculo';
import { VeiculoConsulta } from '../models/veiculo-consulta';
import { Estoque } from '../models/estoque';
import { error } from '@angular/compiler/src/util';
import { catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  readonly urlBase = 'http://3.137.162.197:8089/veiculos';
  readonly urlEstoque = 'http://3.144.46.78:8090/estoque';

  constructor(private http: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': 'PUT, POST, GET, OPTIONS'
      })
    }

  getMarcas(): Observable<Marca[]>{
    //return this.http.get<{type: string, price: number}>('/assets/shipping.json');
    return this.http.get<Marca[]>(this.urlBase + "/listarmarcas");
  }

  getModelos(codMarca: Number){
    return this.http.get<Modelo[]>(this.urlBase + "/listarmodelos/" + codMarca);
   // return  this.http.get<Modelo[]>(`${this.modeloUrl}&codMarca=${codMarca}`); 
  }

  getCores(): Observable<Cor[]>{
    return this.http.get<Cor[]>(this.urlBase + "/listarcores");
  }

  getFiliais(): Observable<Filial[]>{
    return this.http.get<Filial[]>(this.urlBase + "/listarfiliais");
  }

  //cadastramento veiculo
  postVeiculo(veiculo: Veiculo, estoque: Estoque){
  
    this.http.post<Veiculo>(this.urlBase + "/cadastro", veiculo )
              .pipe(
                catchError(error => {
                  alert("Erro ao Cadastrar Veiculo");
                  return error;
                })
              )
              .subscribe(resultado => { 
                alert("Cadastro Realizado com sucesso!")
                this.putEstoque(estoque).subscribe()}
              );
  }

  putEstoque(estoque: Estoque): Observable<unknown>{

//controle estoque via RabbitMQ
    return this.http.put<Estoque>(this.urlEstoque, estoque, this.httpOptions)   
    .pipe(
      catchError(error => {
        alert("Erro ao Atualizar o Estoque");
        return error;
      })
    );
  }
  
  getVeiculoPorMarca(codMarca: Number): Observable<VeiculoConsulta[]>{
    return this.http.get<VeiculoConsulta[]>(this.urlBase + "/consultapormarca/" + codMarca);
  }

  getVeiculoPorModelo(codModelo: Number): Observable<VeiculoConsulta[]>{
    return this.http.get<VeiculoConsulta[]>(this.urlBase + "/consultapormodelo/" + codModelo);
  }
  
  getVeiculoPorCor(codCor: Number): Observable<VeiculoConsulta[]>{
    return this.http.get<VeiculoConsulta[]>(this.urlBase + "/consultaporcor/" + codCor);
  }


}
