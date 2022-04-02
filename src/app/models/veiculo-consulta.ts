import { Cor } from "./cor";
import { Filial } from "./filial";
import { Modelo } from "./modelo";
import { Marca } from "./marca";

export interface VeiculoConsulta {
    id: Number;
    codModelo: Modelo;
    codMarca: Marca;
    km: Number;
    codCor: Cor;
    placa: string;
    codFilial: Filial;
    descricao: string;
    renavam: Number;
    valor: number;
}
