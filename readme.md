#Desarrollar un script que lea la cantidad de segundos que ingrese el usuario, luego, al dar click en un botón, generar un color random que sea asignado como fondo de la página.

1. Creamos una variable m donde almacenaremos la información Cantidad de segundos.
2. Creamos una variable p donde almacenaré la operación m*1000 (lo multiplicamos por 1000 ya que 1s= 1000ms).
3. En nuestro html creamos un boton donde lo llamaremos id=calcular y el js pondremos " document.getElementById('calcular').addEventListener("click", function(){
        setInterval(fondo,p);})".
Esto hará llamar a nuestro id=calcular y le dará un evento donde al hacer click se ejecutará la función anónima.
Esta funcion anónima ejecutará la función setInterval donde hará que se ejecute la función fondo despues de cada tiempo.
La función fondo hara que en el body se cambie de background aleatoiamente con el código:

        document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);

