/* =========================================================
   OINK INDUSTRIES — script.js
   Toda la lógica del sitio
   ========================================================= */

/* ---------------------------------------------------------
   CONFIGURACIÓN DE ENLACES
   Cambia aquí las URLs y se aplicarán automáticamente
   a TODOS los enlaces y botones correspondientes.
   --------------------------------------------------------- */
const CONFIG = {
  buyUrl: "https://github.com/oinkhq/oink",   // URL futura: Launchhood
  chartUrl: "#", // URL futura: Uniswap V3
};

/* ---------------------------------------------------------
   Al cargar la página, asignar las URLs del CONFIG a:
   - Menú superior: BUY y CHART
   - Botones inferiores: BUY $OINK y VIEW CHART
   (todos los elementos con las clases .js-buy y .js-chart)
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // Todos los enlaces/botones de BUY
  document.querySelectorAll(".js-buy").forEach((el) => {
    el.setAttribute("href", CONFIG.buyUrl);
  });

  // Todos los enlaces/botones de CHART
  document.querySelectorAll(".js-chart").forEach((el) => {
    el.setAttribute("href", CONFIG.chartUrl);
  });
});
