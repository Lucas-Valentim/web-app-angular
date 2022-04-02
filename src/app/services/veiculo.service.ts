import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Marca } from 'src/app//models/marca';
import { Observable } from 'rxjs';
import { Modelo } from '../models/modelo';
import { Cor } from '../models/cor';
import { Filial } from '../models/filial';
import { Veiculo } from '../models/veiculo';
import { VeiculoConsulta } from '../models/veiculo-consulta';
import { Estoque } from '../models/estoque';
import { error } from '@angular/compiler/src/util';



@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  readonly urlBase = 'http://localhost:8089/veiculos';
  readonly urlEstoque = 'http://localhost:8090/estoque';

  constructor(private http: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
  postVeiculo(veiculo: Veiculo){
  
    this.http.post<Veiculo>(this.urlBase + "/cadastro", veiculo )
              .subscribe(resultado => { console.log("Cadastro Realizado - " + resultado)}
              );

  }

  postEstoque(estoque: Estoque): Observable<Estoque>{

//controle estoque via RabbitMQ
    return this.http.put<Estoque>(this.urlEstoque, estoque);
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
