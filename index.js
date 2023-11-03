// Para guardar los datos en el localStorage
const localStorageKey = 'fechaHoras';

// Verificar si existe un elemento en el localStorage
if (localStorage.getItem(localStorageKey) === null) {
    // Realizar el fetch para obtener los datos
fetch("https://bypass-cors-beta.vercel.app/?url=https://api.preciodelaluz.org/v1/prices/all?zone=PCB")
  .then((res) => res.json())
  .then((data) => {
   
   
    // Guarda los datos en el localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(data));
   })
   .catch(error => {
       console.error('Error al obtener los datos:', error);
   });
}
let objeto = {
   precio: 0,
   fecha: '03-11-2023'
  };
  
  // Guardar objeto en el localstorage
  localStorage.setItem('fechaHora', JSON.stringify(objeto));

// Obtén los datos del localStorage
const data = JSON.parse(localStorage.getItem(localStorageKey));
console.log('Datos obtenidos:', data);

    const precios = {
      "00-01": {
        date: "03-11-2023",
        hour: "00-01",
        "is-cheap": true,
        "is-under-avg": true,
        market: "PVPC",
        price: 34.17,
        units: "€/MWh",
      },
      "01-02": {
        date: "03-11-2023",
        hour: "01-02",
        "is-cheap": true,
        "is-under-avg": true,
        market: "PVPC",
        price: 33.51,
        units: "€/MWh",
      },
      "02-03": {
        date: "03-11-2023",
        hour: "02-03",
        "is-cheap": true,
        "is-under-avg": true,
        market: "PVPC",
        price: 33.54,
        units: "€/MWh",
      },
      "03-04": {
        date: "03-11-2023",
        hour: "03-04",
        "is-cheap": true,
        "is-under-avg": true,
        market: "PVPC",
        price: 35.69,
        units: "€/MWh",
      },
      "04-05": {
        date: "03-11-2023",
        hour: "04-05",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 35.76,
        units: "€/MWh",
      },
      "05-06": {
        date: "03-11-2023",
        hour: "05-06",
        "is-cheap": true,
        "is-under-avg": true,
        market: "PVPC",
        price: 35.05,
        units: "€/MWh",
      },
      "06-07": {
        date: "03-11-2023",
        hour: "06-07",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 36.73,
        units: "€/MWh",
      },
      "07-08": {
        date: "03-11-2023",
        hour: "07-08",
        "is-cheap": true,
        "is-under-avg": true,
        market: "PVPC",
        price: 28.7,
        units: "€/MWh",
      },
      "08-09": {
        date: "03-11-2023",
        hour: "08-09",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 50.27,
        units: "€/MWh",
      },
      "09-10": {
        date: "03-11-2023",
        hour: "09-10",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 51.32,
        units: "€/MWh",
      },
      "10-11": {
        date: "03-11-2023",
        hour: "10-11",
        "is-cheap": false,
        "is-under-avg": false,
        market: "PVPC",
        price: 97.06,
        units: "€/MWh",
      },
      "11-12": {
        date: "03-11-2023",
        hour: "11-12",
        "is-cheap": false,
        "is-under-avg": false,
        market: "PVPC",
        price: 96.26,
        units: "€/MWh",
      },
      "12-13": {
        date: "03-11-2023",
        hour: "12-13",
        "is-cheap": false,
        "is-under-avg": false,
        market: "PVPC",
        price: 95.37,
        units: "€/MWh",
      },
      "13-14": {
        date: "03-11-2023",
        hour: "13-14",
        "is-cheap": false,
        "is-under-avg": false,
        market: "PVPC",
        price: 96.55,
        units: "€/MWh",
      },
      "14-15": {
        date: "03-11-2023",
        hour: "14-15",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 51.03,
        units: "€/MWh",
      },
      "15-16": {
        date: "03-11-2023",
        hour: "15-16",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 52.51,
        units: "€/MWh",
      },
      "16-17": {
        date: "03-11-2023",
        hour: "16-17",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 52.91,
        units: "€/MWh",
      },
      "17-18": {
        date: "03-11-2023",
        hour: "17-18",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 60.43,
        units: "€/MWh",
      },
      "18-19": {
        date: "03-11-2023",
        hour: "18-19",
        "is-cheap": false,
        "is-under-avg": false,
        market: "PVPC",
        price: 104.17,
        units: "€/MWh",
      },
      "19-20": {
        date: "03-11-2023",
        hour: "19-20",
        "is-cheap": false,
        "is-under-avg": false,
        market: "PVPC",
        price: 104.55,
        units: "€/MWh",
      },
      "20-21": {
        date: "03-11-2023",
        hour: "20-21",
        "is-cheap": false,
        "is-under-avg": false,
        market: "PVPC",
        price: 107.67,
        units: "€/MWh",
      },
      "21-22": {
        date: "03-11-2023",
        hour: "21-22",
        "is-cheap": false,
        "is-under-avg": false,
        market: "PVPC",
        price: 105.3,
        units: "€/MWh",
      },
      "22-23": {
        date: "03-11-2023",
        hour: "22-23",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 60.68,
        units: "€/MWh",
      },
      "23-24": {
        date: "03-11-2023",
        hour: "23-24",
        "is-cheap": false,
        "is-under-avg": true,
        market: "PVPC",
        price: 56.28,
        units: "€/MWh",
      },
    };

