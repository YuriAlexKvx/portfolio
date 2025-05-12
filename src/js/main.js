const projects = [
    {
        id: 1,
        title: "OMSYS",
        description: "Sistema empresarial completo para integração entre equipe e clientes.",
        thumbnail: "src/img/projects/omsys1.png",
        tags: ["Java", "Springboot", "MySQL", "AWS", "RDS", "EC2", "S3", "HTML", "CSS", "JavaScript"]
    }
    
];

function renderProjects() {
    const container = document.getElementById('project-cards');
    
    // Loading state
    container.innerHTML = Array(6).fill(0).map(() => `
        <div class="card loading">
            <div class="card-header"></div>
            <div class="card-content">
                <h3 class="card-title">Loading...</h3>
                <p class="card-description">Loading description...</p>
                <div class="card-tags">
                    <span class="tag">Loading</span>
                </div>
            </div>
        </div>
    `).join('');

    // Render actual content
    setTimeout(() => {
        container.innerHTML = projects.map(project => `
            <div class="card" 
                 onclick="openProject(${project.id})"
                 role="button"
                 tabindex="0"
                 aria-label="Ver detalhes do projeto ${project.title}">
                <div class="card-header">
                    <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
                </div>
                <div class="card-content">
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-description">${project.description}</p>
                    <div class="card-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        addCardAccessibility();
    }, 1000);
}

function addCardAccessibility() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

function openProject(id) {
    const project = projects.find(p => p.id === id);
    localStorage.setItem('currentProjectId', id.toString());
    window.location.href = 'project.html';
}

document.addEventListener('DOMContentLoaded', renderProjects);
