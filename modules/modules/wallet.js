// modules/wallet.js - Wallet बैलेंस के लिए
export function initWallet() {
    const dashboardRoot = document.getElementById('dashboard-root');
    if (dashboardRoot) {
        dashboardRoot.innerHTML += `
            <section class="wallet-card">
                <h3>My Wallet</h3>
                <div class="balance">₹0.00</div>
                <button class="btn-secondary">Add Funds</button>
            </section>
        `;
    }
}
