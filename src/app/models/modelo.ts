import { Marca } from "./marca";
import { Combustivel } from "./combustivel";

export interface Modelo {
    codModelo: Number;
    codMarca: Marca;
    codCombustivel: Combustivel;
    ano: Number;
    modelo: string;
}
