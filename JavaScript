// --- Lógica del Juego ---
let clicks = 0;
let multiplicador_clicks = 1;
let costo_renacimiento = 100;
const multiplicador_por_renacimiento = 2;
// Nota: La lógica de Recompensa se ha simplificado aquí para enfocarse en el contador y renacimiento.

// --- Referencias a elementos del DOM ---
const clicksContador = document.getElementById('clicks-contador');
const multiplicadorContador = document.getElementById('multiplicador-contador');
const botonClick = document.getElementById('boton-click');
const botonRenacer = document.getElementById('boton-renacer');
const costoRenacimientoDisplay = document.getElementById('costo-renacimiento');

// --- Funciones del Juego ---

function actualizarDisplay() {
    // Actualiza los textos en el HTML
    clicksContador.textContent = clicks;
    multiplicadorContador.textContent = `x${multiplicador_clicks}`;
    costoRenacimientoDisplay.textContent = `Costo: ${costo_renacimiento} Clics`;

    // Habilita/deshabilita el botón de Renacer
    if (clicks >= costo_renacimiento) {
        botonRenacer.disabled = false;
        botonRenacer.textContent = "¡RENACER DISPONIBLE!";
    } else {
        botonRenacer.disabled = true;
        botonRenacer.textContent = `Renacer (Faltan ${costo_renacimiento - clicks} Clics)`;
    }
}

function darClick() {
    // Aumenta los clics
    clicks += 1 * multiplicador_clicks;
    actualizarDisplay();
}

function renacer() {
    if (clicks >= costo_renacimiento) {
        // Ejecuta el renacimiento
        clicks = 0; // Reinicia Clics
        multiplicador_clicks *= multiplicador_por_renacimiento; // Aumenta Multiplicador
        costo_renacimiento *= 2; // Aumenta Costo
        
        alert("🌟 ¡RENACIMIENTO EXITOSO! 🌟 Tu multiplicador se ha duplicado.");
        actualizarDisplay(); // Actualiza todos los contadores
    } else {
        alert(`Clics insuficientes. Necesitas ${costo_renacimiento} clics para renacer.`);
    }
}

// --- Event Listeners (Detectores de Clic) ---

// 1. Asigna la función darClick() al botón principal
botonClick.addEventListener('click', darClick);

// 2. Asigna la función renacer() al botón de renacimiento
botonRenacer.addEventListener('click', renacer);

// Inicializa el display al cargar la página
actualizarDisplay();
