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
  buyUrl: "https://launchhood.com/token/0x0374459876b8bfb39811366B699E77F2e241c0De",   // 
  chartUrl: "https://dexscreener.com/robinhood/0x38b7db71aeca1ffcf1abcb1e7ce1147fa05c8d1f", // 
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
