let noClickCount = 0;
        const noBtn = document.getElementById("no-btn");
        const yesBtn = document.getElementById("yes-btn");
        const questionBox = document.getElementById("question-box");
        const collage = document.getElementById("collage");
        
        noBtn.addEventListener("click", function() {
            noClickCount++;
            if (noClickCount >= 3) {
                noBtn.textContent = "😠";
            } else {
                noBtn.style.top = Math.random() * 50 + "px";
                noBtn.style.left = Math.random() * 50 + "px";
            }
        });
        
        yesBtn.addEventListener("click", function() {
            questionBox.classList.add("hidden");
            collage.classList.remove("hidden");
        });
