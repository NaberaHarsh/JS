
    

      var elem = document.getElementById("heading")
      var i=0;
      
      setInterval(()=>{ elem.innerText = i; i++  }, 300)   // make a counter on your page.
      
      
      elem.style.color = "green" ;   // change color
      
      elem.setAttribute('class', 'big');   //change class
      elem.getAttribute('class');