var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname) {
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
    if (tabcontents[i].id === tabname) {
      tabcontents[i].classList.add("active-tab");
    }
  }
  event.currentTarget.classList.add("active-link");
}

document.querySelectorAll(".submenu > a").forEach((menu) => {
  menu.addEventListener("click", function (e) {
    e.preventDefault();
    const submenuItems = this.nextElementSibling;
    submenuItems.classList.toggle("open");
    this.querySelector(".fas.fa-chevron-down").classList.toggle("rotate");
  });
});

document.addEventListener('DOMContentLoaded', () => {
const innerContainer = document.querySelector('.logoloop-inner');
        const originalList = document.getElementById('original-list');

        if (!innerContainer || !originalList) {
            console.error('Elementos necessários para o logoloop não encontrados.');
            return;
        }

        // 1. Clonar a lista o suficiente para criar o efeito contínuo
        // Vamos duplicar a lista duas vezes, resultando em 3 cópias no total (original + 2 clones)
        const totalClones = 2; 
        for (let i = 0; i < totalClones; i++) {
            const clone = originalList.cloneNode(true); // Clonar com todo o conteúdo
            clone.removeAttribute('id'); // Remover o ID da cópia
            clone.setAttribute('aria-hidden', 'true'); // Marcar como oculta para leitores de tela
            innerContainer.appendChild(clone);
        }

        // 2. Calcular a largura total da lista original.
        // O valor exato é necessário para que o CSS translate mova exatamente o 
        // comprimento de uma lista para a esquerda (passando a primeira cópia).
        // Usamos requestAnimationFrame para garantir que a largura seja calculada após o layout
        requestAnimationFrame(() => {
            const originalWidth = originalList.offsetWidth;

            // 3. Aplicar a largura total como uma variável CSS no contêiner interno
            // Isso define o valor 'var(--scroll-distance)' usado no @keyframes scroll-x
            innerContainer.style.setProperty('--scroll-distance', `${originalWidth}px`);
        });
  // Seleciona os elementos
  const sidebar = document.querySelector('.sidebar');
  const openBtn = document.getElementById('menu-toggle-open');
  const closeBtn = document.getElementById('menu-toggle-close');

  // Função para abrir o menu
  function openSidebar() {
    sidebar.classList.add('sidebar-open');
  }

  // Função para fechar o menu
  function closeSidebar() {
    sidebar.classList.remove('sidebar-open');
  }

  // Adiciona os eventos de clique
  openBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  const projectItems = document.querySelectorAll('.project-item');
  const modal = document.getElementById('project-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeModalBtn = document.querySelector('.close-modal');

  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDate = document.getElementById('modal-date');
  const modalDescription = document.getElementById('modal-description');
  const modalDetails = document.getElementById('modal-details');
  const modalLinkProject = document.getElementById('modal-link-project');
  const modalLinkRepo = document.getElementById('modal-link-repo');
  const modalLinkLinkedin = document.getElementById('modal-link-linkedin');


  projectItems.forEach(item => {
    item.addEventListener('click', () => {
      const image = item.dataset.image;
      const title = item.dataset.title;
      const date = item.dataset.date;
      const description = item.dataset.description;
      const details = item.dataset.details;
      const linkProject = item.dataset.linkProject;
      const linkRepo = item.dataset.linkRepo;
      const linkLinkedin = item.dataset.linkLinkedin;

      modalImage.src = image;
      modalTitle.textContent = title;
      modalDate.textContent = date;
      modalDescription.innerHTML = description; // Usamos innerHTML para permitir <br>
      modalDetails.innerHTML = details;


      toggleLink(modalLinkProject, linkProject);
      toggleLink(modalLinkRepo, linkRepo);
      toggleLink(modalLinkLinkedin, linkLinkedin);

      modal.classList.add('active');
      overlay.classList.add('active');
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  };

  const toggleLink = (element, link) => {
    if (link) {
      element.href = link;
      element.style.display = 'inline-block'; // Mostra o botão
    } else {
      element.style.display = 'none'; // Esconde o botão
    }
  };

  closeModalBtn.addEventListener('click', closeModal); // Clicar no 'X'
  overlay.addEventListener('click', closeModal);      // Clicar fora do modal (no overlay)

});
