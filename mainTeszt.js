// Lámpák inicializálása és játéklogika
document.addEventListener('DOMContentLoaded', function() {
    const n = 5; // NxN-es terület mérete
    const lampContainer = document.getElementById('lamp-container');
    const newGameButton = document.getElementById('new-game');
    let lamps = []; // A lámpák állapotát tároló mátrix

    // Függvény a lámpák állapotának megváltoztatására
    function toggleLamp(row, col) {
        lamps[row][col] = 1 - lamps[row][col]; // Állapot váltás
        // Szomszédok állapotának változtatása
        if (row > 0) lamps[row - 1][col] = 1 - lamps[row - 1][col]; // Felülről
        if (row < n - 1) lamps[row + 1][col] = 1 - lamps[row + 1][col]; // Alulról
        if (col > 0) lamps[row][col - 1] = 1 - lamps[row][col - 1]; // Balról
        if (col < n - 1) lamps[row][col + 1] = 1 - lamps[row][col + 1]; // Jobbról
    }

    // Függvény a lámpák megjelenítésére
    function displayLamps() {
        lampContainer.innerHTML = ''; // Ürítjük a tartalmat
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const lamp = document.createElement('div');
                lamp.className = lamps[i][j] ? 'lamp on' : 'lamp off';
                lamp.addEventListener('click', () => {
                    toggleLamp(i, j); // Lámpa állapotának megváltoztatása kattintásra
                    displayLamps(); // Újra megjelenítjük a lámpákat
                    if (checkAllOff()) {
                        alert("Hurrá, meghosszabítottad a Föld életét!");
                    }
                });
                lampContainer.appendChild(lamp);
            }
            lampContainer.appendChild(document.createElement('br')); // Sortörés a lámpák között
        }
    }

    // Függvény az új játék kezdésére
    function newGame() {
        lamps = []; // Lámpák törlése
        // Lámpák inicializálása
        for (let i = 0; i < n; i++) {
            lamps[i] = [];
            for (let j = 0; j < n; j++) {
                // 20% valószínűséggel felkapcsolt állapotba helyezzük a lámpát
                lamps[i][j] = Math.random() < 0.2 ? 1 : 0;
            }
        }
        displayLamps(); // Lámpák megjelenítése az új játékhoz
    }

    // Függvény az összes lámpa lekapcsolásának ellenőrzésére
    function checkAllOff() {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (lamps[i][j] === 1) return false; // Ha van felkapcsolt lámpa, akkor még nincs kész
            }
        }
        return true; // Ha nincs felkapcsolt lámpa, akkor kész vagyunk
    }

    // Új játék eseménykezelő
    newGameButton.addEventListener('click', newGame);

    // Első játék indítása
    newGame();
});
