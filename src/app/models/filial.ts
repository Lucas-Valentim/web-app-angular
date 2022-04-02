import { Cidade } from "./cidade";

export interface Filial {

    codFilial: Number;
    cnpj: Number;
    razaoSocial: string;
    cep: Number;
    logradouro: string;
    bairro: string;
    numero: Number;
    codCidade: Cidade;
    complemento: string;


}
