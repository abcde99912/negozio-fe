export class Cliente {
    idCli: number;
    nomeCli: string;
    cognomeCli: string;
    emailCli: string;
    indirizzoCli: string;
    dataCreCli: Date;
    profiloCli: ProfiloCliente;
    selezionato: boolean = false;
    codiceFiscaleCli: string;
    dataUltimaModifica: Date;

    constructor() {
        this.idCli = 0;
        this.nomeCli = '';
        this.cognomeCli = '';
        this.emailCli = '';
        this.indirizzoCli = '';
        this.codiceFiscaleCli = '';
        this.dataCreCli = new Date();
        this.profiloCli = new ProfiloCliente();
        this.dataUltimaModifica = new Date();
        
    }
}

export class ProfiloCliente {
    idPrf: number; 
    descPrf: string; 


    constructor() {
        this.idPrf = 0;
        this.descPrf = '';
    }
}





