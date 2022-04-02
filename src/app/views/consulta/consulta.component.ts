import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Marca } from 'src/app//models/marca';
import { Modelo } from 'src/app//models/modelo';
import { Cor } from 'src/app//models/cor';
import { Veiculo } from 'src/app/models/veiculo';
import { Filial } from 'src/app/models/filial';
import { VeiculoConsulta } from 'src/app/models/veiculo-consulta';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConsultaComponent implements OnInit {

  codMarca: Number;
  marca = {} as Marca;
  marcas: Marca[] | undefined;

  codModelo: Number;
  modelo = {} as Modelo;
  modelos: Modelo[] | undefined

  codCor: Number;
  cor = {} as Cor;
  cores: Cor[] | undefined;

  codFilial: Number;
  filial = {} as Filial;
  filiais: Filial[] | undefined;

  veiculo = {} as VeiculoConsulta;
  veiculos: VeiculoConsulta[] | undefined;

  renavam: Number;
  km: Number;
  placa: string;
  valor: number;


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

  consultarVeiculo(){

   // window.alert("Entrou no CadastrarVeiculo");

   if (this.codMarca != 0 && this.codModelo != 0 && this.codCor != 0){
    
    this.veiculoService.getVeiculoPorCor(this.codCor).subscribe((veiculos: VeiculoConsulta[]) => {
      this.veiculos = veiculos;
    });

   };
   
   if (this.codMarca != 0 && this.codModelo == 0 && this.codCor == 0){

    this.veiculoService.getVeiculoPorMarca(this.codMarca).subscribe((veiculos: VeiculoConsulta[]) => {
      this.veiculos = veiculos;
    });

   };

   if (this.codMarca != 0 && this.codModelo != 0 && this.codCor == 0){

    this.veiculoService.getVeiculoPorModelo(this.codModelo).subscribe((veiculos: VeiculoConsulta[]) => {
      this.veiculos = veiculos;
    });

   }   

  };

}
