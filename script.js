const stages = [
  //"No sabes lo feliz que me hace estar aquí contigo esta noche.",
  "Nuestros inicios no fueron los más sencillos...<br>Cada plan que organizamos nos estrechó las distancias",
  "Gracias por compartir estos meses conmigo, cada momento es único.",
  "Cada estrella en el cielo y cada atardecer inmortalizado nos recuerda las veces que nos hemos dedicado uno al otro.",
  "No puedo evitar sonreír al recordar todos los planes que hemos vivido.",
  "Y pensar en todo lo que nos espera... ¡Va a ser increíble! 😉.",
  "No puedo evitar sonreír al recordar todos los planes que hemos vivido.",
  "Después de todo esto, hay algo que quiero preguntarte de corazón...",
  "Después de una rigurosa evaluación y con el 100% de mi amor confirmado... 😏 ¿Quieres ser mi novia?"
];

const images = [
  ["img/graduacion.jpeg", "img/playa.jpeg"],           // GRADUACION + PLAYA
  ["img/IMG_8100.jpeg", "img/IMG_7360.jpeg"],          // SETAS + HELADERIA
  ["img/paisaje_ella.jpeg", "img/paisaje_mio.jpeg"],   // PAISAJES
  ["img/IMG_8039.jpeg", "img/multa.jpeg"],             // ANIMAL + MULTA
  ["img/medusas.jpeg", "img/yo_cenando.jpeg"],         // MEDUSA + YO
  ["img/IMG_8304.jpeg", "img/cena_sushi.jpeg"],        // NAVIDAD
  ["img/torneo_juntos.jpeg", "img/rio.jpeg"],          // HOBBIES
  []
];

let stageIndex = 0;
const stageText = document.getElementById("stage-text");
const continueBtn = document.getElementById("continue-btn");
const photoContainer = document.getElementById("photo-container");

document.addEventListener("DOMContentLoaded", function() {
  const loginScreen = document.getElementById("login-screen");
  const storyContent = document.getElementById("story-content");
  const profilePic = document.getElementById("profile-pic");
  
  profilePic.addEventListener("click", function() {
    loginScreen.style.display = "none";
    storyContent.style.display = "flex";
    storyContent.style.flexDirection = "column";
    storyContent.style.alignItems = "center";
  });
});
        
continueBtn.addEventListener("click", function() {
  stageText.classList.remove("fade-in");
  photoContainer.classList.remove("fade-in");
  continueBtn.classList.remove("fade-in");
  // 1. Ocultar solo las imágenes primero
  photoContainer.classList.add("fade-out");

  setTimeout(() => {
    // 2. Luego ocultar el texto y el botón
    stageText.classList.add("fade-out");
    continueBtn.classList.add("fade-out");
  }, 400); // Un pequeño retraso para que primero desaparezcan las imágenes
  
  setTimeout(() => {
    stageIndex++;
    if (stageIndex < stages.length - 1) {
      // 3. Cambiar las imágenes en el DOM
      photoContainer.innerHTML = images[stageIndex].map(src => `<img src="${src}" alt="Foto">`).join("");
      
      // 4. Cambiar el texto en el DOM
      stageText.textContent = stages[stageIndex];

      // 5. Mostrar el nuevo texto y botón
      stageText.classList.remove("fade-out");
      continueBtn.classList.remove("fade-out");
      stageText.classList.add("fade-in");
      continueBtn.classList.add("fade-in");

      // 6. Esperar antes de hacer aparecer las imágenes nuevas
      setTimeout(() => {
        photoContainer.classList.remove("fade-out");
        photoContainer.classList.add("fade-in");
      }, 800); // Permitir que el texto aparezca antes de mostrar las fotos
      
    } else {
      // Última pantalla con la pregunta final
      continueBtn.style.display = "none"; // Ocultar botón continuar
      photoContainer.style.display = "none"; // Ocultar div imágenes
      stageText.classList.remove("fade-out");
      photoContainer.classList.remove("fade-out");
      continueBtn.classList.remove("fade-out");
      stageText.innerHTML = `
        <p id="question">Después de una rigurosa evaluación y con el 100% de mi amor confirmado... 😏 ¿Quieres ser mi novia?</p>
        <div class="buttons">
        <button id="yes-btn">Sí</button>
        <button id="no-btn">No</button>
        </div>
      `;
      stageText.classList.add("fade-in");
      // Ahora que los botones existen en el DOM, añadimos los eventos
      const noBtn = document.getElementById("no-btn");
      const yesBtn = document.getElementById("yes-btn");
      let noClickCount = 0;

      noBtn.addEventListener("click", function() {
        noClickCount++;
        noBtn.style.position = "absolute";
        if ((noClickCount >= 2) && (noClickCount <= 4)) {
          noBtn.textContent = "No 😠";
          noBtn.classList.add("bad-btn");
        }else if(noClickCount > 4){
          alert('Pero a que juegas nena...!?🤬')
        }else if(noClickCount > 6){
          alert('Yo tampoco quería en realidad...😒')
        }
        noBtn.style.left = Math.random() * 50 + "%";
        noBtn.style.top = Math.random() * 50 + "%";
      });

      yesBtn.addEventListener("click", function() {
        document.body.innerHTML = `<h1 style='color: white;'>¡Sabía que dirías que sí! ❤️</h1>`;
      });
    }
  }, 1000);    
});
