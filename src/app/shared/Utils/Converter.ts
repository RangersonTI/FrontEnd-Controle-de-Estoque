
const stringParaBooleano = (valor?: string) =>
    valor?.trim() == "true" ? true : false;

const booleanoParaString = (valor?: boolean): string =>
    valor === true ? "true" : "false";


export const Converter = {
    stringParaBooleano,
    booleanoParaString
}