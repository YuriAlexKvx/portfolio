const projectsDetails = {
    1: {
        id: 1,
        title: "OMSYS",
        summary: "O OMSYS é uma plataforma web desenvolvida para centralizar processos internos e melhorar a comunicação entre os setores da empresa e seus clientes. Criado para uma empresa que está ingressando no mercado, o sistema oferece funcionalidades que atendem diferentes áreas, otimizando a organização e oferecendo uma experiência integrada para colaboradores e usuários finais.",
        images: [
            {
                url: "src/img/projects/omsys1.png",
                title: "Tela de Login",
                description: "Interface de autenticação do sistema com suporte a múltiplos acessos simultâneos."
            },
            {
                url: "src/img/projects/omsys2.png",
                title: "Dashboard Principal",
                description: "Dashboard interativo com sidebar de navegação e abas dinâmicas."
            },
            {
                url: "src/img/projects/omsys3.png",
                title: "Gerenciamento de Documentos",
                description: "Aba onde o usuário pode gerenciar documentos e arquivos de forma eficiente."
            }
        ],
        problem: "Antes do desenvolvimento do OMSYS, a empresa dependia de planilhas e trocas constantes de e-mails para realizar seus processos internos. Esse fluxo descentralizado não apenas dificultava a organização e o controle das informações, como também sobrecarregava o e-mail corporativo, comprometendo sua performance e armazenamento. A ausência de um sistema centralizado estava gerando retrabalho, lentidão nas respostas e riscos de perda de dados importantes — obstáculos críticos para uma empresa em expansão.",
        objective: "O OMSYS foi desenvolvido com o objetivo de centralizar e modernizar os processos da empresa, garantindo mais agilidade, segurança e organização. A plataforma busca reduzir o tempo de resposta ao permitir que clientes e colaboradores executem tarefas de forma imediata e automatizada, eliminando a dependência de processos manuais. Além disso, o sistema assegura que todos os dados e documentos estejam armazenados em nuvem, oferecendo um ambiente digital seguro, acessível e eficiente, adequado às necessidades de uma empresa em crescimento.",
        features: [
            "Login seguro para clientes e funcionários, com acessos personalizados por tipo de usuário",
            "Painel administrativo completo, com visão geral das operações da empresa",
            "Controle de status de carga, permitindo o acompanhamento em tempo real",
            "Armazenamento em nuvem de documentos, utilizando diretamente EC2, RDS e S3 da AWS",
            "Emissão automática de relatórios, com dados organizados e exportáveis",
            "Envio de e-mails via API, facilitando a comunicação externa automatizada",
            "Abertura e gerenciamento de chamados para o setor de T.I, otimizando o suporte técnico",
            "Comunicação interna entre setores, com notificações sobre eventos, reuniões e atualizações",
            "Controle de permissões por usuário, garantindo segurança e personalização de acesso",
            "Automação de tarefas operacionais, como atualizações de status e organização de dados"
        ],
        techStack: [
            "Java 17",
            "Spring Boot",
            "Spring Security",
            "Spring Data JPA",
            "MySQL Server",
            "MySQL Workbench",
            "HTML5",
            "CSS3",
            "JavaScript",
            "Amazon EC2",
            "Amazon RDS",
            "Amazon S3",
            "Git",
            "GitHub",
            "Lombok",
            "Maven",
            "APIs de E-mail"
        ],
        timeline: "4 meses de desenvolvimento, com a conclusão da fase de gerenciamento de documentos em 12/05/2025. O projeto ainda está em andamento e em constante aprimoramento.",
        results: [
            "Aumento de 150% na eficiência operacional, com processos automatizados e armazenamento em nuvem, eliminando a sobrecarga de e-mails e otimizando o tempo nas tarefas diárias.",
            "Redução de 30% nos erros de comunicação, devido à centralização das informações e integração entre setores.",
            "Melhoria na segurança de dados, com a utilização de serviços da AWS (EC2, RDS, S3), garantindo acesso controlado e backup contínuo."
        ],
        challenges: [
            "Integração com sistemas legados, que exigiram ajustes técnicos e adaptação do sistema para garantir a compatibilidade.",
            "Gestão da migração de processos, especialmente aqueles que eram executados manualmente ou por planilhas, para uma plataforma totalmente digital e automatizada.",
            "Garantir a escalabilidade do sistema, considerando o crescimento da empresa e a expansão de funcionalidades planejadas."
        ],
        role: "Tech Lead e Desenvolvedor Full Stack, sendo responsável por toda a arquitetura do sistema, decisões técnicas, implementação de funcionalidades e integração com a AWS. Coordenação do time e interação com o cliente para garantir a entrega conforme os requisitos, sempre visando a eficiência e qualidade do sistema."
    }
}
;

