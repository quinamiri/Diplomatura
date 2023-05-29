let unValorMax = 40;
let unValorMin = -20;
let numerodipli = numeroAleatorio(unValorMax, unValorMin);
let esPar = esNumeroPar(numerodipli);
let mayorQue = esNumeroMayorQueCero(numerodipli);
let esMultiploDeTres = esNumeroMultiploDeTres(numerodipli);
let juegoTerminado = false; // Variable para controlar el estado del juego

// Biblioteca de funciones
function numeroAleatorio(unValorMax, unValorMin) {
  return Math.floor(Math.random() * (unValorMax - unValorMin + 1) + unValorMin);
}

function seleccionarRangoNumerico() {
  let valorMin = Number(prompt("Ingresa el valor mínimo del rango"));
  let valorMax = Number(prompt("Ingresa el valor máximo del rango"));

  // Verificar que los valores sean válidos
  if (isNaN(valorMin) || isNaN(valorMax) || valorMin >= valorMax) {
    alert(
      "Los valores ingresados no son válidos. Se utilizará el rango predeterminado."
    );
    return;
  }

  unValorMin = valorMin;
  unValorMax = valorMax;
  numerodipli = numeroAleatorio(unValorMax, unValorMin);
  esPar = esNumeroPar(numerodipli);
  mayorQue = esNumeroMayorQueCero(numerodipli);
  esMultiploDeTres = esNumeroMultiploDeTres(numerodipli);

  alert(
    `El rango de números se ha actualizado a ${unValorMin} - ${unValorMax}.`
  );
} // Nueva función: Selecciona el rango de números

function pistaCambiada(unValorMin, unValorMax) {
  if (unValorMin >= 0 && unValorMax >= 0) {
    mayorQue = esNumeroMultiploDeCinco(numerodipli);
    alert(`Una pista: el número de Dipli es multiplo de 5: ${mayorQue} 👀`);
  } else {
    mayorQue = esNumeroMayorQueCero(numerodipli);
    alert(`Una pista: el número de Dipli es mayor a cero: ${mayorQue} 👀`);
  }
} //Nueva funcion: Cambia la pista segun el rango

function reglas() {
  alert(`✔ El juego consiste en adivinar el número que imaginó Dipli realizando diferentes intentos.
✔ Los números serán del rango que ustedes propongan.
✔ Si logran acertar, ganarán la partida... de lo contrario, ganará Dipli 🤖
🎉 ¿Listos? ¡Vamos a jugar! 🎉`);
} // Nueva función: Se incorporaron las reglas a una función.

function mensajeDeAliento(nombreJugador) {
  let mensajeActual;

  switch (Math.floor(Math.random() * 5)) {
    case 0:
      mensajeActual = `No te preocupes ${nombreJugador}, lo que pasa es que Dipli 🤖 es muy bueno eligiendo números 😊`;
      break;
    case 1:
      mensajeActual = `Ánimo, ${nombreJugador}, no te desanimes 😉`;
      break;
    case 2:
      mensajeActual = `No dejes que te afecte, ${nombreJugador}. Dipli 🤖 es conocido por su destreza al elegir números`;
      break;
    case 3:
      mensajeActual = `Relájate, ${nombreJugador}. Dipli 🤖 es realmente experto en elegir números, es asombroso cómo siempre acierta. No es de extrañar 😊`;
      break;
    case 4:
      mensajeActual = `${nombreJugador}, no te preocupes por eso. Dipli 🤖 tiene una habilidad innata para seleccionar números, es difícil superar su precisión 😊`;
      break;
    default:
      mensajeActual = "No hay mensaje de aliento disponible";
      break;
  }

  return mensajeActual;
} // Nueva función: Selecciona un mensaje de aliento al azar.

function oportunidad(nombreJugador) {
  if (juegoTerminado) {
    return; // Salir de la función si el juego ya ha terminado
  }

  let numero = Number(prompt(nombreJugador + ", ingresa un número"));
  let ganador = esGanador(numerodipli, numero);
  let diferencia = calcularDiferencias(numerodipli, numero);
  let mensajeAliento = mensajeDeAliento(nombreJugador);

  if (ganador) {
    alert(
      `¡Felicidades, ${nombreJugador}! Adivinaste el número. ¡Ganaste el juego!`
    );
    juegoTerminado = true; // Actualizar el estado del juego a terminado
    return;
  } else {
    alert(mensajeAliento);
    return diferencia;
  }
} //Nuevas funcionalidades

function esNumeroPar(numerodipli) {
  return numerodipli % 2 === 0;
}