let mejorHora = 0;
let peorHora = 0;
let mejorPrecio = Infinity;
let peorPrecio = -Infinity;

for (const hora in precios) {
  const precio = precios[hora].price;

  if (precio < mejorPrecio) {
    mejorPrecio = precio;
    mejorHora = hora;
  }

  if (precio > peorPrecio) {
    peorPrecio = precio;
    peorHora = hora;
  }
}

console.log("La mejor hora del día para usar tus electrodomésticos es a las:", mejorHora, "hs. Siendo el precio de:", mejorPrecio, "€/MWh.");
console.log("La peor hora del día para usar tus electrodomésticos es a las:", peorHora, "hs. Siendo el precio de:", peorPrecio, "€/MWh.");

// Los siguientes datos son 
    const electrodomesticos = {
        nevera: 0.00195,
        vitroceramica: 0.02,
        lavavajillas: 0.0011,
        lavadora: 0.0062,
        televisor: 0.0018,
        ordenador: 0.003  
      };

    const fetchElectrodomesticosPrices = async () => {
      try {
        const horaActual = new Date().getHours();
        const horaActualStr = horaActual.toString().padStart(2, '0') + '-' + (horaActual + 1).toString().padStart(2, '0');

        if (precios.hasOwnProperty(horaActualStr)) {
          const precioActual = precios[horaActualStr].price;
          console.log(`Precio de la luz en la hora actual: ${precioActual} €/MWh`);
           
           const sumaConsumo = Object.values(electrodomesticos).reduce((total, consumo) => total + consumo, 0);
           
           console.log('Suma del consumo de todos los electrodomesticos:', sumaConsumo.toFixed(2), 'W/H');
           let total = precioActual * sumaConsumo;
           console.log(('Suma del consumo total de los electrodomesticos') , total.toFixed(2), "€");


          // Calcular el costo de cada electrodoméstico
          for (const electrodomestico in electrodomesticos) {
            const consumoWatt = electrodomesticos[electrodomestico];
            const costoElectrodomestico = (consumoWatt / 1000) * precioActual; // Convierte Watt a kW y calcula el costo
            console.log(`Costo de ${electrodomestico} por hora: ${costoElectrodomestico.toFixed(4)} €`);
          }
        } else {
          console.error("No se encontraron datos para la hora actual.");
        }
      } catch (error) {
        console.error("Error al obtener los precios:", error);
      }
    };

    fetchElectrodomesticosPrices()