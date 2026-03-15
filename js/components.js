function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const activePage = sidebar.dataset.active;

    const navItems = [
        { label: 'OVERVIEW', href: 'index.html' },
        { label: 'PROJECTS', href: 'projects.html' },
        { label: 'SKILLS', href: 'skills.html' },
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
<p class="font-mono text-xs text-muted mt-2 uppercase tracking-widest">BACKEND ENGINEER</p>
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

function applyTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else if (saved === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    } else {
        // No preference saved — follow system
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    }
    updateToggleIcon();
}

function updateToggleIcon() {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    const isDark = document.documentElement.classList.contains('dark');
    icon.textContent = isDark ? 'light_mode' : 'dark_mode';
}

function initDarkModeToggle() {
    const toggle = document.getElementById('dark-toggle');
    if (!toggle) return;

    toggle.innerHTML = `
<button class="fixed bottom-8 right-8 w-12 h-12 bg-primary dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg z-[100] hover:scale-110 transition-transform" onclick="toggleTheme()">
<span id="theme-icon" class="material-icons-outlined">dark_mode</span>
</button>
<button id="scroll-top" class="fixed bottom-8 right-24 w-12 h-12 bg-primary dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center shadow-lg z-[100] hover:scale-110 transition-all opacity-0 pointer-events-none" onclick="window.scrollTo({top:0,behavior:'smooth'})">
<span class="material-symbols-outlined">arrow_upward</span>
</button>`;

    updateToggleIcon();

    const scrollBtn = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
            scrollBtn.classList.add('opacity-100');
        } else {
            scrollBtn.classList.add('opacity-0', 'pointer-events-none');
            scrollBtn.classList.remove('opacity-100');
        }
    });
}

function initScrollbar() {
    const wrapper = document.createElement('div');
    wrapper.id = 'scrollbar-wrapper';
    wrapper.innerHTML = '<div class="scrollbar"></div>';
    document.body.appendChild(wrapper);

    const bar = wrapper.querySelector('.scrollbar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (docHeight <= 0) {
            wrapper.style.opacity = '0';
            return;
        }

        const scrollPercent = scrollTop / docHeight;
        // Full-height bar: starts at -100vh (hidden above), moves to 0vh (fully visible)
        const translateY = -100 + (scrollPercent * 100);

        bar.style.transform = `translateY(${translateY}vh)`;
        wrapper.style.opacity = scrollTop > 10 ? '1' : '0';
    });
}

// Apply theme immediately (before DOM loads) to prevent flash
applyTheme();

document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    initDarkModeToggle();
    initScrollbar();

    // Listen for system theme changes (when no manual override)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!localStorage.getItem('theme')) {
            applyTheme();
            updateToggleIcon();
        }
    });
});
