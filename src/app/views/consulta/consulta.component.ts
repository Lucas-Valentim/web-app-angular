import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  validationError: any;

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
  ano: number;


  constructor(private veiculoService: VeiculoService) {
    this.codMarca = 0;
    this.codCor = 0;
    this.codFilial = 0;
    this.renavam = 0;
    this.km = 0;
    this.placa = "";
    this.valor = 0.00;
    this.codModelo = 0;
    this.ano = 0;
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

  consultarVeiculo() {
    
    if (this.codMarca == 0) {
      this.validationError = "Campo Obrigatório";
      return;
    }
    else {
      this.validationError = null;
    }

   // window.alert("Entrou no CadastrarVeiculo");
    
    this.veiculoService.getVeiculoPorMarca(this.codMarca).subscribe((veiculos: VeiculoConsulta[]) => {
      this.veiculos = veiculos;
      if (this.veiculos != null) {

        if (this.codCor != 0) {
          this.veiculos = this.veiculos?.filter(veic => veic.codCor.codCor == this.codCor);
        }

        if (this.codModelo != 0) {
          this.veiculos = this.veiculos?.filter(veic => veic.codModelo.codModelo == this.codModelo);
        }

        if (this.codFilial != 0) {
          this.veiculos = this.veiculos?.filter(veic => veic.codFilial.codFilial == this.codFilial);
        }

        if (this.ano != 0) {
          this.veiculos = this.veiculos?.filter(veic => veic.codModelo.ano == this.ano);
        }

      }
    });
  };

  ClearForm() {
    location.reload();
  }

}
