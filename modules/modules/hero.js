// modules/hero.js - Hero Section के लिए
export function initHero() {
    const heroRoot = document.getElementById('hero-root');
    if (heroRoot) {
        heroRoot.innerHTML = `
            <section class="hero">
                <h1>Earn • Learn • Grow</h1>
                <p>India's largest digital ecosystem for rewards and productivity.</p>
                <div class="cta-container">
                    <button id="cta-join" class="btn-primary">Join Mukesh Global</button>
                </div>
            </section>
        `;
    }
}
