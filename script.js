// ======================================
// Mukesh Global Lucky Wheel
// Version 2.0
// ======================================

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

let spinning = false;

// Prize List
const prizes = [
    "₹10 Cashback",
    "₹20 Cashback",
    "₹50 Cashback",
    "₹100 Cashback",
    "Free Spin",
    "Gift Voucher",
    "Better Luck Next Time",
    "Jackpot"
];

// Winner Popup
function showWinner(prize){
    alert(
        "🎉 Congratulations!\n\n" +
        "You Won:\n\n" +
        prize
    );
}

// Lucky Wheel Spin
function spinWheel(){

    if(spinning){
        return;
    }

    spinning = true;

    spinBtn.disabled = true;
    spinBtn.innerHTML = "⏳ Spinning...";

    // Random Prize
    const prizeIndex =
        Math.floor(Math.random()*prizes.length);

    const segment =
        360/prizes.length;

    // Smooth Rotation
    const rotate =
        (360*8) +
        (360-(segment*prizeIndex)-(segment/2));

    wheel.style.transition =
        "transform 5s cubic-bezier(.17,.67,.15,.99)";

    wheel.style.transform =
        `rotate(${rotate}deg)`;

    setTimeout(()=>{

        showWinner(prizes[prizeIndex]);

        spinBtn.disabled = false;

        spinBtn.innerHTML = "🎯 Spin Again";

        spinning = false;

    },5000);

}

// Click Event
spinBtn.addEventListener("click",spinWheel);
