const Carreras_homeclub = document.getElementById("carreras_homeclub");
const Carreras_visitante = document.getElementById("carreras_visitante");
const Hombre_primera = document.getElementById("hombre_primera");
const Hombre_segunda = document.getElementById("hombre_segunda");
const Hombre_tercera = document.getElementById("hombre_tercera");
const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const fondoLogo1 = document.getElementById("fondoLogo1");
const fondoLogo2 = document.getElementById("fondoLogo2");
const boxscore1 = document.getElementById("boxscore1");
const visitante = document.getElementById("visitante");
const Inning = document.getElementById("inning");
const Ave = document.getElementById("ave");
const numeroLanzamiento = document.getElementById("numeroLanzamiento");
const resul = false;

async function fetchData() {
  const apiUrl = "https://bss.qualitybeisbol.com/api/boxscore";
  const params = {
    id_juego: "22 3 7  7",
  };

  const url = new URL(apiUrl);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const headers = {
    Authorization: "Bearer 45eadc85b650776e48bdf666120d0fbc",
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    if (response.ok) {
      resul == true;
      const jsonData = await response.json();
      let {
        carreras_homeclub,
        carreras_visitante,
        hombre_primera,
        hombre_segunda,
        hombre_tercera,
        id_bateador_homeclub,
        id_bateador_visitante,
        id_equipo_homeclub,
        id_equipo_visitante,
        inning,
        outs,
        parte,
      } = jsonData.data.juego;


      Carreras_homeclub.innerText = carreras_homeclub;
      Carreras_visitante.innerText = carreras_visitante;
      Id_equipo_homeclub.src = array_logo[1].img_url;
      Id_equipo_visitante.src = array_logo[2].img_url



      function applyStyles(element, teamId) {
        const styles = teamStyles[teamId];
        if (styles) {
          styles.forEach((style) => {
            element.style[style.property] = style.value;
          });
        } else {
          console.log(`ID de equipo no reconocido: ${teamId}`);
        }
      }
      function applyStylesLodos(element, teamId) {
        const styles = teamStylesLogo[teamId];
        if (styles) {
          styles.forEach((style) => {
            element.style[style.property] = style.value;
          });
        } else {
          console.log(`ID de equipo no reconocido: ${teamId}`);
        }
      }

      applyStyles(boxscore1, id_equipo_homeclub);
      applyStyles(visitante, id_equipo_visitante);
      applyStylesLodos(fondoLogo1, id_equipo_homeclub);
      applyStylesLodos(fondoLogo2, id_equipo_visitante);
      if (outs == null) triangle.classList.add("up");

     

      inning  ? inning  : inning = "1";
        outs  ?  outs2.classList.add("activate") : outs2.classList.add("activate") ;
        Inning.innerText = inning;
        strikes.innerText = '2-3';
        parte ?  triangle.classList.add("up") : triangle.classList.add("up");


      let homeclub_lanzadores = jsonData.data.boxscore.homeclub.lanzadores;
      let peloteros_visitante = jsonData.data.boxscore.visitante.peloteros;

      peloteros_visitante.forEach((element) => {
        if (element.id_pelotero == 9837) {
          let nombre = element.nombre;
          Ave.innerText = element.AVE;
          let apellido = element.apellido;
          const inicial = nombre.charAt(0);
          document.getElementById("f1_gfx").innerText =inicial + "." + " " + apellido;
        }
      });

      homeclub_lanzadores.forEach((element) => {
        if (element.id_picher == 8651) {
          let nombre = element.nombre;
          let apellido = element.apellido;
          const inicial = nombre.charAt(0);
          document.getElementById("f0_gfx").innerText =inicial + "." + " " + apellido;
          numeroLanzamiento.innerText = 12 + "MPH";
        }
      });

      let colorDebase = "#ffff00" ;

      if (true) {
        Hombre_primera.style.backgroundColor = colorDebase;
      }
      if (hombre_segunda) Hombre_segunda.style.backgroundColor = colorDebase;
      if (hombre_tercera) {
        Hombre_tercera.style.backgroundColor =colorDebase;
      }

      
      runAnimationIN();
    } else {
      console.error("Error fetching data:", response.statusText);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }

  return resul;
}
fetchData();