document.addEventListener('DOMContentLoaded', () => {
    const projectId = localStorage.getItem('currentProjectId');
    const project = projectsDetails[projectId];
    if (!project || !project.images) return;

    const slidesContainer = document.getElementById('carousel-slides');
    const dotsContainer = document.getElementById('carousel-dots');
    const slideTitle = document.getElementById('slide-title');
    const slideDescription = document.getElementById('slide-description');
    let currentSlide = 0;

    // Limpar containers antes de adicionar novos elementos
    slidesContainer.innerHTML = '';
    dotsContainer.innerHTML = '';

    project.images.forEach((image, index) => {
        slidesContainer.innerHTML += `
            <div class="carousel-slide">
                <img src="${image.url}" 
                     alt="${image.title}" 
                     loading="${index === 0 ? 'eager' : 'lazy'}">
            </div>
        `;
        dotsContainer.innerHTML += `
            <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></button>
        `;
    });

    function updateCarousel() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        const currentImage = project.images[currentSlide];
        slideTitle.textContent = currentImage.title || '';
        slideDescription.textContent = currentImage.description || '';
        
        if (currentImage.projectTitle) {
            document.getElementById('project-title').textContent = currentImage.projectTitle;
        } else {
            document.getElementById('project-title').textContent = project.title;
        }
    }

    document.getElementById('prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide - 1 + project.images.length) % project.images.length;
        updateCarousel();
    });

    document.getElementById('next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentSlide = (currentSlide + 1) % project.images.length;
        updateCarousel();
    });

    document.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            currentSlide = parseInt(dot.dataset.slide);
            updateCarousel();
        });
    });

    updateCarousel();
    
    let autoplayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % project.images.length;
        updateCarousel();
    }, 5000);

    slidesContainer.parentElement.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    slidesContainer.parentElement.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % project.images.length;
            updateCarousel();
        }, 5000);
    });

    // Função auxiliar para renderizar conteúdo de forma segura
    function setElementContent(elementId, content) {
        const element = document.getElementById(elementId);
        if (!element) return;

        if (Array.isArray(content)) {
            element.innerHTML = content
                .map(item => `<li>${item}</li>`)
                .join('');
        } else {
            element.innerHTML = content;
        }
    }

    // Renderização do conteúdo do projeto
    setElementContent('project-title', project.title);
    setElementContent('project-summary', project.summary);
    setElementContent('project-problem', project.problem);
    setElementContent('project-objective', project.objective);
    setElementContent('project-features', project.features);
    setElementContent('project-tech-stack', project.techStack.map(tech => 
        `<span class="tech-item">${tech}</span>`).join(''));
    setElementContent('project-timeline', project.timeline);
    setElementContent('project-results', project.results);
    setElementContent('project-challenges', project.challenges);
    setElementContent('project-role', project.role);
});

function toggleSection(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    content.classList.toggle('expanded');
    icon.classList.toggle('expanded');

    const allSections = document.querySelectorAll('.section-content');
    const allIcons = document.querySelectorAll('.toggle-icon');
    
    allSections.forEach(section => {
        if (section !== content && section.classList.contains('expanded')) {
            section.classList.remove('expanded');
        }
    });
    
    allIcons.forEach(i => {
        if (i !== icon && i.classList.contains('expanded')) {
            i.classList.remove('expanded');
        }
    });
}
