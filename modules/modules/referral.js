// modules/referral.js - Referral सिस्टम के लिए
export function initReferral() {
    const dashboardRoot = document.getElementById('dashboard-root');
    if (dashboardRoot) {
        dashboardRoot.innerHTML += `
            <section class="referral-card">
                <h3>Refer & Earn</h3>
                <p>Share your link and earn rewards.</p>
                <input type="text" value="krya.com/ref/mukesh" readonly>
                <button class="btn-primary">Copy Link</button>
            </section>
        `;
    }
}
