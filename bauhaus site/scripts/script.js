document.addEventListener('DOMContentLoaded', () => {
    const h2First = document.querySelector('.animate');
    const h2Second = document.querySelector('.roll-in');

    // Start een timer zodra de tweede animatie is voltooid
    h2Second.addEventListener('animationend', () => {
        setTimeout(() => {
            // Zoom in op de eerste tekst
            h2First.classList.add('zoom');

            // Scroll naar beneden na 2 seconden
            setTimeout(() => {
                window.scrollTo({
                    top: window.innerHeight, // Scroll naar beneden met de hoogte van het venster
                    behavior: 'smooth' // Zacht scrollen
                });
            }, 1000); // 2 seconden wachten na de zoom-in
        }, 3000); // Wacht 3 seconden om de zoom te starten
    });
});
