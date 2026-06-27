// core/app.js - अपडेटेड वर्जन
import { initHeader } from '../modules/header.js';
import { initHero } from '../modules/hero.js';
import { initWallet } from '../modules/wallet.js';
import { initReferral } from '../modules/referral.js';
import { initFooter } from '../modules/footer.js'; // नया इम्पोर्ट

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initHero();
    initWallet();
    initReferral();
    initFooter(); // Footer लोड करें
    
    const loader = document.getElementById('loader-root');
    if (loader) loader.style.display = 'none';
});
