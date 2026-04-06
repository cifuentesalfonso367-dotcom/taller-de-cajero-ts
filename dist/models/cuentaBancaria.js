export class CuentaBancaria {
    numero_cuenta;
    titular;
    saldo;
    constructor(numeroCuenta, titular, saldoInicial) {
        this.numero_cuenta = numeroCuenta;
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    obtenerSaldo() {
        return this.saldo;
    }
    depositar(monto) {
        this.saldo += monto;
    }
    retirar(monto) {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=cuentaBancaria.js.map