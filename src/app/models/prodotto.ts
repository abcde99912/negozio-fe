export class CategoriaProdotto {
    idCatPrd: number;
    descPrd: string;

    constructor() {
        this.idCatPrd = 0;
        this.descPrd = '';
    }
}

export class Prodotto {
    idPrd: number;
    descPrd: string;
    qtaPrd: number;
    dataCPrd: Date;
    categoriaPrd: CategoriaProdotto;


    constructor() {
        this.idPrd = 0;
        this.descPrd = '';
        this.qtaPrd = 0;
        this.dataCPrd = new Date();
        this.categoriaPrd = new CategoriaProdotto();
    }
}