function esNumeroMultiploDeCinco(numerodipli) {
  return numerodipli % 5 === 0;
} //Nueva funcion: dice si el numero elegido por dipli es multiplo de 5.

function esNumeroMayorQueCero(numerodipli) {
  return numerodipli > 0;
}

function esNumeroMultiploDeTres(numerodipli) {
  return numerodipli % 3 === 0;
}

function calcularDiferencias(numero1, numero2) {
  return Math.abs(numero1 - numero2);
}

function esGanador(numerodipli, numero) {
  return numerodipli === numero;
}

function obtenerPreguntaAzar() {
  const preguntaAzar = Math.floor(Math.random() * 10); // Número de preguntas: 10
  let preguntaActual;

  switch (preguntaAzar) {
    case 0:
      preguntaActual = {
        pregunta: "¿Qué significa HyperText Markup Language?",
        respuesta: "HTML"
      };
      break;
    case 1:
      preguntaActual = {
        pregunta: "¿Qué es JavaScript?",
        respuesta: "Lenguaje de programación"
      };
      break;
    case 2:
      preguntaActual = {
        pregunta: "¿Qué significa Cascading Style Sheets?",
        respuesta: "CSS"
      };
      break;
    case 3:
      preguntaActual = {
        pregunta: "¿En qué año se fundó Google?",
        respuesta: "1998"
      };
      break;
    case 4:
      preguntaActual = {
        pregunta: "¿Cuál es el mejor equipo del futbol argentino?",
        respuesta: "San Lorenzo"
      };
      break;
    case 5:
      preguntaActual = {
        pregunta: "¿En qué año se creó JavaScript?",
        respuesta: "1995"
      };
      break;
    case 6:
      preguntaActual = {
        pregunta: "¿Quién es el mejor robot?",
        respuesta: "Dipli"
      };
      break;
    case 7:
      preguntaActual = {
        pregunta: "¿Cuál es la capital de Francia?",
        respuesta: "Paris"
      };
      break;
    case 8:
      preguntaActual = {
        pregunta:
          "¿Cuál es el operador utilizado para concatenar cadenas en JavaScript?",
        respuesta: "+"
      };
      break;
    case 9:
      preguntaActual = {
        pregunta:
          "¿Cuál es el resultado de la expresión 5 + '2' en JavaScript?",
        respuesta: "52"
      };
      break;
  }

  return preguntaActual;
} //Nueva función: obtiene una pregunta al azar

function preguntaAleatoria() {
  const preguntaActual = obtenerPreguntaAzar();

  const respuestaUsuario = prompt(preguntaActual.pregunta);
  const respuestaCorrecta = preguntaActual.respuesta.toLowerCase();

  if (respuestaUsuario === respuestaCorrecta) {
    return respuestaCorrecta;
  } else {
    alert(`La respuesta correcta era ✔${preguntaActual.respuesta}`);
  }

  return "";
} //Nuevas función: compara la respuesta del jugador con la respuesta

function bonus(nombreJugador) {
  let numeroRandom = Math.random() < 0.5; // 50% de probabilidad
  alert(`✨¿Ganaste un Bonus, ${nombreJugador}?✨ ${numeroRandom} 😄`);

  if (numeroRandom) {
    let respuestaCorrecta = preguntaAleatoria();

    if (respuestaCorrecta !== "") {
      alert(
        `¡Respuesta correcta, ${nombreJugador}! Ganaste una oportunidad adicional para adivinar el número.`
      );
      let bonusOportunidad1 = Number(
        prompt(`${nombreJugador}, ingresa un número`)
      );
      let ganadorOportunidad1 = esGanador(numerodipli, bonusOportunidad1);
      let diferenciaBonus = calcularDiferencias(numerodipli, bonusOportunidad1);
      alert(`¿Ganaste, ${nombreJugador}? ${ganadorOportunidad1} 😊`);
      return diferenciaBonus;
    } else {
      alert(
        `Respuesta incorrecta, ${nombreJugador}. Pierdes la oportunidad de ingresar un número adicional. Se asignará el valor 100 automáticamente.`
      );
      return 100; // Valor predeterminado si no se responde correctamente la pregunta
    }
  } else {
    alert(
      "No ganaste el Bonus, por lo tanto, no puedes ingresar un número adicional."
    );
    return 100; // Valor predeterminado si no se ganó el bonus
  }
} //Nuevas funcionalidades

