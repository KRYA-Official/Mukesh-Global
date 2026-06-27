// core/app.js - अपडेटेड सिस्टम
import { initHeader } from '../modules/header.js';
import { initHero } from '../modules/hero.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Mukesh Global Core Initialized");
    
    // सभी मॉड्यूल यहाँ लोड करें
    initHeader();
    initHero();
    
    // लोडर हटाएं
    const loader = document.getElementById('loader-root');
    if (loader) {
        loader.style.display = 'none';
    }
});
