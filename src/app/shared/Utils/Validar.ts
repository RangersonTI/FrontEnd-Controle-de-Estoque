
const ehStringValida = (valor: string | null | undefined) => {

    if(!valor) return false;

    if(typeof valor !== "string") return false;

    return true;
}

export const Validar = {
    ehStringValida
}