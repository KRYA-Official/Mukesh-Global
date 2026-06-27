// ===============================
// Mukesh Global - script.js
// Version 1.0
// ===============================

const spinBtn = document.getElementById("spinBtn");
const wheel = document.getElementById("wheel");

let spinning = false;

const prizes = [
    "₹10 Reward",
    "Better Luck Next Time",
    "₹20 Reward",
    "Free Spin",
    "₹50 Reward",
    "₹100 Reward",
    "Gift Voucher",
    "Jackpot"
];

spinBtn.addEventListener("click", spinWheel);

function spinWheel(){

    if(spinning){
        return;
    }

    spinning = true;

    spinBtn.disabled = true;
    spinBtn.innerHTML = "Spinning...";

    const prizeIndex = Math.floor(Math.random() * prizes.length);

    const segment = 360 / prizes.length;

    const rotate =
        (360 * 5) +
        (360 - (segment * prizeIndex) - (segment / 2));

    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = `rotate(${rotate}deg)`;

    setTimeout(() => {

        alert("🎉 Congratulations!\n\nYou Won:\n" + prizes[prizeIndex]);

        spinBtn.disabled = false;
        spinBtn.innerHTML = "🎯 Spin Now";

        spinning = false;

    },5000);

}
