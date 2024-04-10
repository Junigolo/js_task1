// Funciones declarativas
function suma(a,b){console.log("La Suma es : ",a+b)}
suma(23,7);

// Funciones expresivas
const resta = function(a, b) {console.log("la Resta de b de A es",a-b)}
resta(24,5);

// Funciones de flecha (arrow functions) forma larga
const multiplicar = (a,b) => {return a*b;}
console.log(multiplicar(20,5));

// Funciones de flecha (arrow functions) forma corta
const dividir = (a,b) => a / b;
console.log(dividir(1000,4));


function Usuario(){
    this.cedula = "79314569";
    this.nombre = "Nicolas";
    this.apellidos = "Gomez";
    this.telefono = "3214535026";
    this.cargo = "Ingeniero";
}

const usuario = new Usuario();
console.log(usuario.cedula," -- ",usuario.nombre);


const CedulaCargoPerfil = (Cedula, Cargo, Perfil ) => {
console.log(`Sus datos => : ${Cedula} ${Cargo} ${Perfil}`)
}

CedulaCargoPerfil("79314569", "Ingeniero", "Administrador");


const fnc_empleado = function(obj){
    console.log(obj);
}

let obj_empleado = {
    cedula : "79314569",
    nombres: "Nicolas",
    apellidos: "Gomez",
    cargo : "Ingeniero",
    dependencia : "Sistemas",
    fecha_ingreso : "15-dic-2021"
}
fnc_empleado(obj_empleado);
