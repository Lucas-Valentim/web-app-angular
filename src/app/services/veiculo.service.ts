import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Marca } from 'src/app//models/marca';
import { Observable } from 'rxjs';
import { Modelo } from '../models/modelo';
import { Cor } from '../models/cor';
import { Filial } from '../models/filial';
import { Veiculo } from '../models/veiculo';
import { VeiculoConsulta } from '../models/veiculo-consulta';



@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  urlBase = 'http://localhost:8089/veiculos';

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

  //codMarca: Number, codModelo: Number, renavam: Number, codCor: Number, km: Number, placa: string, codFilial: Number, valor: Number
  postVeiculo(veiculo: Veiculo){

    return this.http.post<Veiculo>(this.urlBase + "/cadastro", veiculo )
              .subscribe(resultado => { console.log(resultado)});
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
