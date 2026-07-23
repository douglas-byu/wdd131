// ===== ARRAY DE TEMPLOS =====
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake City Utah",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 253015,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 58000,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Roma Itália",
    localizacao: "Roma, Itália",
    consagracao: "2019, 10 de março",
    area: 40000,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"
  }
];

// ===== FUNÇÃO PARA CRIAR CARTÕES DE TEMPLO =====
function criarCartaoTemplo(templo) {
    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = templo.urlDaImagem;
    img.alt = templo.nomeDoTemplo;
    img.loading = 'lazy';
    img.width = 400;
    img.height = 250;

    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `
        <strong>${templo.nomeDoTemplo}</strong><br>
        <span class="label">Localização:</span> ${templo.localizacao}<br>
        <span class="label">Dedicado:</span> ${templo.consagracao}<br>
        <span class="label">Tamanho:</span> ${templo.area.toLocaleString()} sq ft
    `;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    return figure;
}

// ===== FUNÇÃO PARA EXIBIR TEMPLOS NA GALERIA =====
function exibirTemplos(lista) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    lista.forEach(templo => {
        gallery.appendChild(criarCartaoTemplo(templo));
    });
}

// ===== LÓGICA DE FILTRAGEM =====
function filtrarTemplos(filtro) {
    const tituloSecao = document.getElementById('titulo-secao');

    let resultado;

    if (filtro === 'Página Inicial') {
        resultado = templos;
    } else if (filtro === 'Antigo') {
        resultado = templos.filter(t => parseInt(t.consagracao) < 1900);
    } else if (filtro === 'Novo') {
        resultado = templos.filter(t => parseInt(t.consagracao) > 2000);
    } else if (filtro === 'Grande') {
        resultado = templos.filter(t => t.area > 90000);
    } else if (filtro === 'Pequeno') {
        resultado = templos.filter(t => t.area < 10000);
    }

    tituloSecao.textContent = filtro;
    exibirTemplos(resultado);
}

// ===== EVENTOS DE NAVEGAÇÃO =====
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const filtro = this.id;
        filtrarTemplos(filtro);

        // Fechar menu hamburger ao clicar em mobile
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
            document.getElementById('hamburger-btn').textContent = '☰';
        }
    });
});

// ===== MENU HAMBURGER =====
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    hamburgerBtn.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
});

// ===== ANO DINÂMICO NO FOOTER =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== DATA DA ÚLTIMA MODIFICAÇÃO =====
document.getElementById('last-modified').textContent = document.lastModified;

// ===== EXIBIR TODOS OS TEMPLOS AO CARREGAR =====
exibirTemplos(templos);
