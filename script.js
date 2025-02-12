const stages = [
  "No sabes lo feliz que me hace estar aquí contigo esta noche.",
  "Déjame decirte... Hoy estás espectacular, pero es que lo eres cada día.",
  "Gracias por compartir estos meses conmigo, cada momento es único.",
  "No puedo evitar sonreír al recordar todos los planes que hemos vivido.",
  "Y pensar en todo lo que nos espera... ¡Va a ser increíble! 😉.",
  "No puedo evitar sonreír al recordar todos los planes que hemos vivido.",
  "Después de todo esto, hay algo que quiero preguntarte de corazón...",
  "Después de una rigurosa evaluación y con el 100% de mi amor confirmado... 😏 ¿Quieres ser mi novia?"
];

const images = [
  ["img/paisaje_ella.jpeg", "img/paisaje_mio.jpeg"],
  ["img/IMG_8039.jpeg", "img/medusas.jpeg"],
  ["img/graduacion.jpeg", "img/playa.jpeg"],
  ["img/multa.jpeg", "img/yo_cenando.jpeg"],
  ["img/IMG_8100.jpeg", "img/IMG_7360.jpeg"],
  ["img/torneo_juntos.jpeg", "img/rio.jpeg"],
  ["img/IMG_8304.jpeg", "img/cena_sushi.jpeg"],
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
        //document.querySelectorAll(".hidden-img").forEach(img => img.classList.remove("hidden-img"));
        photoContainer.classList.remove("fade-out");
        photoContainer.classList.add("fade-in");
      }, 500); // Permitir que el texto aparezca antes de mostrar las fotos
      
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
        if (noClickCount >= 2) {
          noBtn.textContent = "No 😠";
          noBtn.style.position = "absolute";
          noBtn.style.left = Math.random() * 50 + "%";
          noBtn.style.top = Math.random() * 50 + "%";
        }
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 50 + "%";
        noBtn.style.top = Math.random() * 50 + "%";
      });

      yesBtn.addEventListener("click", function() {
        document.body.innerHTML = `<h1 style='color: white;'>¡Sabía que dirías que sí! ❤️</h1>`;
      });
    }
  }, 800);
  
  // Eliminar fade-in para prepararse para la siguiente aparición
  stageText.classList.remove("fade-in");
  photoContainer.classList.remove("fade-in");
  continueBtn.classList.remove("fade-in");
});
