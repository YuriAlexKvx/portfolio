document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    function toggleSidebar() {
        sidebar.classList.toggle('sidebar-hidden');
        document.body.classList.toggle('sidebar-active');
        overlay.classList.toggle('active');
    }

    sidebarToggle.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    document.querySelectorAll('#sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            toggleSidebar();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !sidebar.classList.contains('sidebar-hidden')) {
            toggleSidebar();
        }
    });
});