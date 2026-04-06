export function validarExistencia<T>(valor: T | null | undefined, mensaje: string): T {
  if (valor === null || valor === undefined) {
    throw new Error(mensaje);
  }
  return valor;
}
