// Функція для відкриття модального вікна
function openModal() {
    document.querySelector(".signInWindow").style.display = "block";
}

// Закриваємо модальне вікно при кліці на хрестик
document.querySelector(".closeBtn").addEventListener("click", function() {   
    document.querySelector(".signInWindow").style.display = "none";
});

const regBtn = document.querySelector('#regBtn');
const signInBtn = document.querySelector('#signInBtn');
