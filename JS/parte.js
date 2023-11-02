function getBestAndWorstHour(arr) {
    // Ordenar los registros de horas
    arr.sort(function(a, b) {
       return a - b;
    });
   
    // Calcular la mejor hora y la peor hora
    let bestHour = arr[0];
    let worstHour = arr[arr.length - 1];
   
    return {
       bestHour: bestHour,
       worstHour: worstHour
    };
   }
   
   let horas = [3, 2, 10, 11, 12, 4, 5, 16, 17, 18, 9];
   let result = getBestAndWorstHour(horas);
   console.log("Mejor hora: " + result.bestHour);
   console.log("Peor hora: " + result.worstHour); 

   // Suma de todos los electrodomesticos
   const sumaConsumo = Object.values(electrodomesticos).reduce((total, consumo) => total + consumo, 0);
           
           console.log('Suma del consumo de todos los electrodomesticos:', sumaConsumo, 'W/H');
           let total = precioActual * sumaConsumo;
           console.log(('Suma del consumo total de los electrodomesticos') , total);
