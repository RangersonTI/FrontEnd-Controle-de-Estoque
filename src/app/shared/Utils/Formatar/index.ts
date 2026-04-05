
const paraNumero = (value: string) =>
    Number(value.replace(/[^0-9\s]/g, ""));

export const Formatar = {
    paraNumero
}