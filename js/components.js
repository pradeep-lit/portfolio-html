function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const activePage = sidebar.dataset.active;

    const navItems = [
        { label: 'OVERVIEW', href: 'index.html' },
        { label: 'PROJECTS', href: 'projects.html' },
        { label: 'EXPERIENCE', href: 'experience.html' },
        { label: 'CONTACT', href: 'contact.html' },
    ];

    const navLinks = navItems.map(item => {
        const isActive = item.label.toLowerCase() === activePage;
        if (isActive) {
            return `<a class="block font-mono text-sm uppercase underline decoration-1 underline-offset-4 font-bold" href="${item.href}">${item.label}</a>`;
        }
        return `<a class="block font-mono text-sm uppercase hover:underline decoration-1 underline-offset-4 text-muted hover:text-primary dark:hover:text-white transition-colors" href="${item.href}">${item.label}</a>`;
    }).join('\n');

    sidebar.innerHTML = `
<aside class="w-full md:w-80 md:fixed md:h-screen border-r border-primary/20 dark:border-zinc-800 p-8 lg:p-12 flex flex-col justify-between z-50 bg-background-light dark:bg-background-dark">
<div class="space-y-12">
<div>
<h1 class="font-heading text-2xl font-semibold tracking-tight uppercase">Pradeep Chauhan</h1>
<p class="font-mono text-xs text-muted mt-2 uppercase tracking-widest">SOFTWARE ENGINEER</p>
</div>
<nav class="mt-24 space-y-6">
${navLinks}
</nav>
</div>
<div class="flex flex-col gap-6 pt-12 md:pt-0">
<a class="group flex items-center justify-between w-full py-4 px-4 bg-primary dark:bg-white text-background-light dark:text-primary hover:bg-background-light dark:hover:bg-primary hover:text-primary dark:hover:text-white border border-primary dark:border-white transition-all font-mono text-xs uppercase tracking-widest font-bold" href="assets/PRADEEP_CHAUHAN.pdf" download>
<span>Download CV</span>
<span class="material-symbols-outlined text-sm transform group-hover:translate-y-1 transition-transform">download</span>
</a>
<div class="flex gap-4 font-mono text-xs uppercase">
<a class="hover:underline" href="https://github.com/pradeep-lit">GH</a>
<a class="hover:underline" href="https://www.linkedin.com/in/pradeep-chauhan-sixnine/">IN</a>
<a class="hover:underline" href="#">TW</a>
</div>
</div>
</aside>`;
}

function initDarkModeToggle() {
    const toggle = document.getElementById('dark-toggle');
    if (!toggle) return;

    toggle.innerHTML = `
<button class="fixed bottom-8 right-8 w-12 h-12 bg-primary dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg z-[100] hover:scale-110 transition-transform" onclick="document.documentElement.classList.toggle('dark')">
<span class="material-icons-outlined">dark_mode</span>
</button>`;
}

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initDarkModeToggle();
});
