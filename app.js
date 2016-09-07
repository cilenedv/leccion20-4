window.addEventListener("load", function() { 
    var segundo=parseInt(prompt("Cantidad de segundos:"));
    var tiempo=segundo*1000; 
    document.getElementById('bot').addEventListener("click", function(){
       setInterval(fondo,tiempo);});    
     function fondo(){ 
       document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
   }
});