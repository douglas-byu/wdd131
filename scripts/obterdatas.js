// obterdatas.js
// Script para exibir a data da última modificação do documento

const lastModifiedElement = document.getElementById('lastModified');

if (lastModifiedElement) {
    const lastModified = new Date(document.lastModified);

    const day = String(lastModified.getDate()).padStart(2, '0');
    const month = String(lastModified.getMonth() + 1).padStart(2, '0');
    const year = lastModified.getFullYear();
    const hours = String(lastModified.getHours()).padStart(2, '0');
    const minutes = String(lastModified.getMinutes()).padStart(2, '0');
    const seconds = String(lastModified.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    lastModifiedElement.textContent = `Last Modification: ${formattedDate}`;
}
