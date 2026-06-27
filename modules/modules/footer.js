// modules/footer.js - Footer सेक्शन के लिए
export function initFooter() {
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) {
        footerRoot.innerHTML = `
            <footer>
                <p>&copy; 2026 KRYA - Mukesh Global. All rights reserved.</p>
            </footer>
        `;
    }
}
