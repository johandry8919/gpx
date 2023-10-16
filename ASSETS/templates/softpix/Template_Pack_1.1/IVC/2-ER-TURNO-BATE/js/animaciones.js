  
  
  function runAnimationIN(result ,result2) {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
    
      }

      const animateLogo_equipo = (selector, delayTime, Offset) => {
        const dur = 0.5;
        const dur2 = 0.7;
      
        gsap.fromTo(
          selector,
          { opacity: 0 },
          {
            delay: delayTime,
            duration: dur - 0.2,
            opacity: 1,
            ease: "Power4.easeOut",
          }
        );
      
        gsap.fromTo(
          selector,
          { y: Offset },
          {
             delay: delayTime, duration: dur - 0.2, y: 0, ease: "back.out(0.2)",
             onComplete: () => {
              

              gsap.fromTo(
                '#animate_fondo',
                { opacity: 0 },
                {
                  delay: 0.5,
                  duration: dur2 - 0.2,
                  opacity: 1,
                  ease: "Power4.easeOut",
                }
              );

              gsap.fromTo(
                '#animate_fondo',
                { x:-20},
                { delay: 0.5, duration: dur2 - 0.2, x: 0, ease: "back.out(0.2)" ,
              
              
              }
              );

            gsap.to('#animate_fondo', {
              delay: delayTime + 2, // 2 segundos de pausa
              duration: 0.3, // Duración muy corta para evitar animación visible
              y: 100, 
              onComplete: () => {
                gsap.fromTo(
                  '#inning',
                  { opacity: 0 },
                  {
                    delay: 0.1,
                    duration: dur2 - 0.1,
                    opacity: 1,
                    ease: "Power4.easeOut",
                  }
                );
                gsap.fromTo(
                  '#alta_vaja',
                  { opacity: 0 },
                  {
                    delay: 0.1,
                    duration: dur2 - 0.1,
                    opacity: 1,
                    ease: "Power4.easeOut",
                    onComplete: () => {

                      gsap.fromTo(
                        '#animacion_aout',
                        { opacity: 0 },
                        {
                          delay: 0.1,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                        }
                      );
                      gsap.fromTo(
                        '#animacion_O',
                        { opacity: 0 },
                        {
                          delay: 0.2,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                        }
                      );
                      gsap.fromTo(
                        '#animacion_U',
                        { opacity: 0 },
                        {
                          delay: 0.3,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                        }
                      );
                      gsap.fromTo(
                        '#animacion_T',
                        { opacity: 0 },
                        {
                          delay: 0.4,
                          duration: dur2 - 0.1,
                          opacity: 1,
                          ease: "Power4.easeOut",
                          onComplete: () => {

                          }
                        }
                      );

                                      
                  gsap.to('#animacion_aout', {
                    delay: delayTime + 2, 
                    duration: 0.001, 
                    opacity: 0, 
                    onComplete: () => {

                      gsap.fromTo(
                        '#outs',
                        { opacity:0, scale: 1.5 ,bottom:20 }, // Escala inicial de 2
                        {
                          delay: 0.2,
                          duration: dur - 0.1,
                          opacity: 1,
                          scale: 1.5,
                          bottom:20,
                          ease: "Power3.easeOut",
                          onComplete: () => {

                          gsap.fromTo(
                        '#outs',
                        { opacity:1, scale: 1.5  }, // Escala inicial de 2
                        {
                          delay: 0.2,
                          duration: dur - 0.1,
                          opacity: 1,
                          scale: 1,
                          bottom:5,
                          ease: "Power3.easeOut",
                          onComplete: () => {
                            gsap.fromTo(
                              '#cont-base',
                              { opacity:0, }, // Escala inicial de 2
                              {
                                delay:0.1,
                                duration: dur - 0.1,
                                opacity: 1,
                                ease: "Power3.easeOut",
                                onComplete: () => {

                                    const dur2 = 0.5; 
                                  const right_img = (selector, delayTime, xOffset) => {
                                    gsap.fromTo(
                                      selector,
                                      { opacity: 0 },
                                      {
                                        delay: delayTime,
                                        duration: dur2 - 0.2,
                                        opacity: 1,
                                        ease: "Power4.easeOut",
                                      }
                                    );
                                  
                                    gsap.fromTo(
                                      selector,
                                      { y: xOffset },
                                      { delay: delayTime, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)" }
                                    );
                                  };

                                  right_img('#bolas',0.2,-100)
                                  right_img('#xrt',0.3,-100)
                                  right_img('#strain',0.4,-100)
                                  right_img('#f1_gfx',0.3,30)
                                  right_img('#f0_gfx',0.3,30)
                                  right_img('#cont-5',0.5,-30)

                                     const videoElement = document.getElementById("video");
                                    const sourceElement = document.createElement("source");
                                    sourceElement.src = 'media/AGUILAS-3D.webm';
                                    sourceElement.type = "video/webm";
                                    videoElement.appendChild(sourceElement);
                                 
 
                                }
                              }
                            );
                            
                          }
                        }
                      );

                          }
                        }
                      );
                    }
                  });
                      

                    }

                  }
                );
              }
             
            });
                        
              

            },
         }
        );
      };

      animateLogo_equipo("#id_equipo_homeclub", 0.1, 10 );
      animateLogo_equipo("#id_equipo_visitante", 0.1, 10 );   

 const animateBar = (selector, delayTime, property, value, duration ,data_jugador ,lis_jugadores, posiciones_jugadores_1_4) => {
  

  const proximo_al_bate = document.getElementById("temporada");
  proximo_al_bate.innerHTML= `<p>TEMPORADA 23-22</p>`;

  let animationCompleted = false;
  const options = {
    opacity: 1,
    delay: 0.2,
    duration: duration - 0.2,
    ease: "Power4.easeOut",
  };

  const animationProps = {};
  animationProps[property] = value;

  gsap.fromTo(selector, { opacity: 1 }, options);
  gsap.fromTo(selector, animationProps, {
     delay: delayTime,
      duration, 
      [property]: 0,
       ease: "back.out(0.2)" ,
      });

    gsap.to('#barras_text', {
    delay: delayTime + 7, 
    duration: 0.001,
    x:-100,
    opacity:0, // Cambiar la escala a 1
  });
    gsap.to('#temporada', {
    delay: delayTime + 7, 
    duration: 0.001, 
    y:-150, 
      onComplete: () => {
        const posicion_poscampo = ['BD', 'P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'CF', 'RF'];
                  const infoContainer = document.getElementById('infoContainer');
                  let infoText = '';

                  let number = 1

                  for (let i = 0; i < 3; i++) {
                    number++
                    const jugador = lis_jugadores[posiciones_jugadores_1_4[i]];
                    const posicion = posicion_poscampo[jugador.pos_campo];
                    infoText += `${posiciones_jugadores_1_4[i]} - ${jugador.nombre} ${jugador.apellido} ${posicion} `;
                  }

                  infoContainer.innerText = infoText;

        const dur2 = 0.5; 
        gsap.fromTo(
          '#lineup',
          { opacity: 0 },
          {
            delay: 0.2,
            duration: dur2 - 0.2,
            opacity: 1,
            ease: "Power4.easeOut",
          }
        );
      
        gsap.fromTo(
          '#lineup',
          { y: 100 },
          { delay: 0.2, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)" }
        );

        gsap.fromTo(
          '#f1_gfx',
          { y: 0 },
          { delay: 0.1, opacity:0, duration: dur2 - 0.2, y: 50, ease: "back.out(0.2)" }
        );
        if (!animationCompleted) {
          const infoContainer = document.getElementById('infoContainer');
          const containerWidth = infoContainer.offsetWidth;
        
          const animationSettings = {
            duration: 15,
            opacity:1,
            x: -containerWidth,
            onComplete: () => {
              
            
              animationCompleted = true;
              const dur2 = 0.7; 
              gsap.fromTo(
                '#lineup',
                { y: 0 },
                { delay: 0.1, opacity:0, duration: dur2 - 0.2, y: 50, ease: "back.out(0.2)" }
              );

        
             
              gsap.fromTo(
                '#temporada',
                { opacity: 0 },
                {
                  delay: 0.5,
                  duration: dur2 - 0.2,
                  opacity: 1,
                  ease: "Power3.easeOut",
                }

                
              );
                   

         
              const f1_gfx = document.getElementById("f1_gfx");
              const f1_gfx1 = document.getElementById("f1_gfx1");
             
              setTimeout(() => {
                f1_gfx.innerHTML = '';
                f1_gfx1.innerText = '';
              }, 500);

             
            
              gsap.fromTo(
                '#temporada',
                { y: 100 },
                { delay: 0.5, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)",
                onComplete:()=>{
                  const dur3 = 1;
                  gsap.fromTo(
                    '#barras_text',
                    { opacity: 0 },
                    {
                      delay: 0.2,
                      duration: dur2  - 0.2,
                      opacity: 1,
                      ease: "Power4.easeOut",
                    }
                  );
                  
                  gsap.fromTo(
                    '#barras_text',
                    { x: 2000 },
                    { delay: 0.2, 
                       opacity:1, duration: dur3 - 0.2, x: 0, ease: "back.out(0.2)" ,
                    }
                  );

                const ave = data_jugador.AVE || '0.00';
                const hr = data_jugador.HR || '0.00';
                const ci = data_jugador.CI || '0.00';
                const OBA = data_jugador.OBA || '0.00';
                const ops = data_jugador.OPS || '0.00';

                const f1_gfx = document.getElementById("f1_gfx");
                f1_gfx.innerHTML = ` <p>${data_jugador.nombre.charAt(0)} ${data_jugador.apellido}</p><p>${ave}</p> `;

               

                const f1_gfx1 = document.getElementById("f1_gfx1");
                f1_gfx1.innerText= ` ${data_jugador.nombre} ${data_jugador.apellido} AVG ${ave} HR .${hr} CI .${ci} OBP .${OBA} OPS .${ops}`;

                gsap.fromTo(
                  '#f1_gfx',
                  { opacity: 0 },
                  {
                    delay: 0.2,
                    duration: dur2 - 0.2,
                    opacity: 1,
                    ease: "Power4.easeOut",
                  }
                );
                
                gsap.fromTo(
                  '#f1_gfx',
                  { y: 50 },
                  { delay: 0.1, 
                    opacity:1, duration: dur2 - 0.2, y: 0, ease: "back.out(0.2)" }
                );
                
                  
                }}
              );
            }
          };

        
          gsap.fromTo(infoContainer, { x: containerWidth }, animationSettings);
          }
      
    },
  });
};
let {
parte,
posicion_bateo_homeclub,
posicion_bateo_visitante,
id_equipo_visitante
  
} = result.data.juego;

