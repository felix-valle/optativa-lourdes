# JS desde cero en el navegador... antes que REACT.

El objetivo de esta práctica es crear un formulario básico en HTML y JavaScript que permita saludar a un usuario. Publicarlo en un repositorio de GitHub con GitHub Pages. Todo debes documentarlo con un pantallazo en este mismo archivo y personalizarlo con tu tus datos personales.

## Por qué REACT

- REACT es una biblioteca de JavaScript para construir interfaces de usuario.
- Es mantenida por Meta y una comunidad de desarrolladores.
- Permite construir componentes reutilizables.
- Es ampliamente utilizada en la industria, lo que la hace relevante para desarrolladores web.
- Aprender REACT abre oportunidades laborales y mejora las habilidades en desarrollo frontend.
- Cuenta con un ecosistema robusto, incluyendo herramientas como Redux para la gestión del estado y React Router para la navegación.
- Tiene un rendimiento optimizado gracias a su uso del Virtual DOM.
- Se sitúa como uno de los frameworks más populares en la actualidad. [State of JS 2023](https://2023.stateofjs.com/en-US/libraries/front-end-frameworks/)

## Por qué JavaScript antes de REACT
- REACT está construido sobre JavaScript, por lo que es esencial tener una buena comprensión de este lenguaje antes de aprender REACT.
- JavaScript es el lenguaje de programación principal para el desarrollo web frontend.

# ¿Qué es JavaScript?

JavaScript (JS) es un lenguaje de programación interpretado, ligero y multiplataforma, creado inicialmente para dotar de interactividad a las páginas web. Hoy en día, se utiliza tanto en el desarrollo frontend (navegadores) como en el backend (servidores, gracias a Node.js), aplicaciones móviles, de escritorio y más.

## Versiones
- **ECMAScript** es el estándar que define el lenguaje. Las versiones más importantes son:
  - **ES5 (2009):** Amplió la compatibilidad y funcionalidades.
  - **ES6/ES2015:** Introdujo let/const, arrow functions, clases, módulos, promesas, etc.
  - Desde 2015, cada año se publica una nueva versión con mejoras y nuevas características.

## Potencia
- Permite crear desde páginas web dinámicas hasta aplicaciones complejas, videojuegos, servidores, inteligencia artificial y más.
- Es asíncrono, flexible y tiene una enorme cantidad de librerías y frameworks (React, Angular, Vue, etc.).
- Es esencial para el desarrollo web y uno de los lenguajes más demandados en el mercado laboral.

---
## Parte 1: Instalación y configuración

1. **Instala Visual Studio Code**  
   Descarga e instala VS Code desde [code.visualstudio.com](https://code.visualstudio.com/).

## Parte 2: Primeros pasos con la consola del navegador

1. Abre tu navegador web (Chrome, Firefox, Edge, etc.).
2. Accede a cualquier página web y pulsa `F12` o `Ctrl+Shift+I` para abrir las herramientas de desarrollo.
3. Haz clic en la pestaña "Consola".
4. Prueba los siguientes comandos uno por uno y observa el resultado:
   ```js
   2 + 2
   console.log("¡Hola, mundo!")
   let nombre = "Anita"
   nombre
   ```
<img width="820" height="528" alt="image" src="https://github.com/user-attachments/assets/7f6ade9c-06ef-44df-8d80-adc45bd788ad" />

## Parte 3: Tu primer archivo HTML + JavaScript

1. Crea una carpeta llamada `00JSyEntorno` dentro de tu espacio de trabajo.
2. Dentro de esa carpeta, crea un archivo llamado `hola.html`.
3. Escribe el siguiente código en `hola.html`:
   ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
     <meta charset="UTF-8">
     <title>Hola JS</title>
   </head>
   <body>
     <script>
       console.log("¡Hola, mundo!");
       let nombre = "Ana";
       console.log("Bienvenida, " + nombre);
     </script>
   </body>
   </html>
   ```
   
4. Desde VSCode abre el archivo `hola.html` en tu navegador.
5. Observa el resultado en la consola del navegador.

   <img width="1030" height="441" alt="image" src="https://github.com/user-attachments/assets/e2d3ea70-a7ef-48b1-bbb7-5a8159d08ace" />

[https://felix-valle.github.io/optativa-lourdes/hola.html](https://felix-valle.github.io/optativa-lourdes/hola.html)

## Parte 4: Experimenta

- Cambia el valor de la variable `nombre` por el tuyo y recarga la página.
- Añade una línea que sume dos números y muestre el resultado con `console.log`.
- Añade otra variable con tu apellido y muestra un saludo completo.
- Modifica el saludo para que incluya el apellido en mayúsculas. Busca en la consola cómo convertir una cadena a mayúsculas. Para ello usa un literal de cadena (con tu nombre) seguido del operador punto (`.`) 
- Modifica el archivo para que el saludo se muestre en la página web en lugar de la consola. Usa `document.body.innerHTML` para esto:
   ```js
   document.body.innerHTML = "<h1>¡Hola, " + nombre + "!</h1>";
   ```
- Publica tu proyecto en el repositorio de GitHub y usa GitHub Pages para alojarlo. Sigue [esta guía](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site) para hacerlo.


## parte 5: formulario HTML + JavaScript
1. Crea un archivo llamado `formulario.html` en la misma carpeta `00JSyEntorno`.
2. Crea un archivo llamado `formulario.js` en la misma carpeta `00JSyEntorno`.
3. Escribe el siguiente código en `formulario.html`:
4. ```html
   <!DOCTYPE html>
   <html lang="es">
   <head>
     <meta charset="UTF-8">
     <title>Formulario de Saludo</title>
   </head>
   <body>
     <h1>Formulario de Saludo</h1>
     <form id="formulario">
       <label for="nombreInput">Nombre:</label>
       <input type="text" id="nombreInput" required>
       <button type="submit">Saludar</button>
     </form>
     <p id="salida"></p>
     
     <script src="formulario.js"></script>
   </body>
   </html>
   ```
5. Escribe el siguiente código en `formulario.js`:
   ```js
   document.addEventListener('DOMContentLoaded', function() {
     document.getElementById('formulario').addEventListener('submit', function(event) {
       event.preventDefault();
       const nombre = document.getElementById('nombreInput').value;
       document.getElementById('salida').textContent = '¡Hola, ' + nombre + '!';
     });
   });
   ```
6. Desde VSCode abre `formulario.html` en tu navegador y prueba el formulario.
<img width="1233" height="605" alt="image" src="https://github.com/user-attachments/assets/690cf0e0-793d-4cee-9548-7c4f7fc85090" />

   [https://felix-valle.github.io/optativa-lourdes/formulario.html](https://felix-valle.github.io/optativa-lourdes/formulario.html)

   [https://felix-valle.github.io/optativa-lourdes/formulario.js](https://felix-valle.github.io/optativa-lourdes/formulario.js)
## Parte 6: Preguntas de reflexión

1. ¿Qué hace `console.log`?

   muestra mensajes o datos por la consola del navegador
3. ¿Qué ocurre si cambias el valor de la variable desde la consola? ¿Se puede?

   si, pero no siempre tiene efecto ya que dependera de como se halla definido la variable ya que si es con el const no ya que no permite reasignar su valor

5. ¿Para qué sirve la consola del navegador en este contexto?

Para hacer pruebas sobre el comportamiento del navegador web   y comprobar el estado del navegador
   
7. Para qué sirve el archivo HTML en este contexto?

es el  encargado de cargar y ejecutar el codigo javascript
   
9. ¿Por qué es una buena práctica separar el código JavaScript del HTML?

    Porque el codigo html en el contenido y la estructura mientras que el javascript se encarga de la interaccion y de como se comporta la web

11. Por qué se llama Vanilla JavaScript?

Porque es como viene de fabrica sin utilizar ninguna libreria 
    
13. Cuándo se usa JavaScript puro y cuándo se usan frameworks o librerías como REACT?

javascript puro se usa cuando es un proyecto pequeño o simple 
mientras que los frameworks se usa donde el usuario interactua constantemente y los datos cambian en tiempo real 

15. Cómo se define una función en JS

 function saludar() {console.log("Hola soy felix");]
 saludar()

 y con arrow function 
 ()=>console.log(11)
    
17. Sobre el código demuestra la diferencia entre let y const

    <img width="1233" height="605" alt="image" src="https://github.com/user-attachments/assets/a4ee2aa0-409f-4e62-88a0-7c31d31aef3e" />


19. Indica en el código:
   1. Si puede evitarse el uso de let. Qué hace
definir una variable pero no es necesario ya que es modificable 
      <img width="760" height="562" alt="image" src="https://github.com/user-attachments/assets/c2bd3f7b-5c64-453b-abd7-b4b3e67f59ab" />

   3. Cuántos eventos hay en el código, cuáles son y para qué sirven

dos 



