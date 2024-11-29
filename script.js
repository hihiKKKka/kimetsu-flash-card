
const audio = document.getElementById('background-music');
const musicToggle = document.getElementById('music-toggle');


audio.play().catch((error) => {
    console.log("Autoplay bloqueado: ", error);
});


musicToggle.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicToggle.textContent = 'Desligar Música';
    } else {
        audio.pause();
        musicToggle.textContent = 'Ligar Música';
    }
});
audio.volume = 0.3;