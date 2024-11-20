document.getElementById("check-btn").addEventListener("click", function() {
    const textInput = document.getElementById("text-input").value.trim();
    const resultDiv = document.getElementById("result");
  
    
    if (!textInput) {
      alert("Please input a value");
      resultDiv.textContent = "";
      return;
    }
  
  
    const cleanedText = textInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    
    if (cleanedText === cleanedText.split('').reverse().join('')) {
      resultDiv.textContent = `"${textInput}" is a palindrome.`;
      resultDiv.style.color = "#4caf50"; 
    } else {
      resultDiv.textContent = `"${textInput}" is not a palindrome.`;
      resultDiv.style.color = "#f44336"; 
    }
  });
  document.getElementById("check-btn").addEventListener("click", function () {
    const textInput = document.getElementById("text-input").value.trim();
    const resultDiv = document.getElementById("result");
  
  
    resultDiv.textContent = "";
    resultDiv.classList.remove("show");
  
   
    if (!textInput) {
      alert("Please input a value");
      return;
    }
  

    const cleanedText = textInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  
  
    if (cleanedText === cleanedText.split("").reverse().join("")) {
      resultDiv.textContent = `"${textInput}" is a palindrome!`;
      resultDiv.style.background = "linear-gradient(90deg, #a8ff78, #78ffd6)";
    } else {
      resultDiv.textContent = `"${textInput}" is not a palindrome.`;
      resultDiv.style.background = "linear-gradient(90deg, #ff9a9e, #fad0c4)";
    }
  
   
    setTimeout(() => resultDiv.classList.add("show"), 100);
  });
document.getElementById("check-btn").addEventListener("click", function () {
    const textInput = document.getElementById("text-input").value.trim();
    const resultDiv = document.getElementById("result");

  
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("show");
 
    if (!textInput) {
        alert("Please input a value");
        return;
    }

   
    const cleanedText = textInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

   
    const isPalindrome = cleanedText === cleanedText.split("").reverse().join("");

   
    if (isPalindrome) {
        resultDiv.innerHTML = `
            <div class="emoji happy">
                😊 <span class="tears"></span><span class="tears"></span>
            </div>
            <p>"${textInput}" is a palindrome! Great job!</p>`;
        resultDiv.style.background = "linear-gradient(90deg, #a8ff78, #78ffd6)";
    } else {
        resultDiv.innerHTML = `
            <div class="emoji sad">
                😒 <span class="tear"></span><span class="tear"></span>
            </div>
            <p>"${textInput}" is not a palindrome. Try again!</p>`;
        resultDiv.style.background = "linear-gradient(90deg, #ff9a9e, #fad0c4)";
    }

  
    setTimeout(() => resultDiv.classList.add("show"), 100);
});



















// Switch between Day and Night Mode
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', function () {
  document.body.classList.toggle('night-mode');
  document.body.classList.toggle('day-mode');
});

// Random Emoji Generator
const emojiButton = document.getElementById('emojiButton');
const emojiDisplay = document.getElementById('emojiDisplay');

const emojis = ['😊', '😢', '😂', '😍', '🥺', '😎', '😭'];
emojiButton.addEventListener('click', function () {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  emojiDisplay.textContent = randomEmoji;
});

// Confetti Explosion on Button Click
emojiButton.addEventListener('click', function () {
  triggerConfetti();
});

function triggerConfetti() {
  const confettiCount = 50;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'absolute';
    confetti.style.top = `${Math.random() * window.innerHeight}px`;
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animation = 'confetti 2s ease-out forwards';
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 2000);
  }
}
