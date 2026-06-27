// core/app.js - पूरी तरह से अपडेटेड App-like सिस्टम
import { initHeader } from '../modules/header.js';
import { initHero } from '../modules/hero.js';
import { initWallet } from '../modules/wallet.js';
import { initReferral } from '../modules/referral.js';
import { initFooter } from '../modules/footer.js';
import { initBottomNav } from '../modules/bottom-nav.js'; // नया नेविगेशन इम्पोर्ट

document.addEventListener('DOMContentLoaded', () => {
    console.log("Mukesh Global App Initialized");
    
    // सभी मॉड्यूल्स लोड करें
    initHeader();
    initHero();
    initWallet();
    initReferral();
    initFooter();
    initBottomNav(); // नया नेविगेशन बार लोड करें
    
    // लोडर हटाएं
    const loader = document.getElementById('loader-root');
    if (loader) loader.style.display = 'none';
});
