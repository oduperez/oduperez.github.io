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
  ["img/multa.jpeg", "img/yo_cenando.jpeg"],
  ["img/animal.jpeg", "img/medusas.jpeg"],
  ["img/graduacion.jpeg", "img/playa.jpeg"],
  ["img/paisaje_ella.jpeg", "img/paisaje_mio.jpeg"],
  ["img/setas_sevilla.jpeg", "img/terraza_heladeria.jpeg"],
  ["img/torneo_juntos.jpeg", "img/rio.jpeg"],
  ["img/navidad.jpeg", "img/cena_sushi.jpeg"],
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
  stageText.classList.add("fade-out");
  photoContainer.classList.add("fade-out");
  continueBtn.classList.add("fade-out");

  setTimeout(() => {
    stageIndex++;
    if (stageIndex < stages.length - 1) {
      stageText.textContent = stages[stageIndex];
      photoContainer.innerHTML = images[stageIndex].map(src => `<img src="${src}" alt="Foto">`).join("");
      stageText.classList.remove("fade-out");
      photoContainer.classList.remove("fade-out");
      continueBtn.classList.remove("fade-out");
      stageText.classList.add("fade-in");
      photoContainer.classList.add("fade-in");
      continueBtn.classList.add("fade-in");
    } else {
      continueBtn.style.display = "none"; // Ocultar botón continuar
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
  }, 500);
  stageText.classList.remove("fade-in");
  photoContainer.classList.remove("fade-in");
  continueBtn.classList.remove("fade-in");
});
