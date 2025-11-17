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
