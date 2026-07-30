document.addEventListener("DOMContentLoaded", () => {
    // Pega o número atual de reviews do localStorage, ou 0 se não existir
    let numReviews = Number(window.localStorage.getItem("reviews-counter")) || 0;

    // Incrementa por 1 já que a página de avaliação foi carregada
    numReviews++;

    // Salva o novo valor de volta no localStorage
    window.localStorage.setItem("reviews-counter", numReviews);

    // Atualiza o contador na página
    const counterElement = document.getElementById("review-counter");
    if (counterElement) {
        counterElement.textContent = numReviews;
    }
});
