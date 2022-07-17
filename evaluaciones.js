const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
 {
    pregunta: "1. ¿En qué año se creó el futbol?",
    respuestas: {
    A: "1876",
    B: "1863",
	  C: "1982", 
    
    },
    respuestaCorrecta: "B",
  },
  {
    pregunta: "2. ¿Cuál fue el primer nombre del futbol? ",
    respuestas: {
     A: "Futbol ingles",
     B: "Fut ball",
     C: "Balompié",

    },
    respuestaCorrecta: "C",
  },
  {
    pregunta: "3.	¿Dónde se originó el futbol?",
    respuestas: {
      A: "Inglaterra",
      B: "Estados Unidos",
      C: "España",  
      
    },
    respuestaCorrecta: "A",
  },
  {
    pregunta: "4. ¿Cuál fue la primera asociación del fútbol?",
    respuestas: {
      A: "Federación internacional de fútbol asociación (FIFA)",
      B: "Football Asociación (FA)",
      C: "Confederación de fútbol de la asociación del Norte de centro América y el Caribe (concacaf)",
    },
    respuestaCorrecta: "B",
  },
  {
    pregunta: "5. ¿Qué tipo de objeto se utiliza para jugar en el futbol?",
    respuestas: {
      A: "Una pelota de básquet. ",
      B: "Una pelota.",
      C: "Una pelota de voleibol",

    },
    respuestaCorrecta: "B",
  },
  {
    pregunta: "6.	¿En qué año se funda la FIFA?",
    respuestas: {
       A: "1980",
       B: "2000",
       C: "1904",
       
    },
    respuestaCorrecta: "C",
  },
  {
    pregunta: "7.	¿Que no está permitido en el futbol?",
    respuestas: {
       A: "	Tocar el balón intencionalmente con la mano.", 
       B: "Escupir al rival",
       C: "Saltar sobre el oponente",
       D: "Todas son correctas."
    },
    respuestaCorrecta: "D",
  },
  {
    pregunta: " 8.	¿Qué puedo hacer al momento de recibir la pelota?",
    respuestas: {
      A: "Pensar cuál sería la mejor decisión y pasar al compañero.",
      B: "Pasar al oponente.",
      C: "Patear sin pensar.",
    },

    respuestaCorrecta: "A",  
    },
    
    { 
     
     pregunta: "9.	¿Qué acción puede generar una falta?",
        respuestas: {     
     A: "Patear o intentar patear al rival.",
     B: "Todas las anteriores",
     C: "Empujar al rival",
    },

    respuestaCorrecta: "B",  
    },
    
  {
  pregunta: "10. ¿Cómo chutar el balón?",
    respuestas: {
	  A: "Tomarlo con la mano y patear.",
    B: "Con la cabeza.",
    C: "Con el pie", 
    },

    respuestaCorrecta: "C",  
    },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<br/><label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              <br/></label>`
      );
    }

    preguntasYrespuestas.push(
      `<br/><div class="cuestion">${preguntaActual.pregunta}</div>
          <br/><div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "green";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "Preguntas acertadas " +
    respuestasCorrectas +
    " de un total de " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
