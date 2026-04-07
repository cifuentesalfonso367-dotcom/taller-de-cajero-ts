import { CuentaBancaria } from "../models/cuentaBancaria.js";
import { validarExistencia } from "../utils/validaciones.js";

export class CajeroService {
  private fondos: number;
  private cuentas: CuentaBancaria[];

  constructor(fondosIniciales: number) {
    this.fondos = fondosIniciales;
    this.cuentas = [];
  }

  registrarCuenta(cuenta: CuentaBancaria): void {
    this.cuentas.push(cuenta);
    console.log(`Cuenta ${cuenta.numeroCuenta} registrada para ${cuenta.titular}.`);
  }

  buscarCuenta(numeroCuenta: string): CuentaBancaria {
    const cuenta = this.cuentas.find(c => c.numeroCuenta === numeroCuenta);
    return validarExistencia(cuenta, `La cuenta ${numeroCuenta} no existe.`);
  }

  consultarSaldo(numeroCuenta: string): void {
    const cuenta = this.buscarCuenta(numeroCuenta);
    console.log(`Saldo de ${cuenta.titular}: $${cuenta.obtenerSaldo()}`);
  }

  depositar(numeroCuenta: string, monto: number): void {
    if (monto <= 0) {
      console.log("El monto debe ser mayor a 0.");
      return;
    }
    const cuenta = this.buscarCuenta(numeroCuenta);
    cuenta.depositar(monto);
    console.log(`Depósito exitoso. Nuevo saldo: $${cuenta.obtenerSaldo()}`);
  }

  retirar(numeroCuenta: string, monto: number): void {
    if (monto <= 0) {
      console.log("El monto debe ser mayor a 0.");
      return;
    }

    if (monto > this.fondos) {
      console.log(`El cajero no tiene fondos suficientes. Disponible: $${this.fondos}`);
      return;
    }

    const cuenta = this.buscarCuenta(numeroCuenta);
    const exitoso = cuenta.retirar(monto);

    if (!exitoso) {
      console.log(`Fondos insuficientes en la cuenta. Saldo actual: $${cuenta.obtenerSaldo()}`);
      return;
    }

    this.fondos -= monto;
    console.log(`Retiro exitoso de $${monto}. Saldo restante: $${cuenta.obtenerSaldo()}`);
  }
}