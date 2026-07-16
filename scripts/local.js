/**
 * local.js – Cabo Verde
 *
 * Requisitos atendidos:
 *  1. Exibe o ano atual e a data de última modificação no rodapé.
 *  2. Calcula e exibe a Sensação Térmica (Wind Chill) na seção de Clima.
 *  3. A função calcularSensacaoTermica só é chamada quando:
 *       – Temperatura <= 10 °C  E
 *       – Velocidade do vento > 4.8 km/h
 *     Caso contrário, exibe "N/A".
 */

// ── Variáveis estáticas de clima (Praia, Cabo Verde) ─────────────────────────
const temperatura   = 25;   // °C
const velocidadeVento = 25; // km/h

// ── 1. Rodapé ─────────────────────────────────────────────────────────────────
/**
 * Preenche o ano atual e a data de última modificação no rodapé da página.
 */
function atualizarRodape() {
  const elAno      = document.getElementById('current-year');
  const elMod      = document.getElementById('last-modified');

  if (elAno) {
    elAno.textContent = new Date().getFullYear();
  }

  if (elMod) {
    elMod.textContent = document.lastModified;
  }
}

// ── 2. Sensação Térmica ───────────────────────────────────────────────────────
/**
 * Calcula o fator de sensação térmica (Wind Chill) usando a fórmula métrica
 * canadense (temperatura em °C, vento em km/h).
 *
 * Fórmula: WC = 13.12 + 0.6215T − 11.37V^0.16 + 0.3965T × V^0.16
 *
 * @param {number} temp  – Temperatura em °C
 * @param {number} vento – Velocidade do vento em km/h
 * @returns {string}     – Sensação térmica formatada com uma casa decimal
 */
function calcularSensacaoTermica(temp, vento) {
  return (
    13.12 +
    0.6215 * temp -
    11.37  * Math.pow(vento, 0.16) +
    0.3965 * temp * Math.pow(vento, 0.16)
  ).toFixed(1);
}

/**
 * Determina o valor da sensação térmica a ser exibido:
 * – Se a temperatura <= 10 °C E o vento > 4.8 km/h → calcula e exibe o valor
 * – Caso contrário → exibe "N/A"
 *
 * @param {number} temp  – Temperatura em °C
 * @param {number} vento – Velocidade do vento em km/h
 * @returns {string}     – Valor da sensação térmica ou "N/A"
 */
function obterSensacaoTermica(temp, vento) {
  if (temp <= 10 && vento > 4.8) {
    return `${calcularSensacaoTermica(temp, vento)} °C`;
  }
  return 'N/A';
}

/**
 * Atualiza todos os elementos de sensação térmica na página.
 */
function exibirSensacaoTermica() {
  const resultado = obterSensacaoTermica(temperatura, velocidadeVento);

  // Desktop (overlay sobre a imagem)
  const elDesktop = document.getElementById('wind-chill');
  if (elDesktop) {
    elDesktop.textContent = resultado;
  }

  // Mobile (seção abaixo da imagem)
  const elMobile  = document.getElementById('wind-chill-mobile');
  if (elMobile) {
    elMobile.textContent = resultado;
  }
}

// ── Inicialização (executada após o DOM estar carregado) ──────────────────────
document.addEventListener('DOMContentLoaded', () => {
  atualizarRodape();
  exibirSensacaoTermica();
});
