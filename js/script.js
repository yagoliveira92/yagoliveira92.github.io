// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', (event) => {

    // JavaScript para o Menu Mobile
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Fecha o menu mobile ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Dados das Habilidades
    const skillsData = [
        { name: 'Flutter', icon: 'fa-brands fa-flutter' },
        { name: 'Dart', icon: 'fas fa-code' },
        { name: 'iOS', icon: 'fa-brands fa-apple' },
        { name: 'Serverpod', icon: 'fas fa-server' },
        { name: 'Firebase', icon: 'fas fa-fire' },
        { name: 'Angular', icon: 'fab fa-angular' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'TypeScript', icon: 'fas fa-bold' },
        { name: 'CI/CD', icon: 'fas fa-cogs' },
        { name: 'Android', icon: 'fab fa-android' },
    ];

    const skillTreeContainer = document.getElementById('skill-tree-container');
    
    // Função para criar os nós de habilidade
    function createSkillNodes() {
        if (!skillTreeContainer) return; // Sai se o container não existir
        
        skillTreeContainer.innerHTML = '';
        const containerWidth = skillTreeContainer.offsetWidth;
        const containerHeight = skillTreeContainer.offsetHeight;
        const center = { x: containerWidth / 2, y: containerHeight / 2 };
        const radius = Math.min(containerWidth, containerHeight) / 2 * 0.8;

        skillsData.forEach((skill, index) => {
            const angle = (index / skillsData.length) * 2 * Math.PI - (Math.PI / 2);
            const x = center.x + radius * Math.cos(angle);
            const y = center.y + radius * Math.sin(angle);

            const node = document.createElement('div');
            node.className = 'skill-node absolute flex items-center justify-center cursor-pointer rounded-full w-20 h-20';
            node.style.left = `${x - 40}px`;
            node.style.top = `${y - 40}px`;
            node.style.zIndex = Math.round(y);
            node.innerHTML = `<i class="${skill.icon} text-3xl"></i><span class="absolute -top-8 text-xs bg-white primary-color p-1 rounded shadow-md opacity-0 transition-opacity duration-300 pointer-events-none">${skill.name}</span>`;

            node.addEventListener('mouseenter', () => node.querySelector('span').classList.remove('opacity-0'));
            node.addEventListener('mouseleave', () => node.querySelector('span').classList.add('opacity-0'));

            skillTreeContainer.appendChild(node);
        });
    }
    
    // Cria os nós quando a página carrega
    createSkillNodes();
    // Recria os nós se a janela for redimensionada para ajustar o layout
    window.addEventListener('resize', createSkillNodes);
});