fetch("https://bypass-cors-beta.vercel.app/?url=https://api.preciodelaluz.org/v1/prices/all?zone=PCB")
  .then((res) => res.json())
  .then((data) => {
    const precios = data.data;

    const electrodomesticos = {
        nevera: 19.5,         // Supongamos que una nevera consume 100W por hora
        vitroceramica: 13, // Supongamos que una vitrocerámica consume 2000W por hora
        lavavajillas: 11,  // Supongamos que un lavavajillas consume 1500W por hora
        lavadora: 62,       // Supongamos que una lavadora consume 800W por hora
        televisor: 18,     // Supongamos que un televisor consume 200W por hora
        ordenador: 30  
      };

    const fetchElectrodomesticosPrices = async () => {
      try {
        const horaActual = new Date().getHours();
        const horaActualStr = horaActual.toString().padStart(2, '0') + '-' + (horaActual + 1).toString().padStart(2, '0');

        if (precios.hasOwnProperty(horaActualStr)) {
          const precioActual = precios[horaActualStr].price;
          console.log(`Precio de la luz en la hora actual: ${precioActual} €/MWh`);

        //   // Define el consumo de vatios por hora de cada electrodoméstico
        //   const electrodomesticos = {
        //     nevera: 19.5,         // Supongamos que una nevera consume 100W por hora
        //     vitroceramica: 13, // Supongamos que una vitrocerámica consume 2000W por hora
        //     lavavajillas: 11,  // Supongamos que un lavavajillas consume 1500W por hora
        //     lavadora: 62,       // Supongamos que una lavadora consume 800W por hora
        //     televisor: 18,     // Supongamos que un televisor consume 200W por hora
        //     ordenador: 30       // Supongamos que un ordenador consume 300W por hora
        //   };

          // Calcular el costo de cada electrodoméstico
          for (const electrodomestico in electrodomesticos) {
            const consumoWatt = electrodomesticos[electrodomestico];
            const costoElectrodomestico = (consumoWatt / 1000) * precioActual; // Convierte Watt a kW y calcula el costo
            console.log(`Costo de ${electrodomestico} por hora: ${costoElectrodomestico} €`);
          }
        } else {
          console.error("No se encontraron datos para la hora actual.");
        }
      } catch (error) {
        console.error("Error al obtener los precios:", error);
      }
    };

    fetchElectrodomesticosPrices()

    console.log(electrodomesticos)

    // let costoTotalElectrodomesticos = 0
    //     for (let electrodomestico in electrodomesticos) {
    //         costoTotalElectrodomesticos += electrodomesticos[electrodomestico];
    //     console.log(costoTotalElectrodomesticos)
    //   }
  });