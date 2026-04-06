import { CuentaBancaria } from "../models/cuentaBancaria";
import { validarExistencia } from "../utils/validaciones";

export class cajeroServices {
    private fondos: number;
    private cuentas: CuentaBancaria[];

    constructor(fondosIniciales: number) {
        this.fondos = fondosIniciales;
        this.cuentas = [];
    }
    registrarCuenta(cuenta: CuentaBancaria): void {
        this.cuentas.push(cuenta);
        console.log(`Cuenta ${cuenta.numero_cuenta} registrada para ${cuenta.titular}.`);
    }
    buscarCuenta(numeroCuenta: string): CuentaBancaria {
        const cuenta = this.cuentas.find(c => c.numero_cuenta === numeroCuenta);
        return validarExistencia(cuenta, `cuenta ${numeroCuenta} no existe.`);
    }
    consultarSaldo (numero_cuenta: string): void {
        const cuenta = this.buscarCuenta(numero_cuenta);
        console.log(`El saldo de la cuenta ${cuenta.titular} es: $${cuenta.obtenerSaldo()}`);
    }
}