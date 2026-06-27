// modules/bottom-nav.js - App-like Navigation
export function initBottomNav() {
    const navRoot = document.getElementById('nav-root');
    if (navRoot) {
        navRoot.innerHTML = `
            <div class="bottom-nav">
                <a href="#home"><span>🏠</span>Home</a>
                <a href="#wallet"><span>💰</span>Wallet</a>
                <a href="#tools"><span>🛠️</span>Tools</a>
                <a href="#profile"><span>👤</span>Profile</a>
            </div>
        `;
    }
}
