







const Carreras_homeclub = document.querySelector(".carreras_homeclub");
const Carreras_visitante = document.querySelector(".carreras_visitante");
const Id_equipo_homeclub = document.getElementById("id_equipo_homeclub");
const Id_equipo_visitante = document.getElementById("id_equipo_visitante");
const cont = document.getElementById("cont");
const Inning = document.getElementById("inning");
const Hombre_primera = document.getElementById("hombre_primera");
const Hombre_segunda = document.getElementById("hombre_segunda");
const Hombre_tercera = document.getElementById("hombre_tercera");


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

                               
                     inning ? inning : inning = "0";
                     Inning.innerText = inning;
                   


                        
                    const barraEquiposElement = document.getElementById('barras');


                    // Establece la propiedad backgroundImage
                    barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_equipo_homeclub].img_url})`;     



                        document.getElementById('fondo_homeclut').src = Fondo_equipos[id_equipo_homeclub].img_url
                        document.getElementById('fondo_visitante').src =Fondo_equipos[id_equipo_visitante].img_url
                        document.getElementById('lineuP').src =Lineup[id_equipo_homeclub].img_url

    
    
                        let totalS = 0;
                        let totalB = 0;
    
                        for (let i = 0; i < secuencia_lanzamientos.length; i++) {
                            if (secuencia_lanzamientos[i] === 'S') {
                                totalS++;
                            } else if (secuencia_lanzamientos[i] === 'B') {
                                totalB++;
                            }
                        }
    
                       
                        cont.innerHTML = `<div style="opacity: 1;" id="bolas" class="bolas">${totalB}</div>
                        <div  style="opacity: 1;"  id="xrt" class="xrt">-</div>
                        <div  style="opacity: 1;"  id="strain" class="strain">${totalS}</div>`;



                        
                        if (parte === 0) {
                          
                                        //data / boxscore / homeclub /lanzador 
                            homeclub_lanzadores.forEach(element => {

                                console.log(element)
                                if(element.id_picher == id_lanzador_homeclub){
                                   let nombre = element.nombre;
                                   let apellido = element.apellido;
                                   const inicial = nombre.charAt(0);
                                   document.getElementById("f1_gfx").innerText = nombre ;
                                   document.getElementById("f1_gfx1").innerText = nombre ;
                                  
                                }
                    
                               });
       
                                       //data / boxscore / visitante /visitante 
                               peloteros_visitante.forEach(element => {
                               if(element.id_pelotero == id_bateador_visitante){
                                   let nombres = element.nombre;
                                   let apellidos = element.apellido;
                                   const inicia = nombres.charAt(0);
                                   document.getElementById("f0_gfx").innerText = nombres ;
       
                               }
       
                          });
                         
                        } if (parte === 1){
                          
                            homeclub_peloteros.forEach(element => {
                             if(element.id_pelotero == id_bateador_homeclub){
                                let nombre = element.nombre;
                                let apellido = element.apellido;
                                const inicia = nombre.charAt(0);
                                document.getElementById("f0_gfx").innerText = nombre ;
                               
                             }
                 
                            });
    
                          
                            lanzadores_visitante.forEach(element => {
                            if(element.id_picher == id_lanzador_visitante){
                                let nombres = element.nombre;
                               
                                let apellido = element.apellido;
                                const inicia = nombres.charAt(0);
                                document.getElementById("f1_gfx").innerText = nombres ;
                                document.getElementById("f1_gfx1").innerText = nombres ;
                               
    
                            }
                       });
          
    
                        }

                    let colorDebase = "rgb(255, 255, 255)";
                    if (hombre_primera == 1){
                           Hombre_primera.style.backgroundColor = colorDebase;
    
                    }
                     
                    if (hombre_segunda === 1){
                        Hombre_segunda.style.backgroundColor = colorDebase;
    
                    }
                       
                    if (hombre_tercera === 1){
                         Hombre_tercera.style.backgroundColor = colorDebase;
    
                    }
                       
                    Carreras_homeclub.innerText =  carreras_homeclub  ? carreras_homeclub  :carreras_homeclub=  '00' 
                    Carreras_visitante.innerText = carreras_visitante ? carreras_visitante  : carreras_visitante=  '00'
    
                  
                    
              
    
                }
    
                }).catch(error => {
                    console.error("Error en una de las solicitudes:", error);
                });
        }
    
        
        fetchData();
    
      
        const updateInterval = 10000; // 10 segundos
        setInterval(fetchData, updateInterval);
    }
    
    updateGameData();
}