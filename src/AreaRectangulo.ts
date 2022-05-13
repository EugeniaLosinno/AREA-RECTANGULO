let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");

let base: number;
let altura: number;

btnEnviar.addEventListener("click", () => {
  // Acá va nuestro código
  rotulo1.innerHTML = "Base";
  base = Number(dato1.value);
  console.log("El dato ingresado por la altura es: ", base);
  rotulo2.innerHTML = "Altura";
  altura = Number(dato2.value);
  console.log("El dato ingresado por la base es: ", altura);
  console.log(
    "El area del rectangulo de base ",
    base,
    "y altura ",
    altura,
    "es",
    base * altura
  );
});