let = posicion_bateo = '';
let data_pelotero;


if(parte == 1){
    posicion_bateo = posicion_bateo_homeclub == 9 ? posicion_bateo_homeclub = 8 : posicion_bateo_homeclub
    data_pelotero = result.data.boxscore.homeclub

}else{
    posicion_bateo =  posicion_bateo_visitante == 9 ? posicion_bateo_visitante = 8 : posicion_bateo_visitante
    data_pelotero = result.data.boxscore.visitante

}

    function mostrarIndices(valor) {
      var jugadores = data_pelotero.peloteros
      const datos_jugadores = []
    
      if (valor >= 0 && valor < jugadores.length) {
        var inicio = Math.max(0, valor -1);
        var fin = Math.min(valor + 2, jugadores.length);
        var valoresAMostrar = jugadores.slice(inicio, fin);

        valoresAMostrar.forEach(element => {
          datos_jugadores.push(element)
         
        });
      } else {
        console.log("El valor está fuera del rango de índices.");
      }

       return datos_jugadores 
    }
    
   
   let  nombre_jugadores = mostrarIndices(posicion_bateo);
   data_pelotero.peloteros.forEach(element => {
       if(element.id_pelotero ==nombre_jugadores[0].id_jugador){
        nombre_jugadores[0] = element 
       }
       if(element.id_pelotero ==nombre_jugadores[1].id_jugador){
        nombre_jugadores[1] = element 
       }
       if(element.id_pelotero ==nombre_jugadores[2].id_jugador){
        nombre_jugadores[2] = element 
       }
      
    });

   
  const lis_jugadores = data_pelotero.peloteros

  const posiciones_jugadores_1_4 = ['0','1','2']
  const posiciones_jugadores_4_6 = ['3','4','5']
  const posiciones_jugadores_4_9 = ['6','7','8']


    animateBar('#barras', 8, 'x', -2000, 2);
    animateBar('#temporada', 9, 'y', 150, 0.5);
    animateBar('#barras_text', 8, 'x', 950, 1.5,nombre_jugadores[0] ,lis_jugadores ,posiciones_jugadores_1_4);
    animateBar('#barras_text', 30, 'x', 950,  1.5,nombre_jugadores[1],lis_jugadores,posiciones_jugadores_4_6);
    animateBar('#barras_text', 50, 'x', 950, 1.5 ,nombre_jugadores[2],lis_jugadores,posiciones_jugadores_4_9);   

    const fin_animaciones = (selector, delayTime, xOffset) => {
      const dur = 0.5;
      gsap.fromTo(
        selector,
        { opacity: 0 },
        {
          delay: delayTime,
          duration: dur - 0.2,
          opacity: 1,
          ease: "Power4.easeOut",
        }
      );

        gsap.fromTo(
        selector,
        { y: xOffset },
        { delay: delayTime, duration: dur - 0.2, y: 40, ease: "back.out(1.2)" }
      );

      const animationConfig = {
        delay: delayTime,
        duration: dur - 0.2,
        opacity: 0,
        ease: "Power4.easeOut",
      };
      
      gsap.fromTo('#lineup', { opacity: 0 }, animationConfig);
      gsap.fromTo('#temporada', { opacity: 0 }, animationConfig);
      gsap.fromTo('#barras_text', { opacity: 0 }, animationConfig);
      
      gsap.fromTo(
        '#bolas',
        { opacity: 0 },
        {
          delay: 0.1,
          duration:0.1,
          opacity: 0,
        }
      );
      gsap.fromTo(
        '#strain',
        { opacity: 0 },
        {
          delay: 0.1,
          duration: 0.1,
          opacity: 0,
        }
      );
      
      gsap.fromTo(
        '#cont-5',
        { x: 0 },
        { delay: delayTime, duration: 1, x: -180, ease: "back.out(0.3)" }
      );

       
      gsap.fromTo(
        '#cont-6',
        { x: 0 },
        { delay: delayTime,
           duration: +0.9,
            x: -180,
             ease: "back.out(0.3)",
             onComplete:()=>{
              const barraEquiposElement = document.getElementById('barras');
              barraEquiposElement.style.backgroundImage = `url(${Barra_equipos[id_equipo_visitante].img_url})`;  
             
             
               let nombre_1 , nombre_2 ,nombre_3

               nombre_1 = nombre_jugadores[0]
               nombre_2 = nombre_jugadores[1]
               nombre_3 = nombre_jugadores[2]


               const proximo_al_bate = document.getElementById("temporada");
               proximo_al_bate.innerHTML= `<p>PROXIMO AL BATE</p>`;
              const f1_gfx1 = document.getElementById("f1_gfx1");

               id_equipo_visitante == 2 ? f1_gfx1.style.color='black' : '';
              f1_gfx1.innerText= `1-${nombre_1.nombre} ${nombre_1.apellido } CF  2-${nombre_2.nombre} ${nombre_2.apellido } SS  3-${nombre_3.nombre} ${nombre_3.apellido }`;

              const commonAnimationConfig = {
                delay: 0.2,
                duration: dur - 0.2,
                ease: "Power4.easeOut",
              };
              
              gsap.fromTo('#temporada', { opacity: 0, y: 50 }, { opacity: 1, y: 0, ...commonAnimationConfig });
              
              gsap.fromTo('#barras_text', { opacity: 0, y: 50 }, { opacity: 1, y: 0, ...commonAnimationConfig });
             }
            
            
            }
      );
    };

   

    fin_animaciones('.name_1', 80 ,0 )
    fin_animaciones('.name_2', 80 ,0 )
   


    
  }
 
  
  function runAnimationOUT() {
    const container = document.getElementById('container'); // Asume que el contenedor tiene el ID 'container'.
    const windowWidth = window.innerWidth; // Ancho de la ventana del navegador.
    const containerWidth = container.offsetWidth; // Ancho del contenedor.
  
    gsap.to(container, {
      x: -2000, 
      opacity: 1,
      duration: 2, 
      onComplete: function() {
        container.style.display = 'none';
      }
    });
  }
 
  
  
  
  
  
  