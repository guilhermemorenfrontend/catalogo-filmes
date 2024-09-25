export const CreateArray = function (x: number, y: number) {
    const resultado = [];
    for (let i = x; i <= y; i++) {
        resultado.push(i);
    }
    return resultado;
}