/*Estimados apelaremos a la comprensión lectora del usuario solo tengo mi dni regitrado*/

let savedDNI = "28656220";
let costo = 1400;

class Reserva {
  constructor(dia, mes, anio, hora, duracion, id) {
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
    this.duracion = duracion;
    this.hora = hora;
    this.id = id;
  }

  asignarId(array) {
    this.id = array.length;
  }
}

const reservas = [
  new Reserva(25, 11, 2022, 13, 2, 1),
  new Reserva(26, 11, 2022, 18, 3, 2),
];

function login() {
  let ingresar = false;

  for (let i = 1; i >= 0; i--) {
    let userDNI = prompt("Para comenzar ingresá tu DNI:");
    if (userDNI == savedDNI) {
      alert("Bienvenido/a ahora podrás gestionar tu reserva");
      ingresar = true;
      break;
    } else {
      alert(
        "Tu DNI no se encuentra en nuestro sistema, debés registrarte para comenzar"
      );
    }
  }

  return ingresar;
}

if (login()) {
  let opcion = prompt(
    "Elige una opción para comenzar: \n1- Reservar tu cancha. \n2 - Consultar todas tu reservas  \nPresioná S para finalizar."
  );

  while (opcion != "S" && opcion != "s") {
    switch (opcion) {
      case "1":
        /*CREA LA RESERVA*/
        alert(
          "A continuación le solicitaremos los datos para gestionar su reserva"
        );
        let continuar = true;
        while (continuar) {
          let nueva = prompt(
            "ingresa los datos solicitados para realizar tu reserva: dia, mes, año, hora de la reserva de 9 a 21hs , cantidad de horas a usar separados por una barra diagonal (/). Ingresa X para finalizar"
          );
          if (nueva.toUpperCase() == "X") {
            continuar = false;
            break;
          }
          const datos = nueva.split("/");
          console.log(datos);

          const reserva = new Reserva(
            datos[0],
            datos[1],
            datos[2],
            datos[3],
            datos[4],
            datos[5]
          );

          reservas.push(reserva);
          reserva.asignarId(reservas);
          console.log(reservas);

          alert(
            "Su reserva se realizó con exito para el día " +
              datos[0] +
              "/ " +
              datos[1] +
              "/" +
              datos[2] +
              " desde las " +
              datos[3] +
              " hs con una permanencia de " +
              datos[4] +
              " horas" +
              " y tendrá un costo de $" +
              costo * datos[4]
          );
        }

        break;
      case "2":
        /*CONSULTA TODAS LAS RESERVAS PARA ESE USUARIO*/

        {
          alert(
            "A continuación le mostramos todas las reservas para el usuario con DNI: " +
              savedDNI +
              "\n\n"  + (MostrarReservas(reservas)));

        }
        break;

      default:
        alert("Elegiste una opción inválida");
        break;
    }

    opcion = prompt(
      "Elige una opción para comenzar: \n1- Reservar tu cancha. \n2 - Consultar todas tu reservas  \nPresioná S para finalizar."
    );
  }
  alert(
    "Gracias por usar el gestor de reservas, esperamos volver a verte pronto"
  );
}

function MostrarReservas(array) {
  let infoReservas = '';
  array.forEach((elemento) => {
    infoReservas +=
      elemento.dia +
      '/' +
      elemento.mes +
      '/' +
      elemento.anio +
      ' a las ' +
      elemento.hora +
      ' hs y con una duración del alquiler de ' +
      elemento.duracion + ' hora/s'+
      '\n\n';
  });

  return infoReservas;
}
