
    
    function runAnimationIN() {
        let dur = 0.5;

        if (window.top.spxRenderer && window.top.spxRenderer.fps) {
          gsap.ticker.fps(window.top.spxRenderer.fps);
          console.log("spxRenderer: " + window.top.spxRenderer.fps + " FPS");
        }



        gsap.set("#TG", { delay: 0.0, opacity: 0 });
        gsap.set("#line1", { delay: 0.0, opacity: 0 });
        gsap.set("#boxscore1", { delay: 0.0, opacity: 0});
        gsap.set("#visitante", { delay: 0.0, opacity: 0});
      
       

        setTimeout(() => {
          gsap.fromTo(
            "#TG",
            { opacity: 0 },
            {
              delay: 0.1,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
          );

          gsap.fromTo(
            "#TG",
            dur,
            {
              width: 0,
            },
            {
              width: function (i, target) {
                target.style.width = "1000px";
                var width = target.offsetWidth;
                target.style.width = "0px";
                return width;
              },
              ease: "back.out(2.2)",
            }
          );

          gsap.fromTo(
            "#line1",
            { opacity: 0 },
            {
              delay: 0.1,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power3.easeOut",
            }
          );
        

          

        
        }, 800);

        setTimeout(() => {
          gsap.fromTo(
            "#boxscore1",
            { opacity: 0 },
            {
              delay: 0.3,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power2.easeOut",
            }
          );
          gsap.fromTo(
            "#visitante",
            { opacity: 0 },
            {
              delay: 0.3,
              duration: dur - 0.2,
              opacity: 1,
              ease: "Power2.easeOut",
            }
          );

          gsap.fromTo(
            "#boxscore1",
            { y: -10 },
            { delay: 0.5, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
          );
          gsap.fromTo(
            "#visitante",
            { y: -10 },
            { delay: 0.4, duration: dur - 0.2, y: 0, ease: "back.out(0.5)" }
          );

          

          
        }, 1100);

       
      }
    
    function runTemplateUpdate() {
      gsap.set("#line1", { opacity: 0 });
    
  
      let showElement = (document.getElementById("line1").style.display =
        "inline-block");
    }
  
    function runAnimationOUT() {
      let dur = 0.7;
      
  
      gsap.to("#line1", {
        delay: 0.1,
        duration: dur,
        height: 0,
        ease: "back.in(1.0)",
      });
     
  
      gsap.fromTo(
        "#boxscore1",
        { y: 0 },
        { delay: 0.5, duration: dur - 0.2, y: -30, ease: "back.out(0.5)" }
      );
      gsap.fromTo(
        "#visitante",
        { y: 0 },
        { delay: 0.6, duration: dur - 0.2, y: -25, ease: "back.out(0.5)" }
      );
  
      gsap.set("#line1", { delay: dur + 0.0, opacity: 0 });
      gsap.set("#boxscore1", { delay: dur - 0.0, opacity: 0 });
      gsap.set("#visitante", { delay: dur - 0.0, opacity: 0 });
      gsap.set("#TG", { delay: dur - 0.0, opacity: 0 });
    }
  