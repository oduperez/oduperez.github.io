const stages = [
            "Gracias por estar hoy cenando conmigo.",
            "Estás increíble, impresionante y guapísima esta noche.",
            "Gracias por ser mi acompañante estos meses, han sido increíbles.",
            "Gracias por todos los planes que hemos hecho juntos.",
            "Gracias por todos los planes que haremos juntos 😉.",
            "Por todo esto y todo lo que nos queda juntos... quiero hacerte una propuesta bonita.",
            "¿Quieres ser mi novia?"
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
            stageIndex++;
            if (stageIndex < stages.length - 1) {
                stageText.textContent = stages[stageIndex];
                photoContainer.innerHTML = images[stageIndex].map(src => `<img src="${src}" alt="Foto">`).join("");
            } else {
                document.getElementById("stage-box").innerHTML = `
                    <p id="question">¿Quieres ser mi novia?</p>
                    <div class="buttons">
                        <button id="yes-btn">Sí</button>
                        <button id="no-btn">No</button>
                    </div>
                `;
                document.getElementById("yes-btn").addEventListener("click", function() {
                    document.body.innerHTML = `<h1 style='color: white;'>¡Sabía que dirías que sí! ❤️</h1>`;
                });
                document.getElementById("no-btn").addEventListener("click", function() {
                    alert("¡No puede ser! Piénsalo bien 😢");
                });
            }
        });
