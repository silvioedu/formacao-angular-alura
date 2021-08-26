export interface Transferencia {
    id?: string | number;
    valor: number;
    destino: string | number;
    data?: Date;
}

export interface RootObject {
    transferencias: Transferencia[];
}
