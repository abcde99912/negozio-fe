import { Cliente } from './cliente';
import { Prodotto } from './prodotto';

export class Ordini {
    idOrdine: number;
    idCliente: Cliente = new Cliente();
    idProdotto: Prodotto = new Prodotto();
    quantita: number;
    dataOrdine: Date = new Date();

    constructor() {
        this.idOrdine = 0;
        this.quantita = 0;
    }
}