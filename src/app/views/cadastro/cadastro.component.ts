import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Marca } from 'src/app//models/marca';
import { Modelo } from 'src/app//models/modelo';
import { Cor } from 'src/app//models/cor';
import { NumberValueAccessor } from '@angular/forms';
import { Filial } from 'src/app/models/filial';
import { CurrencyPipe } from '@angular/common';
import { Veiculo } from 'src/app/models/veiculo';
import { Estoque } from 'src/app/models/estoque';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  codMarca: Number;
  marca = {} as Marca;
  marcas: Marca[] | undefined;

  codModelo: Number;
  modelo = {} as Modelo;
  modelos: Modelo[] | undefined;

  codCor: Number;
  cor = {} as Cor;
  cores: Cor[] | undefined;

  codFilial: Number;
  filial = {} as Filial;
  filiais: Filial[] | undefined;

  veiculo = {} as Veiculo;

  estoque = {} as Estoque;

  renavam: Number;
  km: Number;
  placa: string;
  valor: Number;


  constructor(private veiculoService: VeiculoService) {
    this.codMarca = 0;
    this.codCor = 0;
    this.codFilial = 0;
    this.renavam = 0;
    this.km = 0;
    this.placa = "";
    this.valor = 0.00;
    this.codModelo = 0;
    }

  ngOnInit(): void {
 
    this.listaMarcas();
    this.listaCores();
    this.listaFiliais();
  }

  listaMarcas() {
    this.veiculoService.getMarcas().subscribe((marcas: Marca[]) => {
      this.marcas = marcas;
    });
  }

  listaModelos(){

 
    this.veiculoService.getModelos(this.codMarca).subscribe((modelos: Modelo[]) => {
      this.modelos = modelos;
    }
    );
  }

  listaCores(){
      
    this.veiculoService.getCores().subscribe((cores: Cor[]) => {
      this.cores = cores;
    });
  }

  listaFiliais(){
      
    this.veiculoService.getFiliais().subscribe((filiais: Filial[]) => {
      this.filiais = filiais;
    });
  }

  cadastrarVeiculo(){

   // window.alert("Entrou no CadastrarVeiculo");

    this.veiculo.codModelo = this.codModelo;
    this.veiculo.km = this.km;
    this.veiculo.codCor = this.codCor;
    this.veiculo.placa = this.placa;
    this.veiculo.codFilial = this.codFilial;
    this.veiculo.descricao = "";
    this.veiculo.renavam = this.renavam;
    this.veiculo.valor = this.valor;

    this.estoque.codmodelo = this.codModelo;
    this.estoque.qtdemodelo = 1;

    this.veiculoService.postVeiculo(this.veiculo, this.estoque);
 


  }

}
