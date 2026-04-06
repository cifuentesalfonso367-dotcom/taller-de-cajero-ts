export interface Icuenta {
    numero_cuenta: string;
    titular: string;
    obtenerSaldo: () => number;
    depositar: (monto: number) => void;
    retirar: (monto: number) => boolean;
}
export declare class CuentaBancaria implements Icuenta {
    numero_cuenta: string;
    titular: string;
    private saldo;
    constructor(numeroCuenta: string, titular: string, saldoInicial: number);
    obtenerSaldo(): number;
    depositar(monto: number): void;
    retirar(monto: number): boolean;
}
//# sourceMappingURL=cuentaBancaria.d.ts.map

