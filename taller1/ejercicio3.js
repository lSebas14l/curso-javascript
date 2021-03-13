// Pedir al usuario el número de niños y niñas de un salón, y sacar porcentaje de niños y niñas en un salon
//ejemplo: si en un salon hay 16 niñas, y 4 niños. total 20 (100%), 20% niños y 80% niñas
let ninos = parseInt(prompt("digite la cantidad de niños del salón"));
let ninas = parseInt(prompt("digite la cantidad de niñas del salón"));

let totalEstudiantes = CalcularTotalEstudiantes(ninos,ninas);

let PorcNinos =  CalcularPorcentaje(ninos,totalEstudiantes);
let PorcNinas = CalcularPorcentaje(ninas, totalEstudiantes);

console.log("en el salón "+ PorcNinos+ "% son niños ");
console.log("en el salón "+ PorcNinas+ "% son niñas ");


function CalcularTotalEstudiantes(ninos,ninas){
    let total = ninos+ninas;
    return total;
}

function CalcularPorcentaje(alumnos,total){
    let porcentajeEstudiantes = Math.round((100 * alumnos)/total);
    return porcentajeEstudiantes;
}