import { Cor } from "./cor";
import { Filial } from "./filial";
import { Modelo } from "./modelo";

export interface VeiculoConsulta {
    id: Number;
    codModelo: Modelo;
    km: Number;
    codCor: Cor;
    placa: string;
    codFilial: Filial;
    descricao: string;
    renavam: Number;
    valor: number;
}
