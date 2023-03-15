class Moto {
    constructor(marca, tipo, motor, color, modelo, precio) {
    this.marca = marca;
    this.tipo = tipo;
    this.motor = motor;
    this.color = color;
    this.modelo = modelo;
    this.precio = parseInt(precio);
}
}

const moto1 = new Moto ("Bajaj", "Street", "125cc", "Negro", "NS 125", 545000);
const moto2 = new Moto ("Zanella", "Scooter", "150cc", "Negro", "Exclusive Edizione", 585000);
const moto3 = new Moto ("Bajaj", "Tourer", "400cc", "Negro", "Dominar 400", 1850000);
const moto4 = new Moto ("Kymco", "Scooter", "350cc", "Plateado", "Downtown 350i ABS", 2900000);
const moto5 = new Moto ("Honda", "Enduro/Cross", "600cc", "Azul y rojo", "Xr 600", 3500000);
const moto6 = new Moto ("Benelli", "Street", "600cc", "Negro", "TNT 600i", 4650000);

let arrayMotos = [moto1, moto2, moto3, moto4, moto5, moto6];

//Como ejemplo de método de filtrado uso map, para crear un nuevo array de las motos. Esta vez al precio base le agrego 10% (aprox gastos de patentamiento en CABA) para tener el precio final. Tambien use Math.round () para redondear los resultados con el impuesto agregado
let arrayPrecioFinal = arrayMotos.map ((Moto =>{
    return {
        marca: Moto.marca,
        tipo: Moto.tipo,
        motor: Moto.motor,
        color: Moto.color,
        modelo: Moto.modelo,
        precio: (Moto.precio*1.1),
    }
})) 
console.log(arrayPrecioFinal);
 
function motoDisponible () {
     let presupuesto = parseInt(prompt('Por favor ingrese su presupuesto, si quiere salir ingrese "0": '));
     while ( presupuesto != '0' ) {
         if ( presupuesto < 500000 && presupuesto > 0 ) {
             alert('Tu presupuesto no alcanza para ninguna moto de las que tenemos, por favor ingrese uno mayor a 500000: ');
         } else if ( presupuesto >= 500000 && presupuesto < 1200000 ){
             alert('Tu presupuesto es suficiente para motos entre 125cc y 300cc');
             alert('Las motos disponibles del segmento son: \n\n' + moto1.marca  + '\n' + moto1.modelo + '\n' + 'Valor (sin patentamiento) : ' + moto1.precio + '\n' + 'Valor final : ' + Math.round(arrayPrecioFinal[0].precio) + '\n\n' + moto2.marca + '\n' + moto2.modelo + '\n' + 'Valor (sin patentamiento) : ' + moto2.precio + '\n' + 'Valor final : ' + Math.round(arrayPrecioFinal[1].precio));
         } else if ( presupuesto >= 1200000 && presupuesto <= 3000000 ){
             alert('Tu presupuesto es suficiente para motos entre 300cc y 600cc');
             alert('Las motos disponibles del segmento son: \n\n' + moto3.marca  + '\n' + moto3.modelo + '\n' + 'Valor (sin patentamiento) : ' + moto3.precio + '\n' + 'Valor final : ' + Math.round(arrayPrecioFinal[2].precio) + '\n\n' + moto4.marca + '\n' + moto4.modelo + '\n' + 'Valor (sin patentamiento) : ' + moto4.precio + '\n' + 'Valor final : ' + Math.round(arrayPrecioFinal[3].precio));
         } else if ( presupuesto >= 3000000) {
             alert('Tu presupuesto es suficiente para comprar cualquier moto hasta 1200cc');
             alert('Las motos disponibles del segmento son: \n\n' + moto5.marca  + '\n' + moto5.modelo + '\n' + 'Valor (sin patentamiento) : ' + moto5.precio + '\n' + 'Valor final : ' + Math.round(arrayPrecioFinal[4].precio) + '\n\n' + moto6.marca + '\n' + moto6.modelo + '\n' + 'Valor (sin patentamiento) : ' + moto6.precio + '\n' + 'Valor final : ' + Math.round(arrayPrecioFinal[5].precio));
         }
           else { 
             alert('Por favor ingrese un presupuesto valido');
         }
                  
         presupuesto = parseInt(prompt('Por favor ingrese el presupuesto que quiere gastar, ingrese "0" para salir: '));
     }
     alert('Hasta luego');
 }
 motoDisponible (); 


