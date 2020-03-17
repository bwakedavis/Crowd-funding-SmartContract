    // Brake Chain Animation
    function brakeChain(){
        let chain = document.getElementById('chain');
        chain.innerHTML = "&#xf0c1;";
  
        setTimeout(function(){
          chain.innerHTML = "&#xf127;";
        }, 1000);
      }
  
      // Call Animation
      brakeChain();
  
      // Animate Every 2 Seconds
      setInterval(brakeChain, 2000);
  
      // Bat