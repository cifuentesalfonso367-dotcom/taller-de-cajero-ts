export interface Icuenta { 
    numeroCuenta: string;
    titular: string;
    obtenerSaldo: () => number;
    depositar:(monto: number) => void;
    retirar:(monto:number) => boolean;
}

export class CuentaBancaria implements Icuenta {
    numeroCuenta: string;
    titular: string;
    private saldo: number; 


    
  constructor(numeroCuenta: string, titular: string, saldoInicial: number) {
    this.numeroCuenta = numeroCuenta;
    this.titular = titular;
    this.saldo = saldoInicial;
    }

  obtenerSaldo(): number {
    return this.saldo;
  }

  depositar(monto: number): void {
    this.saldo += monto;
  }

  retirar(monto: number): boolean {
    if (this.saldo >= monto) {
      this.saldo -= monto;
      return true;
    }
    return false;
  }
}
