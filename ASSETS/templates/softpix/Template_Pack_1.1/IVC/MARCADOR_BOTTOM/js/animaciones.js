  
  
  function runAnimationIN() {
    if (window.top.spxRenderer && window.top.spxRenderer.fps) {
        gsap.ticker.fps(window.top.spxRenderer.fps);
        console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
    
  
      
    
      
      }
  }
  
  const animateY = (selector, delayTime, xOffset) => {
    
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
      { delay: delayTime,
         duration: dur - 0.2, y: 0,
          ease: "back.out(0.2)",
          onComplete: () => {
            
           
            animatex('#alta_vaja' ,0.5 , 10)
            
          },
         }
    );
  };
  const animatex = (selector, delayTime, xOffset) => {
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
      { x: xOffset },
      { delay: delayTime,
         duration: dur - 0.2, x: 0,
          ease: "back.out(0.2)",
          onComplete: () => {
            gsap.to('#animate_fondo', {
                delay: delayTime + 0.5,
                duration: 0,
                opacity: 0,
                y: 100,
                ease: "back.out(5.2)",
                onComplete: () => {

                    
                }
              });
            
          },
         }
    );
  };

  


  animateY("#id_equipo_homeclub", 0.5, 20);
  animateY("#id_equipo_visitante", 0.5, 20);
  
  
  
  
  function runAnimationOUT() {
    gsap.set("#container", { delay: 0.1, opacity: 0});
    
  }