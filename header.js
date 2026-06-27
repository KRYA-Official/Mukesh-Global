// modules/header.js - यह हेडर को हैंडल करेगा

export function initHeader() {
    const headerRoot = document.getElementById('header-root');
    if (headerRoot) {
        headerRoot.innerHTML = `
            <header>
                <nav>
                    <div class="logo">KRYA - Mukesh Global</div>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#dashboard">Dashboard</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}