function mostrarResultados(dif1, dif2, dif3, dif4, difBonus, jugador) {
  alert(
    `Que pena, ${jugador}, veamos qué tan lejos estuviste... \n` +
      `✔ Dipli eligió el número: ${numerodipli}\n` +
      `✔ Fallaste la primera vez por: ${dif1}\n` +
      `✔ Y la segunda vez fallaste por: ${dif2}\n` +
      `✔ Y la tercera vez fallaste por: ${dif3}\n` +
      `✔ Y en la última oportunidad fallaste por: ${dif4}\n` +
      `✔ En el Bonus fallaste por: ${difBonus}`
  );
}

// Programa principal
alert(
  "¡Bienvenido al juego de Dipli 2.0! 🎉\n¡En esta oportunidad se implementó la opción multijugador!"
);

const nombreUsuario1 = prompt("Jugador 1, por favor, escribe tu nombre");
const nombreUsuario2 = prompt("Jugador 2, por favor, escribe tu nombre");

seleccionarRangoNumerico(); //Se llaman a las nuevas funiones
reglas();

// 1ra oportunidad para jugador 1
const diferencia = oportunidad(nombreUsuario1);

if (juegoTerminado) {
  // Salir del programa si el juego ya ha terminado
  alert("El juego ha terminado. ¡Hasta luego!");
} else {
  alert(`Ahora es el turno de ${nombreUsuario2}.`);

  // 1ra oportunidad para jugador 2
  const diferencia12 = oportunidad(nombreUsuario2);

  if (juegoTerminado) {
    // Salir del programa si el juego ya ha terminado
    alert("El juego ha terminado. ¡Hasta luego!");
  } else {
    alert("Dipli decidió darles más oportunidades...");
    pistaCambiada(unValorMin, unValorMax); // Aca si el rango elegido es mayor a cero toma una pista sino toma la otra

    // 2da oportunidad para jugador 1
    const diferencia1 = oportunidad(nombreUsuario1);

    if (juegoTerminado) {
      // Salir del programa si el juego ya ha terminado
      alert("El juego ha terminado. ¡Hasta luego!");
    } else {
      alert(`Ahora le toca a ${nombreUsuario2}.`);

      // 2da oportunidad para jugador 2
      const diferencia22 = oportunidad(nombreUsuario2);

      if (juegoTerminado) {
        // Salir del programa si el juego ya ha terminado
        alert("El juego ha terminado. ¡Hasta luego!");
      } else {
        alert(
          "Tranquilos, Dipli es bueno y les sigue dando oportunidades y pistas.\n" +
            `El número de Dipli es par: ${esPar} 😉`
        );

        // 3ra oportunidad para jugador 1
        const diferencia2 = oportunidad(nombreUsuario1);

        if (juegoTerminado) {
          // Salir del programa si el juego ya ha terminado
          alert("El juego ha terminado. ¡Hasta luego!");
        } else {
          alert("Uff, estuviste cerca. Veamos si tu contrincante acierta...");

          // 3ra oportunidad para jugador 2
          const diferencia32 = oportunidad(nombreUsuario2);

          if (juegoTerminado) {
            // Salir del programa si el juego ya ha terminado
            alert("El juego ha terminado. ¡Hasta luego!");
          } else {
            alert(
              "Dipli les da otra pista:\n" +
                `El número de Dipli es múltiplo de 3: ${esMultiploDeTres} 👀`
            );

            // 4ta oportunidad para el jugador 1
            const diferencia3 = oportunidad(nombreUsuario1);

            if (juegoTerminado) {
              // Salir del programa si el juego ya ha terminado
              alert("El juego ha terminado. ¡Hasta luego!");
            } else {
              // 4ta oportunidad para el jugador 2
              const diferencia42 = oportunidad(nombreUsuario2);

              if (juegoTerminado) {
                // Salir del programa si el juego ya ha terminado
                alert("El juego ha terminado. ¡Hasta luego!");
              } else {
                alert("Veamos si ganaron una oportunidad Bonus.");

                // Bonus para el jugador 1
                const diferenciaBonus = bonus(nombreUsuario1);

                if (juegoTerminado) {
                  // Salir del programa si el juego ya ha terminado
                  alert("El juego ha terminado. ¡Hasta luego!");
                } else {
                  // Bonus para el jugador 2
                  const diferenciaBonus2 = bonus(nombreUsuario2);

                  mostrarResultados(
                    diferencia,
                    diferencia1,
                    diferencia2,
                    diferencia3,
                    diferenciaBonus,
                    nombreUsuario1
                  );
                  mostrarResultados(
                    diferencia12,
                    diferencia22,
                    diferencia32,
                    diferencia42,
                    diferenciaBonus2,
                    nombreUsuario2
                  );

                  alert("🎶 ¡Vamos, intenten ganarle a Dipli otra vez! 🎶");
                }
              }
            }
          }
        }
      }
    }
  }
}
