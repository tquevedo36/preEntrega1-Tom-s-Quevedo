

let nombre = prompt("ingresa tu nombre");
let apellido = prompt("ingresa tu apellido");
let edad = prompt("ingresa tu edad");
console.log("bienvenido" + nombre + apellido)


let resultado = 0
function dividir(peso, estatura, estatura) {
    resultado = peso / estatura / estatura
    return resultado
}



let peso = prompt("ingrese su peso corporal")
let estatura = prompt("ingrese su estatura")
dividir(peso, estatura, estatura)
console.log("su imc es" + resultado);

if (resultado < 18.5) {
    console.log("usted tiene bajo peso")
} else if ((resultado => 18.5) && (resultado < 25)) {
    console.log("usted tiene peso normal");
} else if (resultado > 25) {
    console.log("usted tiene sobrepeso");
}



let tipoTrabajo = prompt("Qué tipo de trabajo tiene usted ? ingrese activo o sedentario  ");

if (tipoTrabajo == "sedentario") {
    console.log(" Le recomendamos hacer ejercicio para su bienestar ")

    class tipoEmpleo {
        constructor(empleo, lugar) {
            this.empleo = empleo;
            this.lugar = lugar;
        }

        mostrarEmpleo() {
            return "Tipo: " + this.empleo + "\nLugar: " + this.lugar;
        }

    }

    const trabajo = new tipoEmpleo(prompt("Ingresa:" + "empleo" + "lugar"));


    console.log(trabajo);

    console.log(trabajo.mostrarEmpleo());
    const listaEjercicios=[
        {
           espalda:"ejercicio 1",
            cintura:"ejercicio 2",
            hombros:"ejercicio 3",
           
        },
    ];
        console.log("estos son los ejercicios recomendados para el trabajo sedentario" + "..." + listaEjercicios);
    /*const listaEjercicios = ["ejercicios=" + "ejercicio 1 ", "ejercicio 2", "ejercicio 3"];
    console.log("estos son los ejercicios recomendados para el trabajo sedentario" + "..." + listaEjercicios);*/
    const existe = listaEjercicios.some((listaEjercicioso) => listaEjercicios.espalda == "ejercicio 1");
console.log("Existe ejercicio1? "+existe);



} else if (tipoTrabajo == "activo") {
    console.log("Le recomendamos hacer ejercicio para realizar sus actividades con  mayor eficiencia ");
}
// se repite la estructura pero con otras recomendaciones










