

const Carreras_homeclub = document.querySelector(".carreras_homeclub");
const Carreras_visitante = document.querySelector(".carreras_visitante");
const triangle = document.getElementById("triangle");
const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const Hombre_primera = document.getElementById("hombre_primera");
const Hombre_segunda = document.getElementById("hombre_segunda");
const Hombre_tercera = document.getElementById("hombre_tercera");
const strikes = document.getElementById("strikes");
const fondoLogo1 = document.getElementById("fondoLogo1");
const fondoLogo2 = document.getElementById("fondoLogo2");
const boxscore1 = document.getElementById("boxscore1");
const visitante = document.getElementById("visitante");
const Inning = document.getElementById("inning");
const outs1 = document.getElementById("outs1");
const outs2 = document.getElementById("outs2");
const Ave = document.getElementById("ave");
const numeroLanzamiento = document.getElementById("numeroLanzamiento");


const url1 = new URL("https://bss.qualitybeisbol.com/api/boxscore");
const url2 = new URL("https://bss.qualitybeisbol.com/api/diario-estadio-era");

function runTemplateUpdate() {


  

    function ajustarCadena(cadena) {
        cadena = cadena.replace(/\+/g, ' ');
        cadena = cadena.replace(/\+/g, ' ');
        return cadena;
      }
      
      const expresion = htmlDecode(e('f0').innerText);
      const cadenaAjustada = ajustarCadena(expresion);
    

    const params = {
        id_juego:  `${cadenaAjustada}`,
    };
    
    
    Object.keys(params).forEach(key => {
        url1.searchParams.append(key, params[key]);
        url2.searchParams.append(key, params[key]);
    });
    
    const headers = {
        "Authorization": "Bearer 45eadc85b650776e48bdf666120d0fbc",
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    
    
    const request1 = fetch(url1, {
        method: "GET",
        headers,
    
    
    }).then(response => response.json());
    
    const request2 = fetch(url2, {
        method: "GET",
        headers,
    }).then(response => response.json());
    
    let animationExecuted = false; // Variable para controlar si la animación ya se ejecutó
    
    function updateGameData() {
        function fetchData() {
            fetch(url1, {
                method: "GET",
                headers,
            })
                .then(response => response.json())
                .then(result1 => {
                    if (result1) {
                        let {
                            carreras_homeclub,
                            carreras_visitante,
                            hombre_primera,
                            hombre_segunda,
                            hombre_tercera,
                            id_bateador_homeclub,
                            id_bateador_visitante,
                            id_lanzador_homeclub,
                            id_lanzador_visitante,
                            id_equipo_homeclub,
                            id_equipo_visitante,
                            inning,
                            outs,
                            parte,
                            secuencia_lanzamientos,
                            lanzador_homeclub_bolas,
                            lanzador_homeclub_foul,
                            lanzador_homeclub_strikes,
                            lanzador_visitante_bolas,
                            lanzador_visitante_foul,
                            lanzador_visitante_strikes
                        } = result1.data.juego;


            
                        let homeclub_lanzadores = result1.data.boxscore.homeclub.lanzadores;
                        let homeclub_peloteros =result1.data.boxscore.homeclub.peloteros;
                        let peloteros_visitante = result1.data.boxscore.visitante.peloteros;
                        let lanzadores_visitante = result1.data.boxscore.visitante.lanzadores;
    
    
                        
    
                        if (parte === 0) {
                            const totalStrikesBolasFoul = lanzador_homeclub_strikes + lanzador_homeclub_bolas + lanzador_homeclub_foul;
                            numeroLanzamiento.innerText =   "L: " + totalStrikesBolasFoul;
                            
                                        //data / boxscore / homeclub /lanzador 
                            homeclub_lanzadores.forEach(element => {
                                if(element.id_picher == id_lanzador_homeclub){
                                   let nombre = element.nombre;
                                   let apellido = element.apellido;
                                   const inicial = nombre.charAt(0);
                                   document.getElementById("f1_gfx").innerText = inicial + "." + " " + apellido;
                                  
                                }
                    
                               });
       
                                       //data / boxscore / visitante /visitante 
                               peloteros_visitante.forEach(element => {
                               if(element.id_pelotero == id_bateador_visitante){
                                   let nombres = element.nombre;
                                   Ave.innerText = element.AVE;
                                   let apellidos = element.apellido;
                                   const inicia = nombres.charAt(0);
                                   document.getElementById("f0_gfx").innerText = inicia + "." + " " + apellidos;
       
                               }
       
                          });
                         
                        } if (parte === 1){
                            const totalStrikesBolasFoul = lanzador_visitante_bolas + lanzador_visitante_foul + lanzador_visitante_strikes;
                            numeroLanzamiento.innerText =   "L: " + totalStrikesBolasFoul;
                           
    
                        
                            //data / boxscore / homeclub /lanzador 
                            homeclub_peloteros.forEach(element => {
                             if(element.id_pelotero == id_bateador_homeclub){
                                let nombre = element.nombre;
                                let apellido = element.apellido;
                                const inicia = nombre.charAt(0);
                                document.getElementById("f0_gfx").innerText = inicia + "." + " " + apellido;
                               
                             }
                 
                            });
    
                                    //data / boxscore / visitante /visitante 
                            lanzadores_visitante.forEach(element => {
                            if(element.id_picher == id_lanzador_visitante){
                                let nombres = element.nombre;
                                Ave.innerText = element.AVE;
                                let apellido = element.apellido;
                                const inicia = nombres.charAt(0);
                                document.getElementById("f1_gfx").innerText = inicia + "." + " " + apellido;
                               
    
                            }
                       });
          
    
                        }
    
    
                        let totalS = 0;
                        let totalB = 0;
    
                        for (let i = 0; i < secuencia_lanzamientos.length; i++) {
                            if (secuencia_lanzamientos[i] === 'S') {
                                totalS++;
                            } else if (secuencia_lanzamientos[i] === 'B') {
                                totalB++;
                            }
                        }
    
                       
                            strikes.innerText = `${totalB}   -   ${totalS}`;
    
                   
    
    
    
                    let colorDebase = "rgb(255, 255, 255)";
                    if (hombre_primera === 1 ){
                           Hombre_primera.style.backgroundColor = colorDebase;vvvv
    
                    }
                     
                    if (hombre_segunda === 1){
                        Hombre_segunda.style.backgroundColor = colorDebase;
    
                    }
                       
                    if (hombre_tercera === 1){
                         Hombre_tercera.style.backgroundColor = colorDebase;
    
                    }
                       
                    carreras_homeclub  ? carreras_homeclub  :carreras_homeclub=  '00' 
                    carreras_visitante ? carreras_visitante  : carreras_visitante=  '00'
    
                     Carreras_homeclub.innerText = carreras_homeclub;
                     Carreras_visitante.innerText = carreras_visitante;
                     Id_equipo_homeclub.src = array_logo[id_equipo_homeclub].img_url;
                     Id_equipo_visitante.src = array_logo[id_equipo_visitante].img_url;
                     
                     inning ? inning : inning = "0";
                     Inning.innerText = inning;
                     parte == 0 ? triangle.classList.add("down") : triangle.classList.add("up");
    
                   
    
                     if(outs === 1) {outs2.classList.add("activate")}
                       else if(outs === 2){
                        outs1.classList.add("activate");outs2.classList.add("activate")
                       }

                        if (!animationExecuted) {
                            runAnimationIN();
                            animationExecuted = true;
                        }
                    } else {
                        console.error("Error fetching data:", response.statusText);
                    }
                })
                .catch(error => {
                    console.error("Error en una de las solicitudes:", error);
                });
        }
    
        
        fetchData();
    
      
        const updateInterval = 10000; // 10 segundos
        setInterval(fetchData, updateInterval);
    }
    
    updateGameData();
}