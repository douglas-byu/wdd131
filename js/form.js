const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp generator",
    averagerating: 5.0
  }
];

// Esperar o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById('product');

    // Popula o select com os produtos usando o array fornecido
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id; // Usa o id do objeto como value
        option.textContent = product.name; // Usa o name do objeto como texto visível
        productSelect.appendChild(option);
    });

    // Atualiza footer
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    const modifiedEl = document.getElementById('lastModified');
    if (modifiedEl) modifiedEl.textContent = `Última Modificação: ${document.lastModified}`;
});
