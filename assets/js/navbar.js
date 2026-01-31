document.addEventListener('DOMContentLoaded', () => {
    // 1. Identify Current Page
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html'; // Default to index.html if empty

    // 2. Define Navigation Items
    const navItems = [
        {
            name: 'Home',
            href: 'index.html',
            iconInner: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />',
            viewBox: '0 0 24 24'
        },
        {
            name: 'Cafe',
            href: 'cafe.html',
            iconInner: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 8h1.4c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-1.4c0 .83.67 1.5 1.5 1.5H19a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2h.1c.83 0 1.5-.67 1.5-1.5H5.4c-.83 0-1.5-.67-1.5-1.5S4.57 8 5.4 8H6" />',
            viewBox: '0 0 24 24'
        },
        {
            name: 'Arena',
            href: 'arena.html',
            iconInner: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />',
            viewBox: '0 0 24 24'
        },
        {
            name: 'Play',
            href: 'billiards.html',
            iconInner: '<circle cx="12" cy="12" r="10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><circle cx="12" cy="12" r="4" fill="currentColor" />',
            viewBox: '0 0 24 24'
        }
    ];

    // 3. Generate HTML
    const navHtml = navItems.map(item => {
        const isActive = (page === item.href) || (page === '' && item.href === 'index.html');

        if (isActive) {
            // ACTIVE STATE (Amber/White Theme)
            return `
            <a href="${item.href}" class="flex flex-col items-center justify-center space-y-1">
                <div class="p-2 bg-white/25 rounded-xl backdrop-blur-sm transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="${item.viewBox}" stroke="currentColor">
                        ${item.iconInner}
                    </svg>
                </div>
                <span class="text-[10px] font-bold text-white">${item.name}</span>
            </a>`;
        } else {
            // INACTIVE STATE
            return `
            <a href="${item.href}" class="flex flex-col items-center justify-center space-y-1 group">
                <div class="p-2 rounded-xl group-hover:bg-white/10 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brand-charcoal/70 group-hover:text-white transition-colors" fill="none" viewBox="${item.viewBox}" stroke="currentColor">
                        ${item.iconInner}
                    </svg>
                </div>
                <span class="text-[10px] font-medium text-brand-charcoal/70 group-hover:text-white transition-colors">${item.name}</span>
            </a>`;
        }
    }).join('');

    // 4. Create Container and Inject
    const navContainer = document.createElement('div');
    navContainer.className = "fixed md:hidden transition-transform duration-300 ease-in-out";
    navContainer.style.bottom = "1.5rem";
    navContainer.style.left = "1rem";
    navContainer.style.right = "1rem";
    navContainer.style.zIndex = "9999"; // Match the high z-index from original
    navContainer.innerHTML = `
        <div class="bg-brand-amber border border-white/20 shadow-[0_8px_32px_rgba(245,158,11,0.3)] rounded-2xl p-3 flex justify-between items-center px-6">
            ${navHtml}
        </div>
    `;

    document.body.appendChild(navContainer);
});
