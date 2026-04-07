
import { CuentaBancaria } from "./models/cuentaBancaria.js";
import { CajeroService } from "./services/cajeroServices.js";
import * as readline from 'readline';

const cajero = new CajeroService(1000000); // Fondos iniciales del cajero

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n=== Cajero Automático ===");
  console.log("1. Registrar cuenta");
  console.log("2. Consultar saldo");
  console.log("3. Depositar");
  console.log("4. Retirar");
  console.log("5. Salir");
  rl.question("Selecciona una opción: ", (opcion: string) => {
    procesarOpcion(opcion);
  });
}

function procesarOpcion(opcion: string) {
  switch (opcion) {
    case '1':
      registrarCuenta();
      break;
    case '2':
      consultarSaldo();
      break;
    case '3':
      depositar();
      break;
    case '4':
      retirar();
      break;
    case '5':
      console.log("Gracias por usar el cajero.");
      rl.close();
      return;
    default:
      console.log("Opción inválida.");
      mostrarMenu();
  }
}

function registrarCuenta() {
  rl.question("Número de cuenta: ", (numero: string) => {
    rl.question("Nombre del titular: ", (titular: string) => {
      rl.question("Saldo inicial: ", (saldoStr: string) => {
        const saldo = parseFloat(saldoStr);
        if (isNaN(saldo) || saldo < 0) {
          console.log("Saldo inválido.");
          mostrarMenu();
          return;
        }
        const cuenta = new CuentaBancaria(numero, titular, saldo);
        cajero.registrarCuenta(cuenta);
        mostrarMenu();
      });
    });
  });
}

function consultarSaldo() {
  rl.question("Número de cuenta: ", (numero: string) => {
    try {
      cajero.consultarSaldo(numero);
    } catch (error) {
      console.log((error as Error).message);
    }
    mostrarMenu();
  });
}

function depositar() {
  rl.question("Número de cuenta: ", (numero: string) => {
    rl.question("Monto a depositar: ", (montoStr: string) => {
      const monto = parseFloat(montoStr);
      if (isNaN(monto) || monto <= 0) {
        console.log("Monto inválido.");
        mostrarMenu();
        return;
      }
      try {
        cajero.depositar(numero, monto);
      } catch (error) {
        console.log((error as Error).message);
      }
      mostrarMenu();
    });
  });
}

function retirar() {
  rl.question("Número de cuenta: ", (numero: string) => {
    rl.question("Monto a retirar: ", (montoStr: string) => {
      const monto = parseFloat(montoStr);
      if (isNaN(monto) || monto <= 0) {
        console.log("Monto inválido.");
        mostrarMenu();
        return;
      }
      try {
        cajero.retirar(numero, monto);
      } catch (error) {
        console.log((error as Error).message);
      }
      mostrarMenu();
    });
  });
}

mostrarMenu();