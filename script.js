const stages = [
  "No sabes lo feliz que me hace estar aquí contigo esta noche.",
  "Déjame decirte... Hoy estás espectacular, pero es que lo eres cada día.",
  "Gracias por compartir estos meses conmigo, cada momento es único.",
  "No puedo evitar sonreír al recordar todos los planes que hemos vivido.",
  "Y pensar en todo lo que nos espera... ¡Va a ser increíble! 😉.",
  "Después de todo esto, hay algo que quiero preguntarte de corazón...",
  "Después de una rigurosa evaluación y con el 100% de mi amor confirmado... 😏 ¿Quieres ser mi novia?"
];

const images = [
  ["img/foto_1.jpg", "img/foto_2.jpg"],
  ["img/foto_3.jpg", "img/foto_4.jpg"],
  ["img/foto_5.jpg", "img/foto_6.jpg"],
  ["img/foto_7.jpg", "img/foto_8.jpg"],
  ["img/foto_9.jpg", "img/foto_10.jpg"],
  ["img/foto_11.jpg", "img/foto_12.jpg"],
  []
];

let stageIndex = 0;
const stageText = document.getElementById("stage-text");
const continueBtn = document.getElementById("continue-btn");
const photoContainer = document.getElementById("photo-container");
        
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
      stageText.innerHTML = `
        <p id="question">Después de una rigurosa evaluación y con el 100% de mi amor confirmado... 😏 ¿Quieres ser mi novia?</p>
        <div class="buttons">
        <button id="yes-btn">Sí</button>
        <button id="no-btn">No</button>
        </div>
      `;
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
  }, 1000);
});

document.getElementById("yes-btn").addEventListener("click", function() {
  document.body.innerHTML = `<h1 style='color: white;'>¡Sabía que dirías que sí! ❤️</h1>`;
});
