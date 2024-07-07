const images = {
    happy: [
        './img/happy1.jfif',
        './img/happy2.jfif',
        './img/happy3.jfif'
    ],
    sad: [
        './img/sad1.jfif',
        './img/sad2.jfif',
        './img/sad3.jfif'
    ],
    thinking: [
        './img/thinking1.jfif',
        './img/thinking2.jfif',
        './img/thinking3.jfif'
    ]
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let guessInput = document.getElementById('guessInput');
let result = document.getElementById('result');
let guessButton = document.getElementById('guessButton');
let attempts = document.getElementById('attempts');
let imageContainer = document.querySelector('.container'); 
const randomIndexHappy = getRandomInt(0, images.happy.length - 1);
const randomImageHappy = images.happy[randomIndexHappy];
const randomIndexSad = getRandomInt(0, images.sad.length - 1);
const randomImageSad = images.sad[randomIndexSad];
const randomIndexThinking = getRandomInt(0, images.thinking.length - 1);
const randomImageThinking = images.thinking[randomIndexThinking];
const imageBlock = document.querySelector('.image-block'); 
const img = imageBlock.querySelector('img');

let secretNumber = getRandomInt(1, 100);
console.log('Загаданное число:', secretNumber);

let remainingAttempts = 5;

guessButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        result.textContent = "Введи число от 1 до 100!";
        imageBlock.innerHTML = `<img src="${randomImageThinking}" alt="Sad Image">`;
        imageBlock.style.display = 'block'; 
         
    } else if (guess === secretNumber) {
        result.textContent = "Ты угадал!";
        guessButton.innerHTML = "Начать заново!";
        imageBlock.innerHTML = `<img src="${randomImageHappy}" alt="Sad Image">`;
        imageBlock.style.display = 'block'; 
     
    } else {
        remainingAttempts--;
        attempts.textContent = `Осталось попыток: ${remainingAttempts}`;
        const intervalStart = Math.max(1, secretNumber - 20);
        const intervalEnd = Math.min(100, secretNumber + 20);
        // result.textContent = `Неверно.Продолжай угадывать в интервале от ${intervalStart} до ${intervalEnd}!`;
        result.textContent = "Неверно.Продолжай угадывать в интервале от " + intervalStart + " до " + intervalEnd + "!";
        imageBlock.innerHTML = `<img src="${randomImageThinking}" alt="Sad Image">`;
        imageBlock.style.display = 'block'; 
       


    
        if (remainingAttempts === 0) {
            result.textContent = "Ты проиграл! Загаданное число было: " + secretNumber;
            imageBlock.innerHTML = `<img src="${randomImageSad}" alt="Sad Image">`;
            imageBlock.style.display = 'block';
            guessButton.innerHTML = "Начать заново!";
        }

        if (guessButton.innerHTML === "Начать заново!") {
            guessButton.addEventListener('click', () => {
                location.reload(true); // Перезагружаем страницу
            });
        }

     
    }

   

});