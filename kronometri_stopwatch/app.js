const kohaShfaqu = document.querySelector("#kohaShfaqu");
const startoBtn = document.querySelector("#startoBtn");
const pauzoBtn = document.querySelector("#pauzoBtn");
const ristartoBtn = document.querySelector("#ristartoBtn");

let kohaFillo = 0;
let kohaKaluar = 0;
let kohaAktuale = 0;
let pauzuar = true;
let intervaliId;
let hrs = 0;
let mins = 0;
let secs = 0;


startoBtn.addEventListener("click", () =>{
    if(pauzuar){
        pauzuar = false;
        kohaFillo = Date.now() - kohaKaluar;
        intervaliId = setInterval(perditsoKohen, 75);
    }
});




function perditsoKohen(){
    
    kohaKaluar = Date.now() - kohaFillo;

    secs = Math.floor((kohaKaluar / 1000) % 60);
    mins = Math.floor((kohaKaluar / (1000 * 60)) % 60);
    hrs = Math.floor((kohaKaluar / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    kohaShfaqu.textContent = `${hrs}:${mins}:${secs}`;

    function pad(unit){
        return(("0") + unit).length > 2 ? unit : "0" + unit;
    }
